# UI-Router angular-hybrid

### UI-Router support for Hybrid Angular/AngularJS apps

This module provides [ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html) integration with UI-Router.
It enables UI-Router to route to both AngularJS and Angular components (and/or templates).

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
  "@uirouter/angular-upgrade": "^2.0.0",
  ...
}
```

#### Bootstrapping a hybrid app

Switch your app from bootstrapping using `ng-app` to using the `ngUpgrade` manual bootstrap

```js
// Add 'ui.router.upgrade' to your ng1 app module's depedencies
let ng1module = angular.module("myApp", ['ui.router', 'ui.router.upgrade']);
```

```js
// Create an Angular 2 root NgModule
@NgModule({
  // import the Ng1ToNg2Module
  imports: [ BrowserModule, Ng1ToNg2Module ]
}) class SampleAppModule {}

// Create an upgrade adapter instance
import {UpgradeAdapter} from '@angular/upgrade';
let upgradeAdapter = new UpgradeAdapter(SampleAppModule);

// Supply ui-router-ng1-to-ng2 with the upgrade adapter
import {uiRouterNgUpgrade} from "@uirouter/angular-hybrid";
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
upgradeAdapter.bootstrap(document.body, ['myApp']);
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

Add the feature module to the root NgModule imports
```js
@NgModule({
  // import the Ng1ToNg2Module
  imports: [ BrowserModule, Ng1ToNg2Module, MyFeatureModule ]
}) class SampleAppModule {}
```

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
