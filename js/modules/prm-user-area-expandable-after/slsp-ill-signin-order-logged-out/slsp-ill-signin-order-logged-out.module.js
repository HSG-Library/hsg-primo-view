import { slspIllSigninOrderLoggedOutController } from './slsp-ill-signin-order-logged-out.controller';
import { hsgUserService } from '../../../services/hsg-user.service';

export const slspIllSigninOrderLoggedOutModule = angular
	.module('slspIllSigninOrderLoggedOutModule', [])
	.factory('hsgUserService', hsgUserService)
	.controller('slspIllSigninOrderLoggedOutController', slspIllSigninOrderLoggedOutController)
	.component('slspIllSigninOrderLoggedOutComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIllSigninOrderLoggedOutController'
	});