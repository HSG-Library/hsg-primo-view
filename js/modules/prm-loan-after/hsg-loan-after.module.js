import { slspRenewItemTextModule } from './slsp-renew-item-text/slsp-renew-item-text.module';

export const hsgLoanAfterModule = angular
	.module('hsgLoanAfterModule', [])
	.component('prmLoanAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-renew-item-text-component after-ctrl="$ctrl"></slsp-renew-item-text-component>`
	});

hsgLoanAfterModule.requires.push(slspRenewItemTextModule.name);