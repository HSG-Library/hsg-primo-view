import { slspArchivesViewitController } from './slsp-archives-viewit.controller';
import { slspArchivesViewitHtml } from './slsp-archives-viewit.html';

export const slspArchivesViewitModule = angular
	.module('slspArchivesViewitModule', [])
	.controller('slspArchivesViewitController', slspArchivesViewitController)
	.component('slspArchivesViewitComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspArchivesViewitController',
		template: slspArchivesViewitHtml
	})
