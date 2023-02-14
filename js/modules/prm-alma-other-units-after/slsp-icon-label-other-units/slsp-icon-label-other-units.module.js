import { slspIconLabelOtherUnitsController } from './slsp-icon-label-other-units.controller'

export const slspIconLabelOtherUnitsModule = angular
	.module('slspIconLabelOtherUnitsModule', [])
	.controller('slspIconLabelOtherUnitsController', slspIconLabelOtherUnitsController)
	.component('slspIconLabelOtherUnitsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelOtherUnitsController'
	})
