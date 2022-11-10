import { bcuRapidoNoFurtherOptionsModule } from './bcu-rapido-no-further-options/bcu-rapido-no-further-options.module'
import { slspRapidoFeesLinkModule } from './slsp-rapido-fees-link/slsp-rapido-fees-link.module'

export const hsgServiceNgrsAfterModule = angular
	.module('hsgServiceNgrsAfterModule', [])
	.component('prmServiceNgrsAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<bcu-rapido-no-further-options-component after-ctrl="$ctrl"></bcu-rapido-no-further-options-component>
		<slsp-rapido-fees-link-component after-ctrl="$ctrl"></slsp-rapido-fees-link-component>
		`
	})

hsgServiceNgrsAfterModule.requires.push(bcuRapidoNoFurtherOptionsModule.name)
hsgServiceNgrsAfterModule.requires.push(slspRapidoFeesLinkModule.name)
