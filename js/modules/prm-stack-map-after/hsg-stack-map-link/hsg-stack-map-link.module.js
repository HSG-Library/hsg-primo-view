import { hsgStackMapLinkController } from './hsg-stack-map-link.controller';

export const hsgStackMapLinkModule = angular
	.module('hsgStackMapLinkModule', [])
	.controller('hsgStackMapLinkController', hsgStackMapLinkController)
	.component('hsgStackMapLinkComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgStackMapLinkController'
	})
