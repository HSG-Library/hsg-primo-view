import { hsgBrowzineIntegrationConfig } from './hsg-browzine-integration.config';
import { hsgBrowzineIntegrationController } from './hsg-browzine-integration.controller';

export const hsgBrowzineIntegrationModule = angular
	.module('hsgBrowzineIntegrationModule', [])
	.constant('hsgBrowzineIntegrationConfig', hsgBrowzineIntegrationConfig)
	.controller('hsgBrowzineIntegrationController', hsgBrowzineIntegrationController)
	.component('hsgBrowzineIntegrationComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgBrowzineIntegrationController'
	})
