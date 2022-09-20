import { slspCollapseRelatedController } from './slsp-collapse-related.controller'

export const slspCollapseRelatedModule = angular
	.module('slspCollapseRelatedModule', [])
	.controller('slspCollapseRelatedController', slspCollapseRelatedController)
	.component('slspCollapseRelatedComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspCollapseRelatedController'
	})
