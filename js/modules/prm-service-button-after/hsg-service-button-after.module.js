import { slspDigitizationButtonLabelModule } from './slsp-digitization-button-label/slsp-digitization-button-label.module'

export const hsgServiceButtonAfterModule = angular
	.module('hsgServiceButtonAfterModule', [])
	.component('prmServiceButtonAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-digitization-button-label-component after-ctrl="$ctrl"></slsp-digitization-button-label-component><slsp-service-button-after parent-ctrl="$parent.$ctrl"></slsp-service-button-after>`
	})

hsgServiceButtonAfterModule.requires.push(slspDigitizationButtonLabelModule.name)
