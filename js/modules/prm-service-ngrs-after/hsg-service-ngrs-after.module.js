import { slspRapidoFeesLinkModule } from './slsp-rapido-fees-link/slsp-rapido-fees-link.module'

export const hsgServiceNgrsAfterModule = angular
	.module('hsgServiceNgrsAfterModule', [])
	.component('prmServiceNgrsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-rapido-fees-link-component after-ctrl="$ctrl"></slsp-rapido-fees-link-component>`
	})

hsgServiceNgrsAfterModule.requires.push(slspRapidoFeesLinkModule.name)
