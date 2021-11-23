import { hsgBrowzineIntegrationModule } from './hsg-browzine-integration/hsg-browzine-integration.module'

export const hsgSearchResultAvailabilityLineAfterModule = angular
	.module('hsgSearchResultAvailabilityLineAfterModule', [])
	.component('prmSearchResultAvailabilityLineAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<hsg-browzine-integration-component after-ctrl="$ctrl"></hsg-browzine-integration-component>
		`
	})

hsgSearchResultAvailabilityLineAfterModule.requires.push(hsgBrowzineIntegrationModule.name);