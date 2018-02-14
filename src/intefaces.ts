import { ModuleWithProviders } from '@angular/core';
import { Ng2StateDeclaration, RootModule, StatesModule, UIRouterModule } from '@uirouter/angular';
import { Ng1StateTransitionHook } from '@uirouter/angularjs';
import { IInjectable } from '@uirouter/core';

export interface _Ng2HybridStateDeclaration extends Ng2StateDeclaration {
  onExit?: any;
  onRetain?: any;
  onEnter?: any;
}

export interface _HybridStateModule extends StatesModule {
  states?: any;
}

export interface _HybridRootModule extends RootModule {
  states?: any
}

export interface Ng2HybridStateDeclaration extends _Ng2HybridStateDeclaration {
  onEnter?: Ng1StateTransitionHook | IInjectable;
  onRetain?: Ng1StateTransitionHook | IInjectable;
  onExit?: Ng1StateTransitionHook | IInjectable;
}

export interface HybridStateModule extends _HybridStateModule {
  states?: Ng2HybridStateDeclaration[];
}

export interface HybridRootModule extends _HybridRootModule {
  states?: Ng2HybridStateDeclaration[];
}

export interface IUIRouterHybridModule extends UIRouterModule {
  forRoot(config?: HybridRootModule): ModuleWithProviders

  forChild(module?: HybridStateModule): ModuleWithProviders;
}