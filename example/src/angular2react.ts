import { module } from 'angular';

// angular2react requires the $injector when a component mounts.
// Create a proxy object that will delegate to the $injector once the run block executes
// The empty $injector object can be passed to angular2react at any time.
export const $injector = {} as any;

module('angular2react', []).run(['$injector', function(_$injector_) {
  const realInjector: { [key: string]: Function } = _$injector_ as any;
  const proxyInjector: { [key: string]: Function } = $injector as any;

  Object.keys(_$injector_)
      .filter(key => typeof realInjector[key] === 'function')
      .forEach(key => (proxyInjector[key] = realInjector[key].bind(realInjector)));
}]);
