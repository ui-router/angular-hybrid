# UI-Router angular-hybrid

[![Build Status](https://travis-ci.org/ui-router/angular-hybrid.svg?branch=master)](https://travis-ci.org/ui-router/angular-hybrid)

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
  "@angular/common": "^6.0.0",
  "@angular/compiler": "^6.0.0",
  "@angular/core": "^6.0.0",
  "@angular/platform-browser": "^6.0.0",
  "@angular/platform-browser-dynamic": "^6.0.0",
  "@angular/upgrade": "^6.0.0",
   ...
  "@uirouter/angular-hybrid": "^6.0.0",
  ...
}
```

Remove any `ng-app` attributes from your main HTML file.
We need to use manual AngularJS bootstrapping mode.

#### Add AngularJS module `ui.router.upgrade`

* Add 'ui.router.upgrade' to your AngularJS app module's depedencies

```js
let ng1module = angular.module('myApp', ['ui.router', 'ui.router.upgrade']);
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/ngmodule.ts#L21-L25)

#### Create a root Angular NgModule

* Import the `BrowserModule`, `UpgradeModule`, and a `UIRouterUpgradeModule.forRoot()` module.
* Add `providers` entry for any AngularJS services you want to expose to Angular.
* The module should have a `ngDoBootstrap` method which calls the `UpgradeModule`'s `bootstrap` method.

```js
export function getDialogService($injector) {
  return $injector.get('DialogService');
}

@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular directives and registers
    // the future state for the lazy loaded contacts module
    UIRouterUpgradeModule.forRoot({ states: [contactsFutureState] }),
  ],
  providers: [
    // Provide the SystemJsNgModuleLoader when using Angular lazy loading
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },

    // Register some AngularJS services as Angular providers
    { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
    { provide: 'Contacts', deps: ['$injector'], useFactory: getContactsService },
  ]
})
export class SampleAppModuleAngular {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name], { strictDi: true });
  }
}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/878095bc7ed1948bb8ebf6e67d77724354393455/app/angularModule.ts#L26-L53)

#### Defer intercept

Tell UI-Router that it should wait until all bootstrapping is complete before doing the initial URL synchronization.

```js
ngmodule.config(['$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept()]);
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/878095bc7ed1948bb8ebf6e67d77724354393455/app/main.ts#L38-L40)

#### Bootstrap the app

* Bootstrap Angular
* Angular runs ngDoBootstrap() which bootstraps AngularJS
* Chain off `bootstrapModule()` and tell UIRouter to synchronize the URL and listen for further URL changes
  * Do this in the Angular Zone to avoid "digest already in progress" errors.

```js
platformBrowserDynamic()
  .bootstrapModule(SampleAppModuleAngular)
  .then(platformRef => {
    // Intialize the Angular Module
    // get() the UIRouter instance from DI to initialize the router
    const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

    // Instruct UIRouter to listen to URL changes
    function startUIRouter() {
      urlService.listen();
      urlService.sync();
    }

    platformRef.injector.get < NgZone > NgZone.run(startUIRouter);
  });
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/878095bc7ed1948bb8ebf6e67d77724354393455/app/main.ts#L42-L55)

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
      states: [featureState1, featureState2],
    }),
  ],
  declarations: [FeatureComponent1, FeatureComponent2],
})
export class MyFeatureModule {}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/878095bc7ed1948bb8ebf6e67d77724354393455/app/prefs/prefs.module.ts#L10-L21

Add the feature module to the root NgModule imports

```js
@NgModule({
  imports: [BrowserModule, UIRouterUpgradeModule.forChild({ states }), MyFeatureModule],
})
class SampleAppModule {}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/878095bc7ed1948bb8ebf6e67d77724354393455/app/angularModule.ts#L35-L36)

### Limitations:

We currently support routing either Angular (2+) or AngularJS (1.x) components into an AngularJS (1.x) `ui-view`.
However, we do not support routing AngularJS (1.x) components into an Angular (2+) `ui-view`.

If you create an Angular (2+) `ui-view`, then any nested `ui-view` must also be Angular (2+).

Because of this, apps should be migrated starting from leaf states/views and work up towards the root state/view.

---

When a state has an `onEnter`, `onExit`, or `onRetain`, they are always injected (AngularJS style),
even if the state uses Angular 2+ components or is added to an `UIRouterUpgradeModule` `NgModule`.

```js
export function ng2StateOnEnter(transition: Transition, svc: MyService) {
  console.log(transition.to().name + svc.getThing());
}
ng2StateOnEnter.$inject = [Transition, 'MyService'];
export const NG2_STATE = {
  name: 'ng2state',
  url: '/ng2state',
  onEnter: ng2StateOnEnter,
};
```

# Examples

The minimal example of `@uirouter/angular-hybrid` can be found here:
https://github.com/ui-router/angular-hybrid/tree/master/example

A minimal example can also be found on stackblitz:
https://stackblitz.com/edit/ui-router-angular-hybrid

A large sample application example with lazy loaded modules can be found here:
https://github.com/ui-router/sample-app-angular-hybrid

The same sample application can be live-edited using Angular CLI and StackBlitz here:
https://stackblitz.com/github/ui-router/sample-app-angular-hybrid/tree/angular-cli

# UpgradeAdapter vs UpgradeModule

Version 2.0.0 of `@uirouter/angular-hybrid` only supports `UpgradeAdapter`, which works fine but is no longer in development.
Version 3.0.0+ of `@uirouter/angular-hybrid` only supports `UpgradeModule` from `@angular/upgrade/static`, which is what the Angular team actively supports for hybrid mode.
Because we dropped support for `UpgradeAdapter`, current users of `@uirouter/angular-hybrid` 2.x will have to switch to `UpgradeModule` when upgrading to 3.x.
