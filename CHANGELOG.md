<a name="3.1.1"></a>
## 3.1.1 (2017-05-22)

Fix missing dev dependency from 3.1.0 release

* chore(deps): Add @angular/compiler-cli ([7a893ba](https://github.com/ui-router/angular-hybrid/commit/7a893ba))



<a name="3.1.0"></a>
# 3.1.0 (2017-05-22)

This version of @uirouter/angular-upgrade supports ahead of time compilation, and lazy loading
of Angular future states via @ngtools/webpack

* fix(AoT): Make angular-hybrid.ts compatible with ngc ([dcf10a2](https://github.com/ui-router/angular-hybrid/commit/dcf10a2))
* fix(AoT): Make hybrid adapter AoT compatible ([e79866a](https://github.com/ui-router/angular-hybrid/commit/e79866a))
* Correct package name in example ([877953f](https://github.com/ui-router/angular-hybrid/commit/877953f))
* Update README.md ([6c75e4b](https://github.com/ui-router/angular-hybrid/commit/6c75e4b))
* doc(*): update README ([18ec03f](https://github.com/ui-router/angular-hybrid/commit/18ec03f))



<a name="3.0.1"></a>
## 3.0.1 (2017-05-16)

* feat(Ng1ToNg2Module): Rename Ng1ToNg2Module to UIRouterUpgradeModule ([fcac2f9](https://github.com/ui-router/angular-hybrid/commit/fcac2f9))


### BREAKING CHANGE

* Rename Ng1ToNg2Module to UIRouterUpgradeModule
(This was supposed to land in version 3.0.0)


<a name="3.0.0"></a>
# 3.0.0 (2017-05-16)

* chore(*): Fix botched merge and re-add ng2LazyLoadBuilder ([8596e2a](https://github.com/ui-router/angular-hybrid/commit/8596e2a))
* chore(*): fix some code comments ([83bc525](https://github.com/ui-router/angular-hybrid/commit/83bc525))
* chore(build): remove old release script ([7128857](https://github.com/ui-router/angular-hybrid/commit/7128857))
* chore(build): tweak npm ignore ([788b5ed](https://github.com/ui-router/angular-hybrid/commit/788b5ed))
* chore(build): update .npmignore ([5a18fe2](https://github.com/ui-router/angular-hybrid/commit/5a18fe2))
* chore(README): Update README ([76aa21a](https://github.com/ui-router/angular-hybrid/commit/76aa21a))
* chore(README): Update README with info about migration to @angular/upgrade/static ([215160a](https://github.com/ui-router/angular-hybrid/commit/215160a))
* feat(ngUpgrade): Add support for @angular/upgrade/static ([4b7fce0](https://github.com/ui-router/angular-hybrid/commit/4b7fce0))
* feat(upgrade): Version 3.x uses @angular/upgrade/static ([1d60e5b](https://github.com/ui-router/angular-hybrid/commit/1d60e5b))
* refactor(static): Clean up imports and switch let to const ([4a0dcaf](https://github.com/ui-router/angular-hybrid/commit/4a0dcaf))
* fix(ngModule): Revert breaking change of module name ([7a37c4a](https://github.com/ui-router/angular-hybrid/commit/7a37c4a))
* fix(static): Remove setup call and get the ng2 injector from ng1 ([27fa6dc](https://github.com/ui-router/angular-hybrid/commit/27fa6dc))
* Specify inputs for downgraded uiViewNgUpgrade ([a47445d](https://github.com/ui-router/angular-hybrid/commit/a47445d))
* Update README.md ([48bad58](https://github.com/ui-router/angular-hybrid/commit/48bad58))


### BREAKING CHANGE

* use `@angular/upgrade/static`
Version 3.0.0 and higher no longer supports `@angular/upgrade`.
We now support only `@angular/upgrade/static`

Your bootstrap process will change.
For details, please see [the sample app](https://github.com/ui-router/sample-app-ng1-to-ng2/commit/2e5accf7799ff48cae048d18383e8dedadd99b41) to see how to migrate your bootstrap to the new style.

Angular no longer actively supports the old `UpgradeAdapter`.
The [currently supported mechanism](https://angular.io/docs/ts/latest/guide/upgrade.html) is `UpgradeModule` from `@angular/upgrade/static`


<a name="2.0.0"></a>
# 2.0.0 (2017-05-13)

* chore(*): bump deps to artifact tags ([550d2ea](https://github.com/ui-router/angular-hybrid/commit/550d2ea))
* chore(*): bumping version to 2.0.0 ([f8003d8](https://github.com/ui-router/angular-hybrid/commit/f8003d8))
* chore(build): Add rollup build file ([8955496](https://github.com/ui-router/angular-hybrid/commit/8955496))
* chore(build): Add scripts dir ([29b2824](https://github.com/ui-router/angular-hybrid/commit/29b2824))
* chore(build): Add UMD module name mappings ([b0c7eed](https://github.com/ui-router/angular-hybrid/commit/b0c7eed))
* chore(build): bump dependencies ([943ac95](https://github.com/ui-router/angular-hybrid/commit/943ac95))
* chore(build): Remove incorrect rollup config ([a3c0fb9](https://github.com/ui-router/angular-hybrid/commit/a3c0fb9))
* chore(travis): Build package with travis ([3948ae2](https://github.com/ui-router/angular-hybrid/commit/3948ae2))
* fix(*): Update for split repositories. Update to ui-router-ng2 1.0.0-beta.4, angular-ui-router 1.0.0 ([4e1050e](https://github.com/ui-router/angular-hybrid/commit/4e1050e))
* fix(angular4): Update hybrid adapter with new DI token for angular injector ([8a85fc0](https://github.com/ui-router/angular-hybrid/commit/8a85fc0))
* fix(build): Switch tsconfig back to module: commonjs ([1b20157](https://github.com/ui-router/angular-hybrid/commit/1b20157))
* fix(ng1-to-ng2): Add ui-router-rx plugin and ng2 loadChildren decorator ([dc58311](https://github.com/ui-router/angular-hybrid/commit/dc58311))
* fix(package): Add prepublish build step allowing installs from git ([c7c693c](https://github.com/ui-router/angular-hybrid/commit/c7c693c))
* feat(hybrid): rename npm package to @uirouter/angular-hybrid. Update project to use latest @uirouter ([6b06e86](https://github.com/ui-router/angular-hybrid/commit/6b06e86))
* Add artifact tagging script ([abfbe9e](https://github.com/ui-router/angular-hybrid/commit/abfbe9e))
* Typo, should be Angular 1 to Angular *2* ([c466cae](https://github.com/ui-router/angular-hybrid/commit/c466cae))
* Update CHANGELOG.md ([14be8a9](https://github.com/ui-router/angular-hybrid/commit/14be8a9))
* bug(*): fix State renamed to StateObject ([50677d1](https://github.com/ui-router/angular-hybrid/commit/50677d1))


### BREAKING CHANGE

* Project name switched from `ui-router-ng1-to-ng2` to `@uirouter/angular-hybrid`

bundle moved to `_bundles/ui-router-angular-hybrid.js`


See: https://github.com/ui-router/ng1-to-ng2/releases
