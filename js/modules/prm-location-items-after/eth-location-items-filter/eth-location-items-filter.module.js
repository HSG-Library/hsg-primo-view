import { ethLocationItemsFilterController } from './eth-location-items-filter.controller'

export const ethLocationItemsFilterModule = angular
	.module('ethLocationItemsFilterModule', [])
	.controller('ethLocationItemsFilterController', ethLocationItemsFilterController)
	.component('ethLocationItemsFilterComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'ethLocationItemsFilterController'
	})
