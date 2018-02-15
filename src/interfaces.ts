import { Ng2StateDeclaration, StatesModule } from '@uirouter/angular';
import { Ng1StateTransitionHook } from '@uirouter/angularjs';
import { IInjectable } from '@uirouter/core';

export interface _NgHybridStateDeclaration extends Ng2StateDeclaration {
  onExit?: any;
  onRetain?: any;
  onEnter?: any;
}

export interface _NgHybridStateModule extends StatesModule {
  states?: any;
}

export interface NgHybridStateDeclaration extends _NgHybridStateDeclaration {
  onEnter?: Ng1StateTransitionHook | IInjectable;
  onRetain?: Ng1StateTransitionHook | IInjectable;
  onExit?: Ng1StateTransitionHook | IInjectable;
}

export interface NgHybridStatesModule extends _NgHybridStateModule {
  states?: NgHybridStateDeclaration[];
}
