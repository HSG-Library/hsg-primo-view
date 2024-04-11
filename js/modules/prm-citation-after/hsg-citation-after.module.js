import { slspCitationSelectModule } from './slsp-citation-select/slsp-citation-select.module'

export const hsgCitationAfterModule = angular
	.module('hsgCitationAfterModule', [])
	.component('prmCitationAfter', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-citation-select-component after-ctrl="$ctrl"></slsp-citation-select-component>`
	})

hsgCitationAfterModule.requires.push(slspCitationSelectModule.name)
