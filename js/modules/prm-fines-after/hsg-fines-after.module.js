import { slspClosedFinesBarModule } from './slsp-closed-fines-bar/slsp-closed-fines-bar.module'

export const hsgFinesAfterModule = angular
	.module('hsgFinesAfterModule', [])
	.component('prmFinesAfter', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-closed-fines-bar-component after-ctrl="$ctrl"></slsp-closed-fines-bar-component>
						`
	})

hsgFinesAfterModule.requires.push(slspClosedFinesBarModule.name)
