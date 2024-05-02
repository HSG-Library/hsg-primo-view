import { slspHoldingCollapseModule } from './slsp-holding-collapse/slsp-holding-collapse.module'
import { slspIButtonModule } from './slsp-i-button/slsp-i-button.module'

export const hsgLocationHoldingsAfterModule = angular
	.module('hsgLocationHoldingsAfterModule', [])
	.component('prmLocationHoldingsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>
		<slsp-holding-collapse-component after-ctrl="$ctrl"></slsp-holding-collapse-component>`
	})

hsgLocationHoldingsAfterModule.requires.push(slspIButtonModule.name)
hsgLocationHoldingsAfterModule.requires.push(slspHoldingCollapseModule.name)
