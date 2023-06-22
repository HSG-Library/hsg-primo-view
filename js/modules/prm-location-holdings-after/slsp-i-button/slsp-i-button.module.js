import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { slspIButtonConfig } from './slsp-i-button.config'
import { slspIButtonController } from './slsp-i-button.controller'
import { slspIButtonHtml } from './slsp-i-button.html'

export const slspIButtonModule = angular
	.module('slspIButtonModule', [])
	.constant('slspIButtonConfig', slspIButtonConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('slspIButtonController', slspIButtonController)
	.component('slspIButtonComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIButtonController',
		template: slspIButtonHtml
	})
