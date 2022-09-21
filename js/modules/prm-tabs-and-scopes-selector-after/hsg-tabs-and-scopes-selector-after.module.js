import { bcuScopesSelectorModule } from './bcu-scopes-selector/bcu-scopes-selector.module'

export const hsgTabsAndScopesSelectorAfterModule = angular
	.module('hsgTabsAndScopesSelectorAfterModule', [])
	.component('prmTabsAndScopesSelectorAfter', {
		template: `<bcu-scopes-selector-component after-ctrl="$ctrl"></bcu-scopes-selector-component>`
	})

hsgTabsAndScopesSelectorAfterModule.requires.push(bcuScopesSelectorModule.name)
