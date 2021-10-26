import { hsgBrowzineIntegrationController } from './hsg-browzine-integration.controller';

export const hsgBrowzineIntegrationModule = angular
	.module('hsgBrowzineIntegrationModule', [])
	.controller('hsgBrowzineIntegrationController', hsgBrowzineIntegrationController)
	.component('hsgBrowzineIntegrationComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgBrowzineIntegrationController'
	})
