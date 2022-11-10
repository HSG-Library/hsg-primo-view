import { ethLocationItemsFilterModule } from './eth-location-items-filter/eth-location-items-filter.module'
import { hsgSublocationLinkModule } from './hsg-sublocation-link/hsg-sublocation-link.module'
import { slspIButtonModule } from './slsp-i-button/slsp-i-button.module'
import { slspIconLabelLocationItemsModule } from './slsp-icon-label-location-items/slsp-icon-label-location-items.module'

export const hsgLocationItemsAfterModule = angular
	.module('hsgLocationItemsAfterModule', [])
	.component('prmLocationItemsAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>
			<eth-location-items-filter-component after-ctrl="$ctrl"></eth-location-items-filter-component>
			<hsg-sublocation-link-component after-ctrl="$ctrl"></hsg-sublocation-link-component>
			<slsp-icon-label-location-items-component after-ctrl="$ctrl"></slsp-icon-label-location-items-component>
		`
	})

hsgLocationItemsAfterModule.requires.push(slspIButtonModule.name)
hsgLocationItemsAfterModule.requires.push(ethLocationItemsFilterModule.name)
hsgLocationItemsAfterModule.requires.push(hsgSublocationLinkModule.name)
hsgLocationItemsAfterModule.requires.push(slspIconLabelLocationItemsModule.name)
