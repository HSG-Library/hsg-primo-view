import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgJournalsStartpageConfig } from './hsg-journals-startpage.config'
import { hsgJournalsStartpageController } from './hsg-journals-startpage.controller'
import { hsgJournalsStartpageHtml } from './hsg-journals-startpage.html'

export const hsgJournalsStartpageModule = angular
	.module('hsgJournalsStartpageModule', [])
	.constant('hsgJournalsStartpageConfig', hsgJournalsStartpageConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgJournalsStartpageController', hsgJournalsStartpageController)
	.component('hsgJournalsStartpageComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgJournalsStartpageController',
		template: hsgJournalsStartpageHtml
	})
