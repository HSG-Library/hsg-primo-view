import { ethLocationsFilterModule } from './eth-locations-filter/eth-locations-filter.module'
import { slspCollapseRelatedModule } from './slsp-collapse-related/slsp-collapse-related.module'

export const hsgLocationsAfterModule = angular
	.module('hsgLocationsAfterModule', [])
	.component('prmLocationsAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<eth-locations-filter-component after-ctrl="$ctrl"></eth-locations-filter-component>
		<slsp-collapse-related-component after-ctrl="$ctrl"></slsp-collapse-related-component>
		`
	})

hsgLocationsAfterModule.requires.push(ethLocationsFilterModule.name)
hsgLocationsAfterModule.requires.push(slspCollapseRelatedModule.name)
