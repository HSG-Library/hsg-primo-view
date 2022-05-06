import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgUserService } from '../../../services/hsg-user.service'
import { hsgDisplayItemPolicyConfig } from './hsg-display-item-policy.config'
import { hsgDisplayItemPolicyController } from './hsg-display-item-policy.controller'


export const hsgDisplayItemPolicyModule = angular
	.module('hsgDisplayItemPolicyModule', [])
	.constant('hsgDisplayItemPolicyConfig', hsgDisplayItemPolicyConfig)
	.factory('hsgUserService', hsgUserService)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgDisplayItemPolicyController', hsgDisplayItemPolicyController)
	.component('hsgDisplayItemPolicyComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgDisplayItemPolicyController'
	})
