import { slspSaveLabelButtonController } from './slsp-save-label-button.controller'

export const slspSaveLabelButtonModule = angular
	.module('slspSaveLabelButtonModule', [])
	.controller('slspSaveLabelButtonController', slspSaveLabelButtonController)
	.component('slspSaveLabelButtonComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspSaveLabelButtonController',
	})
