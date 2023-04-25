import { slspIButtonModule } from './slsp-i-button/slsp-i-button.module'

export const hsgLocationHoldingsAfterModule = angular
	.module('hsgLocationHoldingsAfterModule', [])
	.component('prmLocationHoldingsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>`
	})

hsgLocationHoldingsAfterModule.requires.push(slspIButtonModule.name)
