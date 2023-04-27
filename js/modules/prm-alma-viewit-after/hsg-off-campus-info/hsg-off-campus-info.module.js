import { hsgOnCampusService } from '../../../services/hsg-on-campus.service'
import { hsgTranslatorService } from '../../../services/hsg-translator.service'
import { hsgOffCampusInfoConfig } from './hsg-off-campus-info.config'
import { hsgOffCampusInfoController } from './hsg-off-campus-info.controller'
import { hsgOffCampusInfoHtml } from './hsg-off-campus-info.html'

export const hsgOffCampusInfoModule = angular
	.module('hsgOffCampusInfoModule', [])
	.constant('hsgOffCampusInfoConfig', hsgOffCampusInfoConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.factory('hsgOnCampusService', hsgOnCampusService)
	.controller('hsgOffCampusInfoController', hsgOffCampusInfoController)
	.component('hsgOffCampusInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgOffCampusInfoController',
		template: hsgOffCampusInfoHtml
	})
