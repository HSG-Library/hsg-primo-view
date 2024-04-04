import { slspDigitizationButtonLabelModule } from './slsp-digitization-button-label/slsp-digitization-button-label.module'
import { slspReservationButtonModule } from './slsp-reservation-button/slsp-reservation-button.module'

export const hsgServiceButtonAfterModule = angular
	.module('hsgServiceButtonAfterModule', [])
	.component('prmServiceButtonAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-digitization-button-label-component after-ctrl="$ctrl"></slsp-digitization-button-label-component>
		<slsp-reservation-button-component after-ctrl="$ctrl"></slsp-reservation-button-component>
		`
	})

hsgServiceButtonAfterModule.requires.push(slspDigitizationButtonLabelModule.name)
hsgServiceButtonAfterModule.requires.push(slspReservationButtonModule.name)
