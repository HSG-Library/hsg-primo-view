import { slspSendEmailInfoModule } from './slsp-send-email-info/slsp-send-email-info.module'

export const hsgSendEmailAfterModule = angular
	.module('hsgSendEmailAfterModule', [])
	.component('prmSendEmailAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-send-email-info-component after-ctrl="$ctrl"></slsp-send-email-info-component>`
	})

hsgSendEmailAfterModule.requires.push(slspSendEmailInfoModule.name)
