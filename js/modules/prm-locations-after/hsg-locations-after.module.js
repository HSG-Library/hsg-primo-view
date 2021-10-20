import { ethLocationsFilterModule } from './eth-locations-filter/eth-locations-filter.module';

export const hsgLocationsAfterModule = angular
	.module('hsgLocationsAfterModule', [])
	.component('prmLocationsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<eth-locations-filter-component after-ctrl="$ctrl"></eth-locations-filter-component>`
	});

hsgLocationsAfterModule.requires.push(ethLocationsFilterModule.name);