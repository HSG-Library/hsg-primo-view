import { slspIconLabelOtherUnitsModule } from './slsp-icon-label-other-units/slsp-icon-label-other-units.module'

export const hsgAlmaOtherUnitsAfterModule = angular
	.module('hsgAlmaOtherUnitsAfterModule', [])
	.component('prmAlmaOtherUnitsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-icon-label-other-units-component after-ctrl="$ctrl"></slsp-icon-label-other-units-component>`
	})


hsgAlmaOtherUnitsAfterModule.requires.push(slspIconLabelOtherUnitsModule.name)
