import { slspCourierInfoController } from './slsp-courier-info.controller';

export const slspCourierInfoModule = angular
	.module('slspCourierInfoModule', [])
	.controller('slspCourierInfoController', slspCourierInfoController)
	.component('slspCourierInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspCourierInfoController'
	});