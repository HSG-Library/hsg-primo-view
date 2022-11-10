import { bcuScopesSelectorController } from './bcu-scopes-selector.controller'

export const bcuScopesSelectorModule = angular
	.module('bcuScopesSelectorModule', [])
	.controller('bcuScopesSelectorController', bcuScopesSelectorController)
	.component('bcuScopesSelectorComponent', {
		bindings: { parentCtrl: '<' },
		controller: 'bcuScopesSelectorController'
	})
