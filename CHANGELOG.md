## 11.0.1 (2020-07-21)
[Compare `@uirouter/angular-hybrid` versions 11.0.0 and 11.0.1](https://github.com/ui-router/angular-hybrid/compare/11.0.0...11.0.1)


---


### Updated `@uirouter/core` from 6.0.5 to 6.0.6


Changelog for `@uirouter/core`:


[Compare `@uirouter/core` versions 6.0.5 and 6.0.6](https://github.com/ui-router/core/compare/6.0.5...6.0.6)

### Bug Fixes

* **params:** Bi-directionally en/decode path and search params. ([#618](https://github.com/ui-router/core/issues/618)) ([89e99cd](https://github.com/ui-router/core/commit/89e99cd))


---


### Updated `@uirouter/angularjs` from 1.0.26 to 1.0.27


Changelog for `@uirouter/angularjs`:


[Compare `@uirouter/angularjs` versions 1.0.26 and 1.0.27](https://github.com/angular-ui/ui-router/compare/1.0.26...1.0.27)

### Bug Fixes

* make augmented StateRegistry.register overload better match the signature in core ([db4e63f](https://github.com/angular-ui/ui-router/commit/db4e63f))


# 11.0.0 (2020-07-16)
[Compare `@uirouter/angular-hybrid` versions 10.0.1 and 11.0.0](https://github.com/ui-router/angular-hybrid/compare/10.0.1...11.0.0)

This release supports Angular 9 and 10

### Updated `@uirouter/core` from 6.0.1 to 6.0.5


Changelog for `@uirouter/core`:

[Compare `@uirouter/core` versions 6.0.1 and 6.0.5](https://github.com/ui-router/core/compare/6.0.1...6.0.5)

### Bug Fixes

* **hof:** Rewrite curry from scratch ([fc324c6](https://github.com/ui-router/core/commit/fc324c6)), closes [#350](https://github.com/ui-router/core/issues/350)
* **IE9:** Add safeConsole so IE9 doesn't break ([9c8579d](https://github.com/ui-router/core/commit/9c8579d))
* **safeConsole:** check if document is defined to avoid issues in node environments ([da29d88](https://github.com/ui-router/core/commit/da29d88))
* **TargetState:** make isDef check more thorough ([e657cfe](https://github.com/ui-router/core/commit/e657cfe))


### Features

* **stateService:** add transition option 'supercede' so transition can be ignored if one is pending ([6e5a56f](https://github.com/ui-router/core/commit/6e5a56f))
* **urlRuleFactory:** Add support for StateDeclarations in UrlRuleFactory.fromState() ([539d33a](https://github.com/ui-router/core/commit/539d33a))


---


### Updated `@uirouter/angular` from 6.0.1 to 7.0.0


Changelog for `@uirouter/angular`:


[Compare `@uirouter/angular` versions 6.0.1 and 7.0.0](https://github.com/ui-router/angular/compare/6.0.1...7.0.0)

### Bug Fixes

* **LocationServices:** Apply the hash correctly when a query string is present ([0192877](https://github.com/ui-router/angular/commit/0192877)), closes [#747](https://github.com/ui-router/angular/issues/747)
* **tokens:** Export injection tokens ([#810](https://github.com/ui-router/angular/issues/810)) ([b9c338d](https://github.com/ui-router/angular/commit/b9c338d)), closes [#805](https://github.com/ui-router/angular/issues/805)
* **uiSref:** Render empty 'href' for states that have no urls ([5020c79](https://github.com/ui-router/angular/commit/5020c79)), closes [#721](https://github.com/ui-router/angular/issues/721)
* **uiSrefActive:** Fix nested UISrefActive where UISref components are added/removed dynamically ([#811](https://github.com/ui-router/angular/issues/811)) ([8d35dc1](https://github.com/ui-router/angular/commit/8d35dc1)), closes [#760](https://github.com/ui-router/angular/issues/760)


### Features

* create OnUiParamsChanged, OnUiExit interfaces  ([#800](https://github.com/ui-router/angular/issues/800)) ([ea4574d](https://github.com/ui-router/angular/commit/ea4574d)), closes [#788](https://github.com/ui-router/angular/issues/788)
* Support Angular 9-10 ([56bd176](https://github.com/ui-router/angular/commit/56bd176))
* **update_dependencies:** Add a repository_dispatch trigger ([d7a9777](https://github.com/ui-router/angular/commit/d7a9777))


### BREAKING CHANGES

- Drop support for Angular v8 and support for Angular v10


## 10.0.1 (2019-12-02)
[Compare `@uirouter/angular-hybrid` versions 10.0.0 and 10.0.1](https://github.com/ui-router/angular-hybrid/compare/10.0.0...10.0.1)

### Bug Fixes

* **package:** mark package as having side-effects ([#385](https://github.com/ui-router/angular-hybrid/issues/385)) ([29515bc](https://github.com/ui-router/angular-hybrid/commit/29515bc))

# 10.0.0 (2019-11-25)
[Compare `@uirouter/angular-hybrid` versions 9.0.0 and 10.0.0](https://github.com/ui-router/angular-hybrid/compare/9.0.0...10.0.0)

### Bug Fixes

* **example:** update to angular v8 ([c5b365b](https://github.com/ui-router/angular-hybrid/commit/c5b365b))

### Features

* **package:** update uirouter angular dependency to support angular 9 and bundle with ng-packagr ([#379](https://github.com/ui-router/angular-hybrid/issues/379)) ([384e428](https://github.com/ui-router/angular-hybrid/commit/384e428))

### BREAKING CHANGES

* **package:** This package drops support for Angular versions 7 and below.  You must now upgrade to Angular 8 or higher to use this package.
* **package:** UIRouter dependencies have been moved to peerDependencies.  You must now install peer dependencies manually using `npx check-peer-dependencies --install`.
* **angular:** `@uirouter/angular` has additional breaking changes, see below.


---


### Updated `@uirouter/angular` from 5.0.0 to 6.0.1


Changelog for `@uirouter/angular`:


[Compare `@uirouter/angular` versions 5.0.0 and 6.0.1](https://github.com/ui-router/angular/compare/5.0.0...6.0.1)

* Ivy support (#674) ([00e9d6a](https://github.com/ui-router/angular/commit/00e9d6a)), closes [#674](https://github.com/ui-router/angular/issues/674)


### Bug Fixes

* **ivy:** Inject host UISref separately to account for behavior change in [@ContentChildren](https://github.com/ContentChildren) ([ebd2e40](https://github.com/ui-router/angular/commit/ebd2e40)), closes [/github.com/angular/angular/issues/8277#issuecomment-323678013](https://github.com//github.com/angular/angular/issues/8277/issues/issuecomment-323678013)
* fix(angular8): Add static: true to ViewChild
* fix(lazyLoad): Remove dependency on angular/router in favor of using ivy.
  Ivy supports lazy loading of modules without depending on the ROUTES token from angular/router.


### Features

* **lazyLoad:** Remove NgModuleToLoad type (string based lazy module loading) ([2f1506c](https://github.com/ui-router/angular/commit/2f1506c))
* feat(package): Drop support for Angular version 7 and lower


### BREAKING CHANGES

* UIRouter for Angular v6.0.0 now requires Angular 8 or higher

* **lazyLoad:** Removed string based lazy module loading via loadChildren

Previously, we supported `loadChildren: './lazymodule/lazy.module.ts#LazyModule'`

This lazy load mechanism is deprecated in Angular 8 in favor of:
`loadChildren: import('./lazymodule/lazy.module).then(x => x.LazyModule)`

Migrate your `loadChildren`(s) to the `import()` style.

* UIRouter core and rx packages are now `peerDependencies`.
You will need to explicitly install the correct versions of `@uirouter/core` and `@uirouter/rx` into your project.

before:

```
dependencies: {
  "@uirouter/angular": "4.0.0"
}
```

after (example -- versions will vary):
```
dependencies: {
  "@uirouter/angular": "5.0.0"
  "@uirouter/core": "6.0.1",
  "@uirouter/rx": "0.6.0",
}
```

Or, use this command to automatically install peerDependencies:

```
npx check-peer-dependencies --install
```

# 9.0.0 (2019-10-02)
[Compare `@uirouter/angular-hybrid` versions 8.0.0 and 9.0.0](https://github.com/ui-router/angular-hybrid/compare/8.0.0...9.0.0)

### Bug Fixes

* **travis:** remove explicit call to xvfb ([3b124cc](https://github.com/ui-router/angular-hybrid/commit/3b124cc))
* **travis:** use service: xvfb instead of launching it manually.  install libgconf debian package ([e85f678](https://github.com/ui-router/angular-hybrid/commit/e85f678))


### Features

* update ui-router/angular dependency that supports angular 8 ([b97af69](https://github.com/ui-router/angular-hybrid/commit/b97af69))


---

### Updated `@uirouter/core` from 5.0.23 to 6.0.1
[Compare `@uirouter/core` versions 5.0.23 and 6.0.1](https://github.com/ui-router/core/compare/5.0.23...6.0.1)

### Bug Fixes

* **resolve:** remove unnecessary generics from CustomAsyncPolicy ([#452](https://github.com/ui-router/core/issues/452)) ([61f4ee9](https://github.com/ui-router/core/commit/61f4ee9))
* **travis:** use service: xvfb instead of launching it manually.  install libgconf debian package ([ac1ef4b](https://github.com/ui-router/core/commit/ac1ef4b))


### Features

* **resolve:** Remove RXWAIT async policy in favour of allowing user defined async policy function ([#366](https://github.com/ui-router/core/issues/366)) ([0ad87f6](https://github.com/ui-router/core/commit/0ad87f6))


### BREAKING CHANGES

* **resolve:** RXWAIT async policy has been removed, but it never worked in the first place


---

### Updated `@uirouter/angular` from 3.0.0 to 5.0.0
[Compare `@uirouter/angular` versions 3.0.0 and 5.0.0](https://github.com/ui-router/angular/compare/3.0.0...5.0.0)

### Bug Fixes

* **travis:** use service: xvfb instead of launching it manually.  install libgconf debian package ([309fc9b](https://github.com/ui-router/angular/commit/309fc9b))


### Chores

* **package:** update [@uirouter/core](https://github.com/uirouter/core) and [@uirouter/rx](https://github.com/uirouter/rx) to enable support for observables in resolves ([#646](https://github.com/ui-router/angular/issues/646)) ([4661bab](https://github.com/ui-router/angular/commit/4661bab))


### Features

* **uirouter:** Add support for Angular 8 ([c141d95](https://github.com/ui-router/angular/commit/c141d95))


### BREAKING CHANGES

* **package:** Removed RXWAIT async policy (which was broken) in favor of supporting custom resolve policies.  Added a custom RXWAIT policy to uirouter/rx which is included in uirouter/angular

---


### Updated `@uirouter/angularjs` from 1.0.22 to 1.0.23
[Compare `@uirouter/angularjs` versions 1.0.22 and 1.0.23](https://github.com/angular-ui/ui-router/compare/1.0.22...1.0.23)

### Bug Fixes

* **stateFilters:** Export each function individually ([978b882](https://github.com/angular-ui/ui-router/commit/978b882))
* **travis:** Fix travis build ([dc0f58a](https://github.com/angular-ui/ui-router/commit/dc0f58a))
* **types:** Remove [@types](https://github.com/types)/jquery from devDependencies, upgrade [@types](https://github.com/types)/angular ([b12bc84](https://github.com/angular-ui/ui-router/commit/b12bc84))
* **viewDirective:** add check for componentProvider, avoid extra trigger for $onInit (fixing [#3735](https://github.com/angular-ui/ui-router/issues/3735)) ([#3779](https://github.com/angular-ui/ui-router/issues/3779)) ([c3e87ad](https://github.com/angular-ui/ui-router/commit/c3e87ad))

# 8.0.0 (2019-06-25)
[Compare `@uirouter/angular-hybrid` versions 7.0.0 and 8.0.0](https://github.com/ui-router/angular-hybrid/compare/7.0.0...8.0.0)

### Features

* support Angular v8 ([e8a8419](https://github.com/ui-router/angular-hybrid/commit/e8a8419))

# 7.0.0 (2019-02-12)
[Compare `@uirouter/angular-hybrid` versions 6.0.3 and 7.0.0](https://github.com/ui-router/angular-hybrid/compare/6.0.3...7.0.0)

### Bug Fixes

* **angularjs:** Get AngularJS reference using 'getAngularJSGlobal()' ([d53d134](https://github.com/ui-router/angular-hybrid/commit/d53d134)), closes [#240](https://github.com/ui-router/angular-hybrid/issues/240)
* **upgrade:** Fix "no provider" error while injecting a falsy ng1 provider ([1a06a9a](https://github.com/ui-router/angular-hybrid/commit/1a06a9a))


### BREAKING CHANGES

* **angularjs:** If 'angular' variable is not on the window, you must provide it using 'setAngularJSGlobal(angular);'.
https://github.com/ui-router/angular-hybrid/wiki/AngularJS-not-found-on-window


### Updated `@uirouter/angular` from 2.0.4 to 3.0.0
[Compare `@uirouter/angular` versions 2.0.4 and 3.0.0](https://github.com/ui-router/angular/compare/2.0.4...3.0.0)

### Features

* **angular:** Updates for Angular 7 ([7f3132a](https://github.com/ui-router/angular/commit/7f3132a))

## 6.0.3 (2019-02-03)
[Compare `@uirouter/angular-hybrid` versions 6.0.2 and 6.0.3](https://github.com/ui-router/angular-hybrid/compare/6.0.2...6.0.3)


### Updated `@uirouter/core` from 5.0.21 to 5.0.23
[Compare `@uirouter/core` versions 5.0.21 and 5.0.23](https://github.com/ui-router/core/compare/5.0.21...5.0.23)

### Bug Fixes

* **lazyLoad:** StateBuilder should not mutate the state declaration ([1478a3c](https://github.com/ui-router/core/commit/1478a3c)), closes [/github.com/ui-router/core/commit/3cd5a2a#r31260154](https://github.com//github.com/ui-router/core/commit/3cd5a2a/issues/r31260154)
* **state:** Update URL in response to ignored transition due to redirect ([c64c252](https://github.com/ui-router/core/commit/c64c252))
* **test_downstream_projects:** don't double build core while testing downstreams ([148b16b](https://github.com/ui-router/core/commit/148b16b))
* **typescript:** Fix typing of onChange callback in UrlService ([961ed0f](https://github.com/ui-router/core/commit/961ed0f)), closes [#229](https://github.com/ui-router/core/issues/229)
* **typescript:** Mark `params` as optional in StateService.href ([614bfb4](https://github.com/ui-router/core/commit/614bfb4)), closes [#287](https://github.com/ui-router/core/issues/287)
* **vanilla:** Fix baseHref parsing with chrome-extension:// urls ([f11be4d](https://github.com/ui-router/core/commit/f11be4d)), closes [#304](https://github.com/ui-router/core/issues/304)


### Features

* **TransitionHook:** Pass in transition to HookMatchCriteria ([#255](https://github.com/ui-router/core/issues/255)) ([926705e](https://github.com/ui-router/core/commit/926705e))


### Updated `@uirouter/angular` from 2.0.2 to 2.0.4
[Compare `@uirouter/angular` versions 2.0.2 and 2.0.4](https://github.com/ui-router/angular/compare/2.0.2...2.0.4)


### Updated `@uirouter/angularjs` from 1.0.20 to 1.0.22
[Compare `@uirouter/angularjs` versions 1.0.20 and 1.0.22](https://github.com/angular-ui/ui-router/compare/1.0.20...1.0.22)

## 6.0.2 (2018-08-12)
[Compare `@uirouter/angular-hybrid` versions 6.0.1 and 6.0.2](https://github.com/ui-router/angular-hybrid/compare/6.0.1...6.0.2)


### Updated `@uirouter/core` from 5.0.20 to 5.0.21
[Compare `@uirouter/core` versions 5.0.20 and 5.0.21](https://github.com/ui-router/core/compare/5.0.20...5.0.21)

### Bug Fixes

* **dynamic:** Use 'find' from common.ts instead of Array.prototype.find ([66a3244](https://github.com/ui-router/core/commit/66a3244)), closes [#215](https://github.com/ui-router/core/issues/215)
* **url:** When using html5Mode and no <base> tag is present, default to '/' ([23742e3](https://github.com/ui-router/core/commit/23742e3)), closes [#223](https://github.com/ui-router/core/issues/223)


### Updated `@uirouter/angular` from 2.0.1 to 2.0.2
[Compare `@uirouter/angular` versions 2.0.1 and 2.0.2](https://github.com/ui-router/angular/compare/2.0.1...2.0.2)


### Updated `@uirouter/angularjs` from 1.0.19 to 1.0.20
[Compare `@uirouter/angularjs` versions 1.0.19 and 1.0.20](https://github.com/angular-ui/ui-router/compare/1.0.19...1.0.20)

## 6.0.1 (2018-07-20)
[Compare `@uirouter/angular-hybrid` versions 6.0.0 and 6.0.1](https://github.com/ui-router/angular-hybrid/compare/6.0.0...6.0.1)


### Updated `@uirouter/core` from 5.0.19 to 5.0.20
[Compare `@uirouter/core` versions 5.0.19 and 5.0.20](https://github.com/ui-router/core/compare/5.0.19...5.0.20)

### Bug Fixes

* **params:** When creating an array parameter from a custom type, copy the `raw` property ([b6dd738](https://github.com/ui-router/core/commit/b6dd738)), closes [#178](https://github.com/ui-router/core/issues/178)


### Features

* **dynamic:** Support dynamic flag on a state declaration ([3cd5a2a](https://github.com/ui-router/core/commit/3cd5a2a))
* **transition:** Added transition.paramsChanged() to get added/deleted/changed parameter values for a transition ([10b7fde](https://github.com/ui-router/core/commit/10b7fde))
* **view:** Add _pluginapi._registeredUIView() to get a ui-view by id ([6533b51](https://github.com/ui-router/core/commit/6533b51))


### Updated `@uirouter/angular` from 2.0.0 to 2.0.1
[Compare `@uirouter/angular` versions 2.0.0 and 2.0.1](https://github.com/ui-router/angular/compare/2.0.0...2.0.1)


### Updated `@uirouter/angularjs` from 1.0.17 to 1.0.19
[Compare `@uirouter/angularjs` versions 1.0.17 and 1.0.19](https://github.com/angular-ui/ui-router/compare/1.0.17...1.0.19)

### Bug Fixes

* **bundles:** Do not run prettier against release/* bundles when publishing to bower ([9b420fa](https://github.com/angular-ui/ui-router/commit/9b420fa))
* **npm:** Publish to the old angular-ui-router npm package too ([8fc3bb2](https://github.com/angular-ui/ui-router/commit/8fc3bb2))
* **resolve:** Detect and honor strictDi in angularjs versions 1.3 and 1.4 ([1368c18](https://github.com/angular-ui/ui-router/commit/1368c18)), closes [#3678](https://github.com/angular-ui/ui-router/issues/3678)
* **state:** When creating absolute hrefs in hashbang mode, include the location.pathname ([cd426e5](https://github.com/angular-ui/ui-router/commit/cd426e5)), closes [#3710](https://github.com/angular-ui/ui-router/issues/3710)
* **uiview:** Allow uiOnParamsChanged to work with states that have a componentProvider ([fe91bd3](https://github.com/angular-ui/ui-router/commit/fe91bd3)), closes [#3707](https://github.com/angular-ui/ui-router/issues/3707)

# 6.0.0 (2018-05-20)
[Compare `@uirouter/angular-hybrid` versions 5.0.0 and 6.0.0](https://github.com/ui-router/angular-hybrid/compare/5.0.0...6.0.0)

### Bug Fixes

* **prettier:** Use es5 compatible trailing comma setting ([6421bf9](https://github.com/ui-router/angular-hybrid/commit/6421bf9))
* **typings:** Allow stateRegistry.register() and stateProvider.state() to take either Ng1 or Ng2StateDeclaration ([c0e55ad](https://github.com/ui-router/angular-hybrid/commit/c0e55ad)), closes [#147](https://github.com/ui-router/angular-hybrid/issues/147) [#148](https://github.com/ui-router/angular-hybrid/issues/148)
* **upgrade:** Fix "Trying to get the AngularJS injector before it being set" in child and lazy modules ([f4bb925](https://github.com/ui-router/angular-hybrid/commit/f4bb925)), closes [#93](https://github.com/ui-router/angular-hybrid/issues/93)


### BREAKING CHANGES

* **upgrade:** In 5.0.0, we recommended `UIRouterUpgradeModule.forChild()` everywhere.
However, this could cause an error "Trying to get the AngularJS injector before it being set".

Now:

- Use `UIRouterUpgradeModule.forRoot()` in the root Angular module.
- Use `UIRouterUpgradeModule.forChild()` for Angular feature modules and lazy loaded modules.

# 5.0.0 (2018-05-13)
[Compare `@uirouter/angular-hybrid` versions 4.0.1 and 5.0.0](https://github.com/ui-router/angular-hybrid/compare/4.0.1...5.0.0)

### Features

* **angular:** Drop Angular v4 support, add Angular v6 support ([0fc6d72](https://github.com/ui-router/angular-hybrid/commit/0fc6d72))


### BREAKING CHANGES

* **angular:** RxJS v6 and Angular v5 or higher is now required to use this package.

If using Angular v5, you should update to `"rxjs": "^6.0.0"` and also add `"rxjs-compat": "^6.0.0"`.


### Updated `@uirouter/core` from 5.0.18 to 5.0.19
[Compare `@uirouter/core` versions 5.0.18 and 5.0.19](https://github.com/ui-router/core/compare/5.0.18...5.0.19)

### Bug Fixes

* **enums:** Workaround angular compiler export issue https://github.com/angular/angular/issues/23759 ([38d25fa](https://github.com/ui-router/core/commit/38d25fa))


### Updated `@uirouter/angular` from 1.1.0 to 2.0.0
[Compare `@uirouter/angular` versions 1.1.0 and 2.0.0](https://github.com/ui-router/angular/compare/1.1.0...2.0.0)

### Features

* **angular:** Drop Angular v4 support, add Angular v6 support ([cdf0273](https://github.com/ui-router/angular/commit/cdf0273)), closes [#301](https://github.com/ui-router/angular/issues/301)
* **core:** Update core to 5.0.19, rx to 0.5.0 ([be6de0d](https://github.com/ui-router/angular/commit/be6de0d))


### BREAKING CHANGES

* **angular:** RxJS v6 and Angular v5 or higher is now required to use this package.

If using Angular v5, you should update to `"rxjs": "^6.0.0"` and also add `"rxjs-compat": "^6.0.0"`.


### Updated `@uirouter/angularjs` from 1.0.16 to 1.0.17
[Compare `@uirouter/angularjs` versions 1.0.16 and 1.0.17](https://github.com/angular-ui/ui-router/compare/1.0.16...1.0.17)

## 4.0.1 (2018-05-03)
[Compare `@uirouter/angular-hybrid` versions 4.0.0 and 4.0.1](https://github.com/ui-router/angular-hybrid/compare/4.0.0...4.0.1)

### Bug Fixes

* **README:** Update bootstrap directions to avoid 'digest already in progress' errors ([9df20f0](https://github.com/ui-router/angular-hybrid/commit/9df20f0))


### Updated `@uirouter/core` from 5.0.17 to 5.0.18
[Compare `@uirouter/core` versions 5.0.17 and 5.0.18](https://github.com/ui-router/core/compare/5.0.17...5.0.18)

### Bug Fixes

* **angular:** A hack to force the Angular compiler to import from module index ([d56a2be](https://github.com/ui-router/core/commit/d56a2be))
* **StateRegistry:** Notify listeners of added states when there are orphans in the state queue ([5a9bac9](https://github.com/ui-router/core/commit/5a9bac9))
* **transition:** Fix typing of Transition.params() ([ebea30e](https://github.com/ui-router/core/commit/ebea30e))
* **transition:** Normalize `error()` to always return `Rejection` ([9bcc5db](https://github.com/ui-router/core/commit/9bcc5db))


### Updated `@uirouter/angular` from 1.0.1 to 1.1.0
[Compare `@uirouter/angular` versions 1.0.1 and 1.1.0](https://github.com/ui-router/angular/compare/1.0.1...1.1.0)

### Bug Fixes

* **uiSref:** Ignore clicks if destination state is falsey ([b599e72](https://github.com/ui-router/angular/commit/b599e72))
* **uiView:** Always inject and/or bind NOWAIT resolve as a Promise object. ([42d739d](https://github.com/ui-router/angular/commit/42d739d))


### Features

* **uiView:** Add uiOnParamsChanged support for routed components ([45aa2aa](https://github.com/ui-router/angular/commit/45aa2aa))


### Updated `@uirouter/angularjs` from 1.0.15 to 1.0.16
[Compare `@uirouter/angularjs` versions 1.0.15 and 1.0.16](https://github.com/angular-ui/ui-router/compare/1.0.15...1.0.16)

### Bug Fixes

* **docs:** downgrade to [@types](https://github.com/types)/angular[@1](https://github.com/1).6.25 to fix typings error when generating docs ([5850136](https://github.com/angular-ui/ui-router/commit/5850136))

# 4.0.0 (2018-02-15)
[Compare `@uirouter/angular-hybrid` versions 3.1.10 and 4.0.0](https://github.com/ui-router/angular-hybrid/compare/3.1.10...4.0.0)

### Bug Fixes

* **package:** Move types/* dependencies to devDependencies ([9c87ae6](https://github.com/ui-router/angular-hybrid/commit/9c87ae6))


### Features

* **NgModule:** Add UIRouterUpgradeModule.forChild() ([a867ffb](https://github.com/ui-router/angular-hybrid/commit/a867ffb))
* **typings:** add types for hybrid state declaration ([f5a6c73](https://github.com/ui-router/angular-hybrid/commit/f5a6c73))


### BREAKING CHANGES

* **NgModule:** - Remove standalone import of `UIRouterUpgradeModule`.
- Use `UIRouterUpgradeModule.forChild()` instead of `UIRouterModule.forChild()`.
- Cast states as `NgHybridStateDeclaration`.

The `angular-hybrid` library processes state's `onEnter`/`onExit`/`onRetain` as AngularJS style injected functions.  However, the typescript typings when using `UIRouterModule.forChild()` were not compatible with AngularJS style injected callbacks.  This release adds typings supporting AngularJS style callbacks on state declarations.

```ts
export const mystate: NgHybridStateDeclaration = {  // cast
  name: 'mystate',
  url: '/mystate',
  component: MyAngularComponent,
  onEnter: myStateOnEnter,
};

myStateOnEnter.$inject = ['$state'];
export function myStateOnEnter($state) {
  console.log('$state was injected', $state);
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    // remove this: UIRouterUpgradeModule,
    // remove this: UIRouterModule.forChild( ... ),
    UIRouterUpgradeModule.forChild({ states: [mystate] }), // replace with this
  ]
})
```

## 3.1.10 (2018-02-12)
[Compare `@uirouter/angular-hybrid` versions 3.1.9 and 3.1.10](https://github.com/ui-router/angular-hybrid/compare/3.1.9...3.1.10)


### Updated `@uirouter/core` from 5.0.16 to 5.0.17
[Compare `@uirouter/core` versions 5.0.16 and 5.0.17](https://github.com/ui-router/core/compare/5.0.16...5.0.17)

### Bug Fixes

* **core:** Fix leak of old transitions by mutating pathnode*.resolvables*.data ([0a1f518](https://github.com/ui-router/core/commit/0a1f518))


### Updated `@uirouter/angular` from 1.0.0 to 1.0.1
[Compare `@uirouter/angular` versions 1.0.0 and 1.0.1](https://github.com/ui-router/ng2/compare/1.0.0...1.0.1)

### Bug Fixes

* **package:** update [@uirouter](https://github.com/uirouter)/core to version 5.0.17 ([f018f35](https://github.com/ui-router/ng2/commit/f018f35))
* **uiSrefActive:** Support multiple active classes ([e086700](https://github.com/ui-router/ng2/commit/e086700))


### Updated `@uirouter/angularjs` from 1.0.14 to 1.0.15
[Compare `@uirouter/angularjs` versions 1.0.14 and 1.0.15](https://github.com/angular-ui/ui-router/compare/1.0.14...1.0.15)

### Bug Fixes

* **package:** update [@uirouter](https://github.com/uirouter)/core to version 5.0.17 ([1b54264](https://github.com/angular-ui/ui-router/commit/1b54264))

## 3.1.9 (2018-01-31)
[Compare `@uirouter/angular-hybrid` versions 3.1.8 and 3.1.9](https://github.com/ui-router/angular-hybrid/compare/3.1.8...3.1.9)

### Bug Fixes

* **greenkeeper:** pin angular dev deps to 4.x, update ui-router deps, update rollup config ([c157551](https://github.com/ui-router/angular-hybrid/commit/c157551))


### Updated `@uirouter/core` from 5.0.11 to 5.0.16
[Compare `@uirouter/core` versions 5.0.11 and 5.0.16](https://github.com/ui-router/core/compare/5.0.11...5.0.16)

### Bug Fixes

* **browserLocation:** Use location.pathname (not href) or '/' when no base tag found ([db461d6](https://github.com/ui-router/core/commit/db461d6))
* **browserLocationConfig:** If no base href found, use location.href (not empty string) ([0251424](https://github.com/ui-router/core/commit/0251424))
* **common:** Fix signature of  for objects (make target optional) ([61d0afc](https://github.com/ui-router/core/commit/61d0afc))
* **core:** Fix memory leak of resolve data from ALL transitions ever ([7f2aed1](https://github.com/ui-router/core/commit/7f2aed1))
* **pathNode:** add backwards compat for PathNode.clone(). Add retainedWithToParams to treeChanges interface. ([4833a32](https://github.com/ui-router/core/commit/4833a32))
* **pushStateLocation:** Fix URLs: add slash between base and path when necessary ([bfa5755](https://github.com/ui-router/core/commit/bfa5755))
* **pushStateLocation:** When url is "" or "/", use baseHref for pushState ([042a950](https://github.com/ui-router/core/commit/042a950))
* **resolve:** Add onFinish hook to resolve any dynamicly added resolvables ([7d1ca54](https://github.com/ui-router/core/commit/7d1ca54))
* **trace:** Fix null reference in uiview name sort function ([59cb067](https://github.com/ui-router/core/commit/59cb067))
* **treeChanges:** apply toParams to 'retained' path ([#72](https://github.com/ui-router/core/issues/72)) ([cf63d11](https://github.com/ui-router/core/commit/cf63d11))
* **urlRouter:** Update query params when resetting url via .update() ([7664cd0](https://github.com/ui-router/core/commit/7664cd0))


### Features

* **common:** Add map-in-place support to map() ([12bc7d8](https://github.com/ui-router/core/commit/12bc7d8))
* **common:** Add onEvict() callback registry for queues with max length ([c19d007](https://github.com/ui-router/core/commit/c19d007))
* **view:** Add onSync callback API to plugin API ([9544ae5](https://github.com/ui-router/core/commit/9544ae5))


### Updated `@uirouter/angular` from 1.0.0-rc.1 to 1.0.0
[Compare `@uirouter/angular` versions 1.0.0-rc.1 and 1.0.0](https://github.com/ui-router/ng2/compare/1.0.0-rc.1...1.0.0)

### Bug Fixes

* **hooks:** Use an APP_INITIALIZER to sync/listen to the URL ([f1d390f](https://github.com/ui-router/ng2/commit/f1d390f))
* **package:** Bump dependency on uirouter/publish-scripts to fix npm install ([1a026d2](https://github.com/ui-router/ng2/commit/1a026d2))
* **package:** update [@uirouter](https://github.com/uirouter)/core to version 5.0.13 ([90aa1d4](https://github.com/ui-router/ng2/commit/90aa1d4))


### Features

* **uiSref:** Add support for ctrl/middle-clicking on a uiSref generated URL ([#175](https://github.com/ui-router/ng2/issues/175)) ([973924a](https://github.com/ui-router/ng2/commit/973924a))


### Updated `@uirouter/angularjs` from 1.0.11 to 1.0.14
[Compare `@uirouter/angularjs` versions 1.0.11 and 1.0.14](https://github.com/angular-ui/ui-router/compare/1.0.11...1.0.14)

### Bug Fixes

* **location:** allow empty string param: Ng1LocationServices.url('') ([01bbaf0](https://github.com/angular-ui/ui-router/commit/01bbaf0))
* **onEnter:** Do not inject child-state data into ng1 onEnter hooks ([cdec6a0](https://github.com/angular-ui/ui-router/commit/cdec6a0))
* **package:** update [@uirouter](https://github.com/uirouter)/core to version 5.0.13 ([6c63f2d](https://github.com/angular-ui/ui-router/commit/6c63f2d))
* **travis:** regenerate and encrypt secret ([c718ce5](https://github.com/angular-ui/ui-router/commit/c718ce5))
* **uiSrefActive:** don't match fuzzy on lazy loaded future states ([01430ee](https://github.com/angular-ui/ui-router/commit/01430ee))


### Features

* **uiSrefActive:** Support arrays of globs for ng-class style ([b215343](https://github.com/angular-ui/ui-router/commit/b215343))

## 3.1.8 (2017-12-07)
[Compare `@uirouter/angular-hybrid` versions 3.1.7 and 3.1.8](https://github.com/ui-router/angular-hybrid/compare/3.1.7...3.1.8)

### Bug Fixes

* **types:** Add types/angular and types/jquery as top level dependency. ([f00d5cf](https://github.com/ui-router/angular-hybrid/commit/f00d5cf)), closes [#58](https://github.com/ui-router/angular-hybrid/issues/58)
* **uiView:** Use useFactory instead of useValue when to prevent object re-use within PARENT_INJECT for different UIViews ([3087be9](https://github.com/ui-router/angular-hybrid/commit/3087be9))


### Features

* **angular-hybrid:** Fix peer dependencies. Update package deps. ([d09949d](https://github.com/ui-router/angular-hybrid/commit/d09949d))


### Updated `@uirouter/angular` from 1.0.0-beta.9 to 1.0.0-rc.1
[Compare `@uirouter/angular` versions 1.0.0-beta.9 and 1.0.0-rc.1](https://github.com/ui-router/ng2/compare/1.0.0-beta.9...1.0.0-rc.1)

### Bug Fixes

* **package:** Rebuild uirouter/angular using angular 4.4.6 ([a39aed8](https://github.com/ui-router/ng2/commit/a39aed8))
* **package.json:** npm shrinkwarp with angular 5 ([477d0f7](https://github.com/ui-router/ng2/commit/477d0f7))
* **uiView:** Fix animations :enter trigger by using markForCheck ([3d7ce44](https://github.com/ui-router/ng2/commit/3d7ce44))


### Features

* **directives:** Export directives using `exportAs:` for use as template variables ([3d532b6](https://github.com/ui-router/ng2/commit/3d532b6))
* **lazyLoad:** Allow loadChildren for non-future states. ([ac3cdef](https://github.com/ui-router/ng2/commit/ac3cdef))
* **uiView:** add getter for state which is filling the uiview ([e7cb5f1](https://github.com/ui-router/ng2/commit/e7cb5f1))


### Updated `@uirouter/angularjs` from 1.0.9 to 1.0.11
[Compare `@uirouter/angularjs` versions 1.0.9 and 1.0.11](https://github.com/angular-ui/ui-router/compare/1.0.9...1.0.11)

### Bug Fixes

* **artifactory:** Add trailing newline to package.json to work around artifactory issue  ([#3551](https://github.com/angular-ui/ui-router/issues/3551)) ([d09a345](https://github.com/angular-ui/ui-router/commit/d09a345)), closes [#3550](https://github.com/angular-ui/ui-router/issues/3550)
* **uiView:** Fix cfg.getTemplate is undefined ([f4d99b0](https://github.com/angular-ui/ui-router/commit/f4d99b0))

## 3.1.7 (2017-10-17)
[Compare `@uirouter/angular-hybrid` versions 3.1.5 and 3.1.7](https://github.com/ui-router/angular-hybrid/compare/3.1.5...3.1.7)


### Updated `@uirouter/core` from 5.0.10 to 5.0.11
[Compare `@uirouter/core` versions 5.0.10 and 5.0.11](https://github.com/ui-router/core/compare/5.0.10...5.0.11)

### Bug Fixes

* **ie9:** make console.bind work in ie9 ([#85](https://github.com/ui-router/core/issues/85)) ([318214b](https://github.com/ui-router/core/commit/318214b))


### Updated `@uirouter/angular` from 1.0.0-beta.8 to 1.0.0-beta.9
[Compare `@uirouter/angular` versions 1.0.0-beta.8 and 1.0.0-beta.9](https://github.com/ui-router/ng2/compare/1.0.0-beta.8...1.0.0-beta.9)

### Features

* **UIRouterModule:** Add `initial` property to `forRoot` to specify the initial route. ([b7b5e4f](https://github.com/ui-router/ng2/commit/b7b5e4f))


### Updated `@uirouter/angularjs` from 1.0.8 to 1.0.9
[Compare `@uirouter/angularjs` versions 1.0.8 and 1.0.9](https://github.com/angular-ui/ui-router/compare/1.0.8...1.0.9)

## 3.1.5 (2017-10-07)
[Compare `@uirouter/angular-hybrid` versions 3.1.4 and 3.1.5](https://github.com/ui-router/angular-hybrid/compare/3.1.4...3.1.5)

Updates:

- `@uirouter/angularjs` to 1.0.8
- `@uirouter/angular` to 1.0.0-beta.8
- `@uirouter/core` to 5.0.10

### Bug Fixes

* **hybrid:** Do not import angular/upgrade ([eb83724](https://github.com/ui-router/angular-hybrid/commit/eb83724))
* **typings:** Fix typing error in `uiRouterUpgradeFactory` ([f361d7a](https://github.com/ui-router/angular-hybrid/commit/f361d7a))



<a name="3.1.4"></a>
## 3.1.4 (2017-08-15)

* fix(package): Fix manifest -- location of es6 modules is lib/index not lib-esm/index ([040722c](https://github.com/ui-router/angular-hybrid/commit/040722c))



<a name="3.1.3"></a>
## 3.1.3 (2017-08-13)

* fix(build): Depend on NPM packages instead of git tags ([b9261af](https://github.com/ui-router/angular-hybrid/commit/b9261af))
* Create README.md ([d59d2f9](https://github.com/ui-router/angular-hybrid/commit/d59d2f9))
* chore(): update changelog ([e4d29d4](https://github.com/ui-router/angular-hybrid/commit/e4d29d4))
* chore(example): Added minimal example ([a8ee08f](https://github.com/ui-router/angular-hybrid/commit/a8ee08f))



<a name="3.1.2"></a>
## 3.1.2 (2017-06-12)

Rebuilt with newer snapshots of @uirouter/angular and @uirouter/angularjs

* chore(example): Added minimal example ([425815d](https://github.com/ui-router/angular-hybrid/commit/425815d))


<a name="3.1.1"></a>
## 3.1.1 (2017-05-22)

Fix missing dev dependency from 3.1.0 release

* chore(deps): Add @angular/compiler-cli ([7a893ba](https://github.com/ui-router/angular-hybrid/commit/7a893ba))



<a name="3.1.0"></a>
# 3.1.0 (2017-05-22)

This version of @uirouter/angular-upgrade supports ahead of time compilation, and lazy loading
of Angular future states via @ngtools/webpack

* fix(AoT): Make angular-hybrid.ts compatible with ngc ([dcf10a2](https://github.com/ui-router/angular-hybrid/commit/dcf10a2))
* fix(AoT): Make hybrid adapter AoT compatible ([e79866a](https://github.com/ui-router/angular-hybrid/commit/e79866a))
* Correct package name in example ([877953f](https://github.com/ui-router/angular-hybrid/commit/877953f))
* Update README.md ([6c75e4b](https://github.com/ui-router/angular-hybrid/commit/6c75e4b))
* doc(*): update README ([18ec03f](https://github.com/ui-router/angular-hybrid/commit/18ec03f))



<a name="3.0.1"></a>
## 3.0.1 (2017-05-16)

* feat(Ng1ToNg2Module): Rename Ng1ToNg2Module to UIRouterUpgradeModule ([fcac2f9](https://github.com/ui-router/angular-hybrid/commit/fcac2f9))


### BREAKING CHANGE

* Rename Ng1ToNg2Module to UIRouterUpgradeModule
(This was supposed to land in version 3.0.0)


<a name="3.0.0"></a>
# 3.0.0 (2017-05-16)

* chore(*): Fix botched merge and re-add ng2LazyLoadBuilder ([8596e2a](https://github.com/ui-router/angular-hybrid/commit/8596e2a))
* chore(*): fix some code comments ([83bc525](https://github.com/ui-router/angular-hybrid/commit/83bc525))
* chore(build): remove old release script ([7128857](https://github.com/ui-router/angular-hybrid/commit/7128857))
* chore(build): tweak npm ignore ([788b5ed](https://github.com/ui-router/angular-hybrid/commit/788b5ed))
* chore(build): update .npmignore ([5a18fe2](https://github.com/ui-router/angular-hybrid/commit/5a18fe2))
* chore(README): Update README ([76aa21a](https://github.com/ui-router/angular-hybrid/commit/76aa21a))
* chore(README): Update README with info about migration to @angular/upgrade/static ([215160a](https://github.com/ui-router/angular-hybrid/commit/215160a))
* feat(ngUpgrade): Add support for @angular/upgrade/static ([4b7fce0](https://github.com/ui-router/angular-hybrid/commit/4b7fce0))
* feat(upgrade): Version 3.x uses @angular/upgrade/static ([1d60e5b](https://github.com/ui-router/angular-hybrid/commit/1d60e5b))
* refactor(static): Clean up imports and switch let to const ([4a0dcaf](https://github.com/ui-router/angular-hybrid/commit/4a0dcaf))
* fix(ngModule): Revert breaking change of module name ([7a37c4a](https://github.com/ui-router/angular-hybrid/commit/7a37c4a))
* fix(static): Remove setup call and get the ng2 injector from ng1 ([27fa6dc](https://github.com/ui-router/angular-hybrid/commit/27fa6dc))
* Specify inputs for downgraded uiViewNgUpgrade ([a47445d](https://github.com/ui-router/angular-hybrid/commit/a47445d))
* Update README.md ([48bad58](https://github.com/ui-router/angular-hybrid/commit/48bad58))


### BREAKING CHANGE

* use `@angular/upgrade/static`
Version 3.0.0 and higher no longer supports `@angular/upgrade`.
We now support only `@angular/upgrade/static`

Your bootstrap process will change.
For details, please see [the sample app](https://github.com/ui-router/sample-app-ng1-to-ng2/commit/2e5accf7799ff48cae048d18383e8dedadd99b41) to see how to migrate your bootstrap to the new style.

Angular no longer actively supports the old `UpgradeAdapter`.
The [currently supported mechanism](https://angular.io/docs/ts/latest/guide/upgrade.html) is `UpgradeModule` from `@angular/upgrade/static`


<a name="2.0.0"></a>
# 2.0.0 (2017-05-13)

* chore(*): bump deps to artifact tags ([550d2ea](https://github.com/ui-router/angular-hybrid/commit/550d2ea))
* chore(*): bumping version to 2.0.0 ([f8003d8](https://github.com/ui-router/angular-hybrid/commit/f8003d8))
* chore(build): Add rollup build file ([8955496](https://github.com/ui-router/angular-hybrid/commit/8955496))
* chore(build): Add scripts dir ([29b2824](https://github.com/ui-router/angular-hybrid/commit/29b2824))
* chore(build): Add UMD module name mappings ([b0c7eed](https://github.com/ui-router/angular-hybrid/commit/b0c7eed))
* chore(build): bump dependencies ([943ac95](https://github.com/ui-router/angular-hybrid/commit/943ac95))
* chore(build): Remove incorrect rollup config ([a3c0fb9](https://github.com/ui-router/angular-hybrid/commit/a3c0fb9))
* chore(travis): Build package with travis ([3948ae2](https://github.com/ui-router/angular-hybrid/commit/3948ae2))
* fix(*): Update for split repositories. Update to ui-router-ng2 1.0.0-beta.4, angular-ui-router 1.0.0 ([4e1050e](https://github.com/ui-router/angular-hybrid/commit/4e1050e))
* fix(angular4): Update hybrid adapter with new DI token for angular injector ([8a85fc0](https://github.com/ui-router/angular-hybrid/commit/8a85fc0))
* fix(build): Switch tsconfig back to module: commonjs ([1b20157](https://github.com/ui-router/angular-hybrid/commit/1b20157))
* fix(ng1-to-ng2): Add ui-router-rx plugin and ng2 loadChildren decorator ([dc58311](https://github.com/ui-router/angular-hybrid/commit/dc58311))
* fix(package): Add prepublish build step allowing installs from git ([c7c693c](https://github.com/ui-router/angular-hybrid/commit/c7c693c))
* feat(hybrid): rename npm package to @uirouter/angular-hybrid. Update project to use latest @uirouter ([6b06e86](https://github.com/ui-router/angular-hybrid/commit/6b06e86))
* Add artifact tagging script ([abfbe9e](https://github.com/ui-router/angular-hybrid/commit/abfbe9e))
* Typo, should be Angular 1 to Angular *2* ([c466cae](https://github.com/ui-router/angular-hybrid/commit/c466cae))
* Update CHANGELOG.md ([14be8a9](https://github.com/ui-router/angular-hybrid/commit/14be8a9))
* bug(*): fix State renamed to StateObject ([50677d1](https://github.com/ui-router/angular-hybrid/commit/50677d1))


### BREAKING CHANGE

* Project name switched from `ui-router-ng1-to-ng2` to `@uirouter/angular-hybrid`

bundle moved to `_bundles/ui-router-angular-hybrid.js`


See: https://github.com/ui-router/ng1-to-ng2/releases
