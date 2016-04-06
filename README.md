# UI-Router ng1-to-ng2

### Hybrid Angular 1/Angular 2 UI-Router apps

This module provides [ngUpgrade](https://angular.io/docs/ts/latest/guide/upgrade.html) support for UI-Router, allowing hybrid ng1/ng2 UI-Router apps.  

Your app will be hosted on Angular 1 while you incrementally upgrade it to Angular 2.   After configuring your app, you can use an Angular 2 Component as a view in your state definitions.

Once you route to a ng2 component, you can continue to use the ng2 directives (ui-view and uiSref) from ui-router-ng2.  We do not yet support nesting an angular 1 directive inside an angular 2 ui-view.  Because of this, apps should be migrated starting from leaf views up to the root state. 

### Getting started

Add "ui-router-ng1-to-ng2" to your package.json

```
dependencies: {
  ...
  "ui-router-ng1-to-ng2": "^1.0.0"
}
```

#### Switch your app from bootstrapping using `ng-app` to using the ngUpgrade manual bootstrap

```
// Create an upgrade adapter instance
import {UpgradeAdapter} from 'angular2/upgrade';
export const upgradeAdapter = new UpgradeAdapter();

// Supply ui-router-ng1-to-ng2 with the upgrade adapter
import {uiRouterNgUpgrade} from "ui-router-ng1-to-ng2";
uiRouterNgUpgrade.setUpgradeAdapter(upgradeAdapter);

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
upgradeAdapter.bootstrap(document.body, ['myApp']);
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

