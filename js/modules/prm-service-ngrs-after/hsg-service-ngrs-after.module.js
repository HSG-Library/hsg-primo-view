
import { slspRapidoFeesLinkModule } from './slsp-rapido-fees-link/slsp-rapido-fees-link.module'


export const hsgServiceNgrsAfterModule = angular
	.module('hsgServiceNgrsAfterModule', [])
	.component('prmServiceNgrsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-rapido-fees-link-component after-ctrl="$ctrl"></slsp-rapido-fees-link-component><slsp-service-ngrs-after parent-ctrl="$parent.$ctrl"></<slsp-service-ngrs-after>`
	})

hsgServiceNgrsAfterModule.requires.push(slspRapidoFeesLinkModule.name)
