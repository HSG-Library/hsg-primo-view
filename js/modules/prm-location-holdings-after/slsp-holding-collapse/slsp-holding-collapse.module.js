import { slspHoldingCollapseController } from './slsp-holding-collapse.controller'

export const slspHoldingCollapseModule = angular
	.module('slspHoldingCollapseModule', [])
	.controller('slspHoldingCollapseController', slspHoldingCollapseController)
	.component('slspHoldingCollapseComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspHoldingCollapseController'
	})
