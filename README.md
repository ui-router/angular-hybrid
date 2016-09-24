# UI-Router ng1-to-ng2

### Hybrid Angular 1/Angular 2 UI-Router apps

This module provides [ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html) integration
with UI-Router, enabling routing to both Angular 1 and Angular 1 Components (and/or templates).

Your app will be hosted on Angular 1 while you incrementally upgrade it to Angular 2.
With `ui-router-ng1-to-ng2`, you can use either an Angular 1 or Angular 2 component as a view in your state definitions.

```js
import { Ng2AboutComponentClass } from "./about.ng2.component";

/// ...

$stateProvider.state({
  name: 'home', 
  url: '/home',
  component: 'ng1HomeComponent' // ng1 component or directive name
})

.state({
  name: 'about', 
  url: '/about',
  component: Ng2AboutComponentClass // ng2 component class reference
});

.state({
  name: 'other',
  url: '/other',
  template: '<h1>Other</h1>', // ng1 template/controller
  controller: function($scope) { /* do stuff */ }
})

```

When routing to an ng2 component, that ng2 component uses the standard
[ng2 directives (ui-view and uiSref) from `ui-router-ng2`](https://ui-router.github.io/docs/latest/modules/ng2_directives.html).

See the [hybrid sample app](https://github.com/ui-router/sample-app-ng1-to-ng2) for a full example.

### Getting started

Add `@angular`, `ui-router-ng2`, and `ui-router-ng1-to-ng2` to your package.json
in addition to the existing `angular-ui-router`.

```
dependencies: {
  ...
  "@angular/common": "~2.0.1",
  "@angular/compiler": "~2.0.1",
  "@angular/core": "~2.0.1",
  "@angular/platform-browser": "~2.0.1",
  "@angular/platform-browser-dynamic": "~2.0.1",
  "@angular/upgrade": "~2.0.1",
   ...
  "angular-ui-router": "^1.0.0-beta.3",
  "ui-router-ng2": "^1.0.0-beta.3",
  "ui-router-ng1-to-ng2": "^1.0.12",
}
```

#### Bootstrapping a hybrid app

Switch your app from bootstrapping using `ng-app` to using the `ngUpgrade` manual bootstrap

```js
// Add 'ui.router.upgrade' to your ng1 app module's depedencies
let ng1module = angular.module("myApp", [uiRouter, 'ui.router.upgrade']);
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
import {uiRouterNgUpgrade} from "ui-router-ng1-to-ng2";
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
upgradeAdapter.bootstrap(document.body, ['myApp']);
```

#### Route to ng2 components

Register states using either Angular 1 or Angular 2 code.
Use `component:` in your state declaration.

```
var leaf = { 
  name: 'foo.bar.leaf',
   url: '/leaf',
   component: MyNg2CommponentClass 
};
$stateProvider.state(leaf);
```

#### Create ng2 Feature Modules (optional)

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

We currently support creating a `<ui-view>` in an Angular 1 view,
then routing to Angular 1 or Angular 2 components inside that angular 1 `ui-view`.

We do not (yet) support creating a nested `ui-view` in Angular 2, then routing to an angular 1 component.
Once an Angular 2 component has been routed to, any `<ui-view>` inside the Angular 2 component can only be
targeted by other Angular 2 components.

Because of this, apps should be migrated starting from leaf states/views and work up towards the root state/view.

