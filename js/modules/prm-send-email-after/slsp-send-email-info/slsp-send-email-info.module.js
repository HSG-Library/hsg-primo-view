import { slspSendEmailInfoController } from './slsp-send-email-info.controller'

export const slspSendEmailInfoModule = angular
	.module('slspSendEmailInfoModule', [])
	.controller('slspSendEmailInfoController', slspSendEmailInfoController)
	.component('slspSendEmailInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspSendEmailInfoController',
	})
