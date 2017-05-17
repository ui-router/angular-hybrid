# UI-Router angular-hybrid

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

See the [hybrid sample app](https://github.com/ui-router/sample-app-ng1-to-ng2) for a full example.

### UpgradeAdapter vs UpgradeModule

Version 2.0.0 of `@uirouter/angular-hybrid` only supports `UpgradeAdapter`, which works fine but is no longer in development.
Version 3.0.0 of `@uirouter/angular-hybrid` will support only `UpgradeModule` from `@angular/upgrade/static`, which is what the Angular team actively supports for hybrid mode.
Because we  are dropping support for `UpgradeAdapter`, current users will have to switch to `UpgradeModule`.

### Getting started

Remove `angular-ui-router` (or `@uirouter/angularjs`) from your package.json and replace it with `@uirouter/angular-hybrid`.
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

- Import the `BrowserModule`, `UpgradeModule`, and the `UIRouterUpgradeModule`.

- Any AngularJS services you want to expose to Angular should have a `providers` entry.

- The module should have a no-op `ngDoBootstrap` method.

```js
export function getDialogService($injector) {
  return $injector.get('DialogService');
}

@NgModule({
  imports: [ BrowserModule, UpgradeModule, UIRouterUpgradeModule ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    // Register some AngularJS services as Angular providers
    { provide: 'DialogService', deps: ['$injector'], useFactory: getDialogService },
  ]
}) export class SampleAppModule {
  ngDoBootstrap() { /* no body */ }
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

- Then, bootstrap AngularJS

- Tell UIRouter to synchronize the URL and listen for further URL changes

```js
// Wait until the DOM is ready
angular.element(document).ready(function () {
  // Manually bootstrap the Angular app
  platformBrowserDynamic().bootstrapModule(SampleAppModule).then(platformRef => {
    const injector: Injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;

    // Manually bootstrap the AngularJS app
    upgrade.bootstrap(document.body, ['demo']);

    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    const url: UrlService = injector.get(UrlService);

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
    UIRouterModule.forChild({
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
  // import the Ng1ToNg2Module
  imports: [ BrowserModule, Ng1ToNg2Module, MyFeatureModule ]
}) class SampleAppModule {}
```

[_example_](https://github.com/ui-router/sample-app-angular-hybrid/blob/e4b1144d5e3e3451f0f0cc640175bb7055294fdd/app/bootstrap/bootstrap.ts#L64)

Note: You can also add states directly to the root NgModule using `UIRouterModule.forChild`

```js
@NgModule({
  // import the Ng1ToNg2Module and create a UIRouter "child module"
  imports: [
    BrowserModule,
    Ng1ToNg2Module,
    UIRouterModule.forChild({ states: NG2_STATES })
  ],
  declarations: [NG2_COMPONENTS]
}) class SampleAppModule {}
```

### Limitations:

We currently support routing either Angular (2+) or AngularJS (1.x) components into an AngularJS (1.x) `ui-view`.
However, we do not support routing AngularJS (1.x) components into an Angular (2+) `ui-view`.

If you create an Angular (2+) `ui-view`, then any nested `ui-view` must also be Angular (2+).

Because of this, apps should be migrated starting from leaf states/views and work up towards the root state/view.
