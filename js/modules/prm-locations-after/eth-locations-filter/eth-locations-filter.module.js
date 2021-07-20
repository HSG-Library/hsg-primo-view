import { ethLocationsFilterController } from './eth-locations-filter.controller';

export const ethLocationsFilterModule = angular
	.module('ethLocationsFilterModule', [])
	.controller('ethLocationsFilterController', ethLocationsFilterController)
	.component('ethLocationsFilterComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'ethLocationsFilterController'
	})