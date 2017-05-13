import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import progress from 'rollup-plugin-progress';
import sourcemaps from 'rollup-plugin-sourcemaps';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';

let MINIFY = process.env.MINIFY;

let pkg = require('./package.json');
let banner =
`/**
 * ${pkg.description}
 * @version v${pkg.version}
 * @link ${pkg.homepage}
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */`;

let uglifyOpts = { output: {} };
// retain multiline comment with @license
uglifyOpts.output.comments = (node, comment) =>
    comment.type === 'comment2' && /@license/i.test(comment.value);

let plugins = [
  nodeResolve({ jsnext: true }),
  progress(),
  sourcemaps(),
  commonjs(),
  visualizer({ sourcemap: true }),
];

if (MINIFY) plugins.push(uglify(uglifyOpts));

let extension = MINIFY ? '.min.js' : '.js';

// Suppress this error message... there are hundreds of them. Angular team says to ignore it.
// https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED') return;
  console.error(warning.message);
}

function isExternal(id) {
  // @uirouter/* , @angular/* , and angular (angularjs) should be external
  let externals = [
    /^@uirouter\/.*/,
    /^@angular\/.*/,
    /^angular$/,
  ];
  return externals.map(regex => regex.exec(id)).reduce((acc, val) => acc || !!val, false);
}

const CONFIG = {
  moduleName: '@uirouter/angular-hybrid',
  entry: 'lib-esm/index.js',
  dest: '_bundles/ui-router-angular-hybrid' + extension,

  sourceMap: true,
  format: 'umd',
  exports: 'named',
  plugins: plugins,
  banner: banner,

  onwarn: onwarn,
  external: isExternal,

  globals: {
    '@uirouter/core': '@uirouter/core',
    '@uirouter/rx': '@uirouter/rx',
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
  }
};

export default CONFIG;
