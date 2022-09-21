import { slspRequestCancelButtonModule } from './slsp-request-cancel-button/slsp-request-cancel-button.module'

export const hsgRequestsAfterModule = angular
	.module('hsgRequestsAfterModule', [])
	.component('prmRequestsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-request-cancel-button-component after-ctrl="$ctrl"></slsp-request-cancel-button-component>`
	})

hsgRequestsAfterModule.requires.push(slspRequestCancelButtonModule.name)
