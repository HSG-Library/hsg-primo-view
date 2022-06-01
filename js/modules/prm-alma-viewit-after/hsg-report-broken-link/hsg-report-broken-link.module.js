import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgReportBrokenLinkConfig } from './hsg-report-broken-link.config'
import { hsgReportBrokenLinkDialogController, hsgReportBrokenLinkController } from './hsg-report-broken-link.controller'
import { hsgReportBrokenLinkHtml } from './hsg-report-broken-link.html'


export const hsgReportBrokenLinkModule = angular
	.module('hsgReportBrokenLinkModule', [])
	.constant('hsgReportBrokenLinkConfig', hsgReportBrokenLinkConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgReportBrokenLinkDialogController', hsgReportBrokenLinkDialogController)
	.controller('hsgReportBrokenLinkController', hsgReportBrokenLinkController)
	.component('hsgReportBrokenLinkComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgReportBrokenLinkController',
		template: hsgReportBrokenLinkHtml
	})
