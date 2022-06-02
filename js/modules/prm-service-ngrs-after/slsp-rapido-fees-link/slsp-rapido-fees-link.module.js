
import { slspRapidoFeesLinkController } from './slsp-rapido-fees-link.controller'

export const slspRapidoFeesLinkModule = angular
	.module('slspRapidoFeesLinkModule', [])
	.controller('slspRapidoFeesLinkController', slspRapidoFeesLinkController)
	.component('slspRapidoFeesLinkComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspRapidoFeesLinkController',
	})
