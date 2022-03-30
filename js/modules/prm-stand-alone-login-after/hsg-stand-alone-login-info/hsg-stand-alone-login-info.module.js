import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgStandAloneLoginInfoConfig } from './hsg-stand-alone-login-info.config'
import { hsgStandAloneLoginInfoController } from './hsg-stand-alone-login-info.controller'
import { hsgStandAloneLoginInfoHtml } from './hsg-stand-alone-login-info.html'


export const hsgStandAloneLoginInfoModule = angular
	.module('hsgStandAloneLoginInfoModule', [])
	.constant('hsgStandAloneLoginInfoConfig', hsgStandAloneLoginInfoConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgStandAloneLoginInfoController', hsgStandAloneLoginInfoController)
	.component('hsgStandAloneLoginInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgStandAloneLoginInfoController',
		template: hsgStandAloneLoginInfoHtml
	})
