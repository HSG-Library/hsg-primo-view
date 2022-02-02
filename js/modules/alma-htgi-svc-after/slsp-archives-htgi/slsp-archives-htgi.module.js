import { slspArchivesHtgiController } from './slsp-archives-htgi.controller';
import { slspArchivesHtgiHtml } from './slsp-archives-htgi.html';

export const slspArchivesHtgiModule = angular
	.module('slspArchivesHtgiModule', [])
	.controller('slspArchivesHtgiController', slspArchivesHtgiController)
	.component('slspArchivesHtgiComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspArchivesHtgiController',
		template: slspArchivesHtgiHtml
	});