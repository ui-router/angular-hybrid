import { Component, NgModule, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Ng12LibModule } from 'ng12lib';

@Component({ template: `<h1>hello world</h1>` })
export class MyComponent { }

@NgModule({
  imports: [ BrowserModule, Ng12LibModule ],
  declarations: [MyComponent],
  entryComponents: [MyComponent],
})
export class RootModule { }

platformBrowserDynamic().bootstrapModule(RootModule);
