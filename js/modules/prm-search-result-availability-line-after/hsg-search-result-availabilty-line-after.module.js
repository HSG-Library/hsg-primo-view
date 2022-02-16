import { hsgBrowzineIntegrationModule } from './hsg-browzine-integration/hsg-browzine-integration.module'
import { slspArchivesAvailabilityLineModule } from './slsp-archives-availability-line/slsp-archives-availability-line.module';

export const hsgSearchResultAvailabilityLineAfterModule = angular
	.module('hsgSearchResultAvailabilityLineAfterModule', [])
	.component('prmSearchResultAvailabilityLineAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<slsp-archives-availability-line-component after-ctrl="$ctrl"></slsp-archives-availability-line-component>
			<hsg-browzine-integration-component after-ctrl="$ctrl"></hsg-browzine-integration-component>
		`
	})

hsgSearchResultAvailabilityLineAfterModule.requires.push(slspArchivesAvailabilityLineModule.name);
hsgSearchResultAvailabilityLineAfterModule.requires.push(hsgBrowzineIntegrationModule.name);
