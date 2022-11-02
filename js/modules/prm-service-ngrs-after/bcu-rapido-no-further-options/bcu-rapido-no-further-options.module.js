import { bcuRapidoNoFurtherOptionsController } from './bcu-rapido-no-further-options.controller'

export const bcuRapidoNoFurtherOptionsModule = angular
	.module('bcuRapidoNoFurtherOptionsModule', [])
	.controller('bcuRapidoNoFurtherOptionsController', bcuRapidoNoFurtherOptionsController)
	.component('bcuRapidoNoFurtherOptionsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'bcuRapidoNoFurtherOptionsController'
	})
