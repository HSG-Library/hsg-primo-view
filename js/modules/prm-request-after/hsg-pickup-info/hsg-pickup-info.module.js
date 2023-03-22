import { hsgPickupInfoController } from './hsg-pickup-info.controller'
import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgUtilsService } from '../../../services/hsg-utils.service'
import { hsgPickupInfoConfig } from './hsg-pickup-info.config'

export const hsgPickupInfoModule = angular
	.module('hsgPickupInfoModule', [])
	.constant('hsgPickupInfoConfig', hsgPickupInfoConfig)
	.factory('hsgUtilsService', hsgUtilsService)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgPickupInfoController', hsgPickupInfoController)
	.component('hsgPickupInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgPickupInfoController'
	})
