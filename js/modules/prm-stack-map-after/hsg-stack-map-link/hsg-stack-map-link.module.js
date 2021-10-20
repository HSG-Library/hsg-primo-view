import { hsgStackMapLinkController, hsgStackMapLinkDialogController } from './hsg-stack-map-link.controller';

export const hsgStackMapLinkModule = angular
	.module('hsgStackMapLinkModule', [])
	.controller('hsgStackMapLinkDialogController', hsgStackMapLinkDialogController)
	.controller('hsgStackMapLinkController', hsgStackMapLinkController)
	.component('hsgStackMapLinkComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgStackMapLinkController'
	})
