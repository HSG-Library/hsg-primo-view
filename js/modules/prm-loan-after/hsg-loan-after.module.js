import { slspRenewItemTextModule } from './slsp-renew-item-text/slsp-renew-item-text.module'
import { slspHideRapidoLoanLinkModule } from './slsp-hide-rapido-loan-link/slsp-hide-rapido-loan-link.module'

export const hsgLoanAfterModule = angular
	.module('hsgLoanAfterModule', [])
	.component('prmLoanAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-renew-item-text-component after-ctrl="$ctrl"></slsp-renew-item-text-component>
		<slsp-hide-rapido-loan-link-component after-ctrl="$ctrl"></slsp-hide-rapido-loan-link-component>
		`
	})

hsgLoanAfterModule.requires.push(slspRenewItemTextModule.name)
hsgLoanAfterModule.requires.push(slspHideRapidoLoanLinkModule.name)
