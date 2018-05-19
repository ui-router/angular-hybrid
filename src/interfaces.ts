import { Ng2StateDeclaration, StatesModule } from '@uirouter/angular';
import { Ng1StateDeclaration, Ng1StateTransitionHook } from '@uirouter/angularjs';
import { StateProvider } from '@uirouter/angularjs/lib/stateProvider';
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

declare module '@uirouter/core/lib/state/stateRegistry' {
  interface StateRegistry {
    register(state: Ng1StateDeclaration);
    register(state: Ng2StateDeclaration);
  }
}

declare module '@uirouter/angularjs/lib/stateProvider' {
  interface StateProvider {
    state(name: string, definition: Ng1StateDeclaration): StateProvider;
    state(name: string, definition: Ng2StateDeclaration): StateProvider;
    state(definition: Ng1StateDeclaration): StateProvider;
    state(definition: Ng2StateDeclaration): StateProvider;
  }
}
