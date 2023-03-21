import { hsgPickupInfoController } from './hsg-pickup-info.controller'
import { hsgUtilsService } from '../../../services/hsg-utils.service'

export const hsgPickupInfoModule = angular
	.module('hsgPickupInfoModule', [])
	.factory('hsgUtilsService', hsgUtilsService)
	.controller('hsgPickupInfoController', hsgPickupInfoController)
	.component('hsgPickupInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgPickupInfoController'
	})
