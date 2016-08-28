# UI-Router ng1-to-ng2

### Hybrid Angular 1/Angular 2 UI-Router apps

This module provides [ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html) support for UI-Router, allowing hybrid ng1/ng2 UI-Router apps.  

Your app will be hosted on Angular 1 while you incrementally upgrade it to Angular 2.
With `ng1-to-ng2`, you can use either an Angular 1 or Angular 2 Component as a view in your state definitions.

```js
import { Ng2AboutComponent } from "./about.ng2.component";

/// ...

$stateProvider.state({
  name: 'home', 
  url: '/home',
  component: 'ng1HomeComponent' // ng1 component name
})

.state({
  name: 'about', 
  url: '/about',
  component: Ng2AboutComponentClass // ng2 component class reference
});
```

When routing to an ng2 component, that component uses the 
[ng2 directives (ui-view and uiSref) from `ui-router-ng2`](https://ui-router.github.io/docs/latest/modules/ng2_directives.html).
We do not yet support nesting an angular 1 directive inside an angular 2 ui-view.
Because of this, apps should be migrated starting from leaf views and work up towards the root state. 

See the [hybrid sample app](https://github.com/ui-router/sample-app-ng1-to-ng2) for full example.


*NOTE: ui-router-ng1-to-ng2 version 1.0.11 currently supports only Angular 2.0.0-rc.5*
See https://github.com/ui-router/ng1-to-ng2/issues/13

### Getting started

Add `@angular`, `ui-router-ng2`, and `ui-router-ng1-to-ng2` to your package.json

```
dependencies: {
  ...
  "@angular/common": "=2.0.0-rc.5",
  "@angular/compiler": "=2.0.0-rc.5",
  "@angular/core": "=2.0.0-rc.5",
  "@angular/platform-browser": "=2.0.0-rc.5",
  "@angular/platform-browser-dynamic": "=2.0.0-rc.5",
  "@angular/upgrade": "=2.0.0-rc.5",
   ...
  "ui-router-ng2": "^1.0.0-beta.2",
  "ui-router-ng1-to-ng2": "^1.0.11",
}
```

#### Switch your app from bootstrapping using `ng-app` to using the ngUpgrade manual bootstrap

```
// Create an upgrade adapter instance
import {UpgradeAdapter} from '@angular/upgrade';
export const upgradeAdapter = new UpgradeAdapter();

// Supply ui-router-ng1-to-ng2 with the upgrade adapter
import {uiRouterNgUpgrade} from "ui-router-ng1-to-ng2";
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
// Add 'ui.router.upgrade' to your apps module depedencies
upgradeAdapter.bootstrap(document.body, ['myApp', 'ui.router.upgrade']);
```


#### Route to components

Use `component:` in your state declaration

```
var leaf = { 
  name: 'foo.bar.leaf',
   url: '/leaf',
   component: MyNg2CommponentClass 
};
$stateProvider.state(leaf);
```

#### Declare ui-view at the top level of your application
```
<html>
  <body>
    <ui-view></ui-view>
  </body>
</html>
```

