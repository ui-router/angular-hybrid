import * as angular from 'angular';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';
import { UrlService} from '@uirouter/core';


const app = angular.module('minimal', ['ui.router.upgrade']);

app.run(($stateRegistry, $urlService) => {
  $urlService.rules.initial({state: 'app'});

  $stateRegistry.register({
      url: '',
      name: 'app',
      template: `
        <a ui-sref=".ng1" ui-sref-active-eq="active">app.ng1</a>
        <a ui-sref=".ng1.ng2" ui-sref-active-eq="active">app.ng1.ng2</a>
        <a ui-sref=".ng2" ui-sref-active-eq="active">app.ng2</a>
        <a ui-sref=".ng2.ng2" ui-sref-active-eq="active">app.ng2.ng2</a>
        <ui-view></ui-view>
      `
  });

  // route to ng1 component
  $stateRegistry.register({
      url: '/ng1',
      name: 'app.ng1',
      component: 'ng1Component',
  });

  // nested route to ng2 component
  $stateRegistry.register({
      url: '/ng2',
      name: 'app.ng1.ng2',
      component: Ng2Component,
  });

  // route to ng2 component
  $stateRegistry.register({
      url: '/ng2',
      name: 'app.ng2',
      component: Ng2Component,
  });
});

// An AngularJS component
app.component('ng1Component', {
    template: `
      <h1>ng1 component</h1>
      <a ui-sref="app">Back to app</a>
      <ui-view></ui-view>
    `,
    controller: function() {
      this.$onInit = function() {
        console.log('ng1Component.$onInit()');
      }
    }
});

// An Angular component
@Component({
    selector: 'ng2-component',
    template: `
      <h1>ng2 component</h1>
      <a uiSref="app">Back to app</a>
      <ui-view></ui-view>
    `
})
export class Ng2Component {
  ngOnInit() {
    console.log('Ng2Component.ngOnInit()');
  }
}

const nestedState: NgHybridStateDeclaration = {
  url: '/ng2',
  name: 'app.ng2.ng2',
  component: Ng2Component
};

// The root Angular module
@NgModule({
  imports: [
    BrowserModule,
    // Provide Angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular directives
    UIRouterUpgradeModule.forChild({ states: [nestedState] }),
  ],
  declarations: [Ng2Component],
  entryComponents: [Ng2Component],
}) export class RootModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    // The DOM must be already be available
    this.upgrade.bootstrap(document.body, [app.name]);
  }
}

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
app.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(RootModule).then(platformRef => {
  // get() UrlService from DI (this call will create all the UIRouter services)
  const url: UrlService = platformRef.injector.get(UrlService);

  // Instruct UIRouter to listen to URL changes
  url.listen();
  url.sync();
});
