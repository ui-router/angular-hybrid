# UI-Router angular-hybrid

[![Build Status](https://travis-ci.org/ui-router/angular-hybrid.svg?branch=master)](https://travis-ci.org/ui-router/angular-hybrid)
[![Greenkeeper badge](https://badges.greenkeeper.io/ui-router/angular-hybrid.svg)](https://greenkeeper.io/)

### UI-Router support for Hybrid Angular/AngularJS apps

This module provides [ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html) integration with UI-Router.
It enables UI-Router to route to both AngularJS components (and/or templates) and Angular components.

Your app will be hosted by AngularJS while you incrementally upgrade it to Angular.
With `@uirouter/angular-hybrid` you can use either an Angular component or an AngularJS component/template as the view in a state definition.

```js
import { Ng2AboutComponentClass } from "./about.ng2.component";

/// ...

$stateProvider.state({
  name: 'home',
  url: '/home',
  component: 'ng1HomeComponent' // AngularJS component or directive name
})

.state({
  name: 'about',
  url: '/about',
  component: Ng2AboutComponentClass // Angular component class reference
});

.state({
  name: 'other',
  url: '/other',
  template: '<h1>Other</h1>', // AngularJS template/controller
  controller: function($scope) { /* do stuff */ }
})

```

When routing to an Angular component, that component uses the standard
[Angular directives (ui-view and uiSref) from `@uirouter/angular`](https://ui-router.github.io/ng2/docs/latest/modules/directives.html).

When routing to an AngularJS component or template, that component uses the standard
[AngularJS directives (ui-view and ui-sref) from `@uirouter/angularjs`](https://ui-router.github.io/ng1/docs/latest/modules/directives.html).

See the [hybrid sample app](https://github.com/ui-router/sample-app-angular-hybrid) for a full example.

### Getting started

Remove `angular-ui-router` (or `@uirouter/angularjs`) from your AngularJS app's package.json and replace it with `@uirouter/angular-hybrid`.
Add the `@angular/*` dependencies.

```
dependencies: {
  ...
  "@angular/common": "^4.0.0",
  "@angular/compiler": "^4.0.0",
  "@angular/core": "^4.0.0",
  "@angular/platform-browser": "^4.0.0",
  "@angular/platform-browser-dynamic": "^4.0.0",
  "@angular/upgrade": "^4.0.0",
   ...
  "@uirouter/angular-hybrid": "^3.0.1",
  ...
}
```

Remove any `ng-app` attributes from your main HTML file.
We need to use manual AngularJS bootstrapping mode.

#### Add AngularJS module `ui.router.upgrade`

- Add 'ui.router.upgrade' to your AngularJS app module's depedencies

```js
let ng1module = angular.module("myApp", ['ui.router', 'ui.router.upgrade']);
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/ngmodule.ts#L21-L25)

#### Create a root Angular NgModule

- Import the `BrowserModule`, `UpgradeModule`, and a `UIRouterUpgradeModule.forChild()` module.
- Add `providers` entry for any AngularJS services you want to expose to Angular.
- The module should have a `ngDoBootstrap` method which calls the `UpgradeModule`'s `bootstrap` method.


```js
export function getDialogService($injector) {
  return $injector.get('DialogService');
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule.forChild({ states: ngHybridStates }),
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    // Register some AngularJS services as Angular providers
    { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
  ]
}) export class SampleAppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name]);
  }
}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/bootstrap.ts#L63-L73)


#### Defer intercept

Tell UI-Router that it should wait until all bootstrapping is complete before doing the initial URL synchronization.

```js
ngmodule.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/bootstrap.ts#L75-L76)


#### Bootstrap the app

- Bootstrap Angular
- Angular runs ngDoBootstrap() which bootstraps AngularJS
- Chain off `bootstrapModule()` and tell UIRouter to synchronize the URL and listen for further URL changes

```js
// Wait until the DOM is ready
angular.element(document).ready(function () {
  // Manually bootstrap the Angular app
  platformBrowserDynamic().bootstrapModule(SampleAppModule).then(platformRef => {
    // get() UrlService from DI (this call will create all the UIRouter services)
    const url: UrlService = platformRef.injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    url.listen();
    url.sync();
  });
});
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/bootstrap.ts#L78-L95)

#### Route to AngularJS components/templates

Your existing AngularJS routes work the same as before.

```
var foo = {
  name: 'foo',
  url: '/foo',
  component: 'fooComponent'
};
$stateProvider.state(foo);

var bar = {
  name: 'foo.bar',
  url: '/bar',
  templateUrl: '/bar.html',
  controller: 'BarController'
};
$stateProvider.state(bar);
```

#### Route to Angular components

Register states using either Angular or AngularJS code.
Use `component:` in your state declaration.

```
var leaf = {
  name: 'foo.bar.leaf',
  url: '/leaf',
  component: MyNg2CommponentClass
};
$stateProvider.state(leaf);
```

#### Create Angular Feature Modules (optional)

```js
@NgModule({
  imports: [
    UIRouterUpgradeModule.forChild({
      states: [featureState1, featureState2]
    })
  ],
  declarations: [FeatureComponent1, FeatureComponent2]
})
export class MyFeatureModule {}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/prefs/index.ts#L11-L22)

Add the feature module to the root NgModule imports
```js
@NgModule({
  imports: [
    BrowserModule,
    UIRouterUpgradeModule,
    MyFeatureModule
  ]
}) class SampleAppModule {}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/bootstrap.ts#L64)

Note: You can also add states directly to the root NgModule using `UIRouterModule.forChild`

```js
@NgModule({
  // import the Ng1ToNg2Module and create a UIRouter "child module"
  imports: [
    BrowserModule,
    UIRouterUpgradeModule.forChild({ states: NG2_STATES })
  ],
  declarations: [NG2_COMPONENTS]
}) class SampleAppModule {}
```

### Limitations:

We currently support routing either Angular (2+) or AngularJS (1.x) components into an AngularJS (1.x) `ui-view`.
However, we do not support routing AngularJS (1.x) components into an Angular (2+) `ui-view`.

If you create an Angular (2+) `ui-view`, then any nested `ui-view` must also be Angular (2+).

Because of this, apps should be migrated starting from leaf states/views and work up towards the root state/view.

---

When a state has an `onEnter`, `onExit`, or `onRetain`, they are always injected (AngularJS style),
even if the state uses Angular 2+ components or is added to an `UIRouterUpgradeModule.forChild` `NgModule`.

```js
export function ng2StateOnEnter(transition: Transition, svc: MyService) {
  console.log(transition.to().name + svc.getThing());
}
ng2StateOnEnter.$inject = [Transition, 'MyService'];
export const NG2_STATE = {
  name: 'ng2state', url: '/ng2state',
  onEnter: ng2StateOnEnter
}
```

# Examples

The minimal example of `@uirouter/angular-hybrid` can be found here: https://github.com/ui-router/angular-hybrid/tree/master/example

A full fledged sample application example can be found here: https://github.com/ui-router/sample-app-angular-hybrid

# UpgradeAdapter vs UpgradeModule

Version 2.0.0 of `@uirouter/angular-hybrid` only supports `UpgradeAdapter`, which works fine but is no longer in development.
Version 30.0+ of `@uirouter/angular-hybrid` only supports `UpgradeModule` from `@angular/upgrade/static`, which is what the Angular team actively supports for hybrid mode.
Because we dropped support for `UpgradeAdapter`, current users of `@uirouter/angular-hybrid` 2.x will have to switch to `UpgradeModule` when upgrading to 3.x.

