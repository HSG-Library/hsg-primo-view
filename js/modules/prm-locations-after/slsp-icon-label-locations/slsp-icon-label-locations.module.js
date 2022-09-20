import { slspIconLabelLocationsController } from './slsp-icon-label-locations.controller'

export const slspIconLabelLocationsModule = angular
	.module('slspIconLabelLocationsModule', [])
	.controller('slspIconLabelLocationsController', slspIconLabelLocationsController)
	.component('slspIconLabelLocationsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelLocationsController'
	})
