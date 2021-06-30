import { slspEditPersonalDetailsModule } from './slsp-edit-personal-details/slsp-edit-personal-details.module'

export const hsgPersonalInfoAfterModule = angular
	.module('hsgPersonalInfoAfterModule', [])
	.component('prmPersonalInfoAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-edit-personal-details-component after-ctrl="$ctrl"></slsp-edit-personal-details-component>`
	})

hsgPersonalInfoAfterModule.requires.push(slspEditPersonalDetailsModule.name);