import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgServiceDetailsFoldableItemsConfig } from './hsg-service-details-foldable-items.config'
import { hsgServiceDetailsFoldableItemsController } from './hsg-service-details-foldable-items.controller'

export const hsgServiceDetailsFoldableItemsModule = angular
	.module('hsgServiceDetailsFoldableItemsModule', [])
	.constant('hsgServiceDetailsFoldableItemsConfig', hsgServiceDetailsFoldableItemsConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgServiceDetailsFoldableItemsController', hsgServiceDetailsFoldableItemsController)
	.component('hsgServiceDetailsFoldableItemsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgServiceDetailsFoldableItemsController'
	})
