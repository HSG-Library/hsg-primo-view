import { slspIconLabelRapidoController } from './slsp-icon-label-rapido.controller'

export const slspIconLabelRapidoModule = angular
	.module('slspIconLabelRapidoModule', [])
	.controller('slspIconLabelRapidoController', slspIconLabelRapidoController)
	.component('slspIconLabelRapidoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelRapidoController'
	})
