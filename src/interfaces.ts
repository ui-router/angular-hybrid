import { Ng2StateDeclaration, StatesModule } from '@uirouter/angular';
import { Ng1StateTransitionHook, StateProvider, Ng1StateDeclaration } from '@uirouter/angularjs';
import { IInjectable } from '@uirouter/core';

export interface _NgHybridStateDeclaration extends Ng2StateDeclaration {
  onExit?: any;
  onRetain?: any;
  onEnter?: any;
}

export interface _NgHybridStateModule extends StatesModule {
  states?: any;
}

export interface _NgHybridStateProvider extends StateProvider {
  state(name: any, definition: any): _NgHybridStateProvider;
  state(definition: any): _NgHybridStateProvider;
}

export interface NgHybridStateDeclaration extends _NgHybridStateDeclaration {
  onEnter?: Ng1StateTransitionHook | IInjectable;
  onRetain?: Ng1StateTransitionHook | IInjectable;
  onExit?: Ng1StateTransitionHook | IInjectable;
}

export interface NgHybridStatesModule extends _NgHybridStateModule {
  states?: NgHybridStateDeclaration[];
}

export interface NgHybridStateProvider extends _NgHybridStateProvider {
  state(name: string, definition: NgHybridStateDeclaration | Ng1StateDeclaration): NgHybridStateProvider;
  state(definition: NgHybridStateDeclaration | Ng1StateDeclaration): NgHybridStateProvider;
}
