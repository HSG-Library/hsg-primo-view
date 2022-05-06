import { hsgStandAloneLoginInfoModule } from './hsg-stand-alone-login-info/hsg-stand-alone-login-info.module'

export const hsgStandAloneLoginAfterModule = angular
	.module('hsgStandAloneLoginAfter', [])
	.component('prmStandAloneLoginAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-stand-alone-login-info-component after-ctrl="$ctrl"></hsg-stand-alone-login-info-component>
		`
	})

hsgStandAloneLoginAfterModule.requires.push(hsgStandAloneLoginInfoModule.name)
