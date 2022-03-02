import { slspCollapseOtherInstController } from './slsp-collapse-other-inst.controller'

export const slspCollapseOtherInstModule = angular
	.module('slspCollapseOtherInstModule', [])
	.controller('slspCollapseOtherInstController', slspCollapseOtherInstController)
	.component('slspCollapseOtherInstComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspCollapseOtherInstController'
	})
