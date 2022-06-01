import { slspIllSigninOrderAlertModule } from './slsp-ill-signin-order-alert/slsp-ill-signin-order-alert.module'

export const hsgHowovpAfterModule = angular
	.module('hsgHowovpAfterModule', [])
	.component('almaHowovpAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-ill-signin-order-alert-component after-ctrl="$ctrl"></slsp-ill-signin-order-alert-component>`
	})

hsgHowovpAfterModule.requires.push(slspIllSigninOrderAlertModule.name)
