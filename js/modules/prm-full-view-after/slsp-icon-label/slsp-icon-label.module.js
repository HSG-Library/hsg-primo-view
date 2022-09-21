import { slspIconLabelController } from './slsp-icon-label.controller'

export const slspIconLabelModule = angular
	.module('slspIconLabelModule', [])
	.controller('slspIconLabelController', slspIconLabelController)
	.component('slspIconLabelComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelController'
	})
