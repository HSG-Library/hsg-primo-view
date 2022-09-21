import { bcuSearchSlotsController } from './bcu-search-slots.controller'

export const bcuSearchSlotsModule = angular
	.module('bcuSearchSlotsModule', [])
	.controller('bcuSearchSlotsController', bcuSearchSlotsController)
	.component('bcuSearchSlotsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'bcuSearchSlotsController'
	})
