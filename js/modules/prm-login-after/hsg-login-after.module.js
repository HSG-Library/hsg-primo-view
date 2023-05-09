import { slspLoginBoxModule } from './slsp-login-box/slsp-login-box.module'

export const hsgLoginAfterModule = angular
	.module('hsgLoginAfterModule', [])
	.component('prmLoginAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-login-box-component after-ctrl="$ctrl"></slsp-login-box-component>
		`
	})

hsgLoginAfterModule.requires.push(slspLoginBoxModule.name)
