import { slspCitationSelectController } from './slsp-citation-select.controller'

export const slspCitationSelectModule = angular
	.module('slspCitationSelectModule', [])
	.controller('slspCitationSelectController', slspCitationSelectController)
	.component('slspCitationSelectComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspCitationSelectController',
	})
