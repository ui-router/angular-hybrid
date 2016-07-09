import * as angular from "angular";
import {provide, ElementRef, Component, Inject, ComponentMetadata} from "@angular/core";
import {UpgradeAdapter} from "@angular/upgrade";

import { Ng1ViewConfig, StateProvider, State } from "angular-ui-router";

import {
    UIView, UIRouter, TransitionService, StateService, Globals, UIROUTER_DIRECTIVES, forEach,
    UrlRouter, ViewService, StateRegistry, UrlMatcherFactory, Ng2ViewDeclaration, Ng2ViewConfig, PathNode,
    ParentUIViewInject, ViewConfig
} from "ui-router-ng2";

export let upgradeModule = angular.module('ui.router.upgrade', ['ui.router']);

declare var Reflect: any;

@Component({
  selector: 'ui-view-ng-upgrade',
  template: `<ui-view></ui-view>`,
  directives: [UIROUTER_DIRECTIVES],
  viewProviders: [ provide(UIView.PARENT_INJECT, {useValue: { } }) ],
})
/**
 * This angular 2 Component exposes the parent ViewContext as an ng2 DI Provider.
 *
 * It gets the parent ViewContext information (from the parent ng1 ui-view) by walking
 * up the DOM and grabbing the .data('$uiView') that the ng1 ui-view directive provided.
 */
class UIViewNgUpgrade {
  constructor(ref: ElementRef, @Inject(UIView.PARENT_INJECT) parent: ParentUIViewInject, registry: StateRegistry) {
    // From the ui-view-ng-upgrade component's element ref, walk up the DOM two elements...
    // There will first be one ng1 ui-view which hosts this element, and then that ui-view's
    // parent element.  This element has access to the proper "parent viewcontext"

    // The ng2 ui-view is inside this ui-view-ng-upgrade directive, which is inside the ng1 "host" ui-view
    // Both ui-views share the same view context (the view's fqn and created-by-state context information)
    let ng1elem = angular.element(ref.nativeElement).parent().parent();

    // Expose getters for contex and fqn
    Object.defineProperty(parent, "context", {
      get: function() {
        var data = ng1elem['inheritedData']('$uiView');
        return (data && data.$cfg) ? data.$cfg.viewDecl.$context : registry.root();
      },
      enumerable: true
    });

    Object.defineProperty(parent, "fqn", {
      get: function() {
        var data = ng1elem['inheritedData']('$uiView');
        return (data && data.$uiView) ? data.$uiView.fqn : null;
      },
      enumerable: true
    });
  }
}

export let uiRouterNgUpgrade = {
  setUpgradeAdapter(upgradeAdapter: UpgradeAdapter) {
    // Downgrade the ng2 Component to an ng1 directive, to be used in a (generated) view
    // template by ui-router, whenever it finds a view with a `component: Ng2ComponentClass`
    upgradeModule.directive("uiViewNgUpgrade", <any> upgradeAdapter.downgradeNg2Component(UIViewNgUpgrade));

    // Register the ng1 DI UIRouter instance as an ng2 Provider
    upgradeAdapter.upgradeNg1Provider('ng1UIRouter', {asToken: UIRouter});
    
    upgradeAdapter.addProvider(provide(TransitionService, { useFactory: (uiRouter: UIRouter) => uiRouter.transitionService, deps: [UIRouter]}));
    upgradeAdapter.addProvider(provide(StateService,      { useFactory: (uiRouter: UIRouter) => uiRouter.stateService, deps: [UIRouter]}));
    upgradeAdapter.addProvider(provide(UrlMatcherFactory, { useFactory: (r: UIRouter) => { return r.urlMatcherFactory; }, deps: [UIRouter]}));
    upgradeAdapter.addProvider(provide(UrlRouter,         { useFactory: (r: UIRouter) => { return r.urlRouter; }, deps: [UIRouter]}));
    upgradeAdapter.addProvider(provide(ViewService,       { useFactory: (r: UIRouter) => { return r.viewService; }, deps: [UIRouter]}));
    upgradeAdapter.addProvider(provide(StateRegistry,     { useFactory: (r: UIRouter) => { return r.stateRegistry; }, deps: [UIRouter]}));
    upgradeAdapter.addProvider(provide(Globals,   { useFactory: (r: UIRouter) => { return <Globals> r.globals; }, deps: [UIRouter]}));
    
  }
};

/**
 * Predicate that returns true if an object is a NG2 Component Class
 */
export function isNg2ComponentClass(def: any) {
  if (typeof def !== 'function') return false;

  if (!Reflect || typeof Reflect['metadata'] !== 'function')
    throw new Error("Missing runtime dependency: 'reflect-metadata'");

  return Reflect['getMetadata']('annotations', def)
      .find((x: any) => x instanceof ComponentMetadata);
}

/**
 * Define a stateProvider `views` decorator which applies the standard view builder function,
 * then finds any components which are actually a Ng2 Component Class and overwrites that view config.
 *
 * In place of the template provider, it simply puts a <ui-view-ng-upgrade/> component, which is the
 * downgraded Ng2 Component that provides a ng1-to-ng2 boundary in the DOM.
 */
upgradeModule.config([ '$stateProvider', ($stateProvider: StateProvider) => {
  $stateProvider.decorator('views', function(state: State, parentFn: Function) {
    let views = parentFn(state);

    forEach(views, (viewDecl: any, viewName: string) => {
      if (isNg2ComponentClass(viewDecl.component)) {
        // Update the view config.
        // Override default ng1 `component:` behavior (of defining a templateProvider)
        // with a <ui-view-ng-upgrade> adapter directive template
        viewDecl.$type = "ng1-to-ng2";
        viewDecl.templateProvider = null;
        viewDecl.template = "<ui-view-ng-upgrade></ui-view-ng-upgrade>";
      }
    });
    return views;
  })
}]);

upgradeModule.run([ '$view', ($view: ViewService) => {
  $view.viewConfigFactory('ng2', (path: PathNode[], config: Ng2ViewDeclaration) => new Ng2ViewConfig(path, config));

  $view.viewConfigFactory('ng1-to-ng2', (path: PathNode[], config: Ng2ViewDeclaration) => {
    var ng1ViewConfig: ViewConfig = <any> new Ng1ViewConfig(<any> path, <any> Object.assign({}, config, { $type: 'ng1'}));
    var ng2ViewConfig: ViewConfig = <any> new Ng2ViewConfig(<any> path, <any> Object.assign({}, config, { $type: 'ng2'}));

    return [ ng2ViewConfig, ng1ViewConfig ];
  });
}]);
