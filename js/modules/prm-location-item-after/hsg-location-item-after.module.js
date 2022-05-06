import { hsgDisplayItemPolicyModule } from './hsg-display-item-policy/hsg-display-item-policy.module'
import { hsgSandboxController } from '../hsg-sandbox/hsg-sandbox.controller'

export const hsgLocationItemAfterModule = angular
	.module('hsgLocationItemAfterModule', [])
	.controller('hsgSandboxController', hsgSandboxController)
	.component('prmLocationItemAfter', {
		bindings: { parentCtrl: '<' },
		controller: 'hsgSandboxController',
		template: `
			<hsg-display-item-policy-component ng-if="$ctrl.isSandbox()" after-ctrl="$ctrl"></hsg-display-item-policy-component>
		`
	})

hsgLocationItemAfterModule.requires.push(hsgDisplayItemPolicyModule.name)
