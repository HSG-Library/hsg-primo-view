import { slspEditPersonalDetailsModule } from './slsp-edit-personal-details/slsp-edit-personal-details.module'
import { slspInvoicesModule } from './slsp-invoices/slsp-invoices.module'

export const hsgPersonalInfoAfterModule = angular
	.module('hsgPersonalInfoAfterModule', [])
	.component('prmPersonalInfoAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-edit-personal-details-component after-ctrl="$ctrl" id="SLSPeditPersonalDetails"></slsp-edit-personal-details-component> 
		<slsp-invoices-component after-ctrl="$ctrl"></slsp-invoices-component>
		<slsp-personal-info-after parent-ctrl="$parent.$ctrl"></slsp-personal-info-after>`
	});

hsgPersonalInfoAfterModule.requires.push(slspEditPersonalDetailsModule.name)
//hsgPersonalInfoAfterModule.requires.push(slspInvoicesModule.name);

