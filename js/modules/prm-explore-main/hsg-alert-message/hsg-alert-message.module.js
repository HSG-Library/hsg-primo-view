import { hsgAlertMessageConfig } from './hsg-alert-message.config';
import { hsgAlertMessageController } from './hsg-alert-message.controller';
import { hsgTranslatorService } from '../../../services/hsg-translator.service';

export const hsgAlertMessageModule = angular
	.module('hsgAlertMessageModule', [])
	.constant('hsgAlertMessageConfig', hsgAlertMessageConfig)
	.factory('hsgTranslatorService', hsgTranslatorService)
	.controller('hsgAlertMessageController', hsgAlertMessageController)
	.component('hsgAlertMessageComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgAlertMessageController',
	});
