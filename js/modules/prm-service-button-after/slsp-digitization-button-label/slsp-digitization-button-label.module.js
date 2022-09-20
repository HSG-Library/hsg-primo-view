import { slspDigitizationButtonLabelController } from './slsp-digitization-button-label.controller'

export const slspDigitizationButtonLabelModule = angular
	.module('slspDigitizationButtonLabelModule', [])
	.controller('slspDigitizationButtonLabelController', slspDigitizationButtonLabelController)
	.component('slspDigitizationButtonLabelComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspDigitizationButtonLabelController'
	})
