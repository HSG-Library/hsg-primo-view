import { hsgAlertMessageModule } from './hsg-alert-message/hsg-alert-message.module';

export const hsgExploreMainAfterModule = angular
	.module('hsgExploreMainAfterModule', [])
	.component('prmExploreMainAfter', {
		bindings: { parentCtrl: '<' },
		template: `
            <hsg-alert-message-component after-ctrl="$ctrl"></hsg-alert-message-component>`
	});

hsgExploreMainAfterModule.requires.push(hsgAlertMessageModule.name);
