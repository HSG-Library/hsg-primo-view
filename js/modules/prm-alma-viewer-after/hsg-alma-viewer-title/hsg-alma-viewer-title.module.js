import { hsgAlmaViewerTitleController } from './hsg-alma-viewer-title.controller'

export const hsgAlmaViewerTitleModule = angular
	.module('hsgAlmaViewerTitleModule', [])
	.controller('hsgAlmaViewerTitleController', hsgAlmaViewerTitleController)
	.component('hsgAlmaViewerTitleComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgAlmaViewerTitleController'
	})
