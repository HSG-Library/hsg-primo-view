import { slspIllSigninOrderAlertController } from './slsp-ill-signin-order-alert.controller.js';
import { slspIllSigninOrderAlertHtml } from './slsp-ill-signin-order-alert.html';

export const slspIllSigninOrderAlertModule = angular
	.module('slspIllSigninOrderAlertModule', [])
	.controller('slspIllSigninOrderAlertController', slspIllSigninOrderAlertController)
	.component('slspIllSigninOrderAlertComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIllSigninOrderAlertController',
		template: slspIllSigninOrderAlertHtml
	});
