import { ethLocationsFilterModule } from './eth-locations-filter/eth-locations-filter.module'
import { slspCollapseRelatedModule } from './slsp-collapse-related/slsp-collapse-related.module'
import { slspIconLabelLocationsModule } from './slsp-icon-label-locations/slsp-icon-label-locations.module'

export const hsgLocationsAfterModule = angular
	.module('hsgLocationsAfterModule', [])
	.component('prmLocationsAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<eth-locations-filter-component after-ctrl="$ctrl"></eth-locations-filter-component>
		<slsp-collapse-related-component after-ctrl="$ctrl"></slsp-collapse-related-component>
		<slsp-icon-label-locations-component after-ctrl="$ctrl"></slsp-icon-label-locations-component>
		`
	})

hsgLocationsAfterModule.requires.push(ethLocationsFilterModule.name)
hsgLocationsAfterModule.requires.push(slspCollapseRelatedModule.name)
hsgLocationsAfterModule.requires.push(slspIconLabelLocationsModule.name)
