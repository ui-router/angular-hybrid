import * as angular from "angular";
import {provide, ElementRef, Component, Inject, ComponentMetadata} from "angular2/core";
import {UiView, UIROUTER_DIRECTIVES, forEach} from "ui-router-ng2";
import {CORE_DIRECTIVES} from "angular2/common";
import {UIRouter} from "ui-router-ng2";

export let upgradeModule = angular.module('ui.router.upgrade', ['ui.router']);

@Component({
  selector: 'ui-view-ng-upgrade',
  template: `<ui-view></ui-view>`,
  directives: [CORE_DIRECTIVES, UIROUTER_DIRECTIVES],
  viewProviders: [ provide(UiView.PARENT_INJECT, {useValue: { } }) ],
})
/**
 * This angular 2 Component exposes the parent ViewContext as an ng2 DI Provider.
 *
 * It gets the parent ViewContext information (from the parent ng1 ui-view) by walking
 * up the DOM and grabbing the .data('$uiView') that the ng1 ui-view directive provided.
 */
class UiViewNgUpgrade {
  constructor(ref: ElementRef, @Inject(UiView.PARENT_INJECT) parent) {
    // From the ui-view-ng-upgrade component's element ref, walk up the DOM two elements...
    // There will first be one ng1 ui-view which hosts this element, and then that ui-view's
    // parent element.  This element has access to the proper "parent viewcontext"

    // The ng2 ui-view is inside this ui-view-ng-upgrade directive, which is inside the ng1 "host" ui-view
    // Both ui-views share the same view context (the view's fqn and created-by-state context information)
    let ng1elem = angular.element(ref.nativeElement).parent().parent();

    // Expose getters for contex and fqn
    Object.defineProperty(parent, "context", {
      get: function() { return ng1elem['inheritedData']('$uiView').$cfg.viewDecl.$context ; },
      enumerable: true
    });

    Object.defineProperty(parent, "fqn", {
      get: function() { return ng1elem['inheritedData']('$uiView').$uiView.fqn; },
      enumerable: true
    });
  }
}

export let uiRouterNgUpgrade = {
  setUpgradeAdapter(upgradeAdapter) {
    // Downgrade the ng2 Component to an ng1 directive, to be used in a (generated) view
    // template by ui-router, whenever it finds a view with a `component: Ng2ComponentClass`
    upgradeModule.directive("uiViewNgUpgrade", <any> upgradeAdapter.downgradeNg2Component(UiViewNgUpgrade));

    // Register the ng1 DI UIRouter instance as an ng2 Provider
    upgradeAdapter.upgradeNg1Provider('ng1UIRouter', {asToken: UIRouter});

  }
};

/**
 * Predicate that returns true if an object is a NG2 Component Class
 */
export function isNg2ComponentClass(def) {
  if (typeof def !== 'function') return false;

  if (!Reflect || typeof Reflect['metadata'] !== 'function')
    throw new Error("Missing runtime dependency: 'reflect-metadata'");

  return Reflect['getMetadata']('annotations', def)
      .find(x => x instanceof ComponentMetadata);
}

/**
 * Define a stateProvider `views` decorator which applies the standard view builder function,
 * then finds any components which are actually a Ng2 Component Class and overwrites that view config.
 *
 * In place of the template provider, it simply puts a <ui-view-ng-upgrade/> component, which is the
 * downgraded Ng2 Component that provides a ng1-to-ng2 boundary in the DOM.
 */
upgradeModule.config([ '$stateProvider', $stateProvider => {
  $stateProvider.decorator('views', function(state /*: Ng1StateDeclaration */, parentFn: Function) {
    let views = parentFn(state);

    forEach(views, (viewDecl /*: Ng1ViewDeclaration */, viewName: string) => {
      if (isNg2ComponentClass(viewDecl.component)) {
        // Update the view config.
        // Override default ng1 `component:` behavior (of defining a templateProvider)
        // with a <ui-view-ng-upgrade> adapter directive template
        viewDecl.templateProvider = null;
        viewDecl.template = "<ui-view-ng-upgrade></ui-view-ng-upgrade>";
      }
    });
    return views;
  })
}]);

