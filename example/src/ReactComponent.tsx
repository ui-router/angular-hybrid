import * as angular from 'angular';
import * as React from 'react';

import { angular2react } from 'angular2react';
import { react2angular } from 'react2angular';
import { $injector } from './angular2react';

export function ReactComponent(props) {
  return (
      <div>
        <h1>hello from react</h1>
        <AngularJSUIView />
      </div>
  )
}

const angularJSUIViewComponentDefinition: angular.IComponentOptions = {
  bindings: { name: '=' },
  controller: function () {
    this.name = this.name || '$default';
  },
  controllerAs: '$ctrl',
  template: `<ui-view name="{{$ctrl.name}}"></ui-view>`
};

angular.module('reactcomponent', ['angular2react'])
    .component('angularJsUiView', angularJSUIViewComponentDefinition)
    .component('reactComponent', react2angular(ReactComponent, null));

interface UIViewProps { name?: string }
const AngularJSUIView = angular2react<UIViewProps>('angularJsUiView', angularJSUIViewComponentDefinition, $injector);

