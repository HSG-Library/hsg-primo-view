import { slspArchivesHtgiModule } from './slsp-archives-htgi/slsp-archives-htgi.module';

export const hsgHtgiSvcAfterModule = angular
	.module('hsgHtgiSvcAfterModule', [])
	.component('almaHtgiSvcAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-archives-htgi-component after-ctrl="$ctrl"></slsp-archives-htgi-component>
		`
	});

hsgHtgiSvcAfterModule.requires.push(slspArchivesHtgiModule.name);
