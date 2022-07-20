import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgSublocationLinkController } from './hsg-sublocation-link.controller'
import { hsgSublocationLinkConfig } from './hsg-sublocation-link.config'
import { hsgSublocationLinkHtml } from './hsg-sublocation-link.html'

export const hsgSublocationLinkModule = angular
	.module('hsgSzLinkModule', [])
	.constant('hsgSublocationLinkConfig', hsgSublocationLinkConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgSublocationLinkController', hsgSublocationLinkController)
	.component('hsgSzLinkComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgSublocationLinkController',
		template: hsgSublocationLinkHtml
	})
