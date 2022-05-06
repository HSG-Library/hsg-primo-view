import { hsgServiceDetailsFoldableItemsModule } from './hsg-service-details-foldable-items/hsg-service-details-foldable-items.module'
import { hsgSandboxController } from '../hsg-sandbox/hsg-sandbox.controller'

export const hsgServiceDetailsAfterModule = angular
	.module('hsgServiceDetailsAfterModule', [])
	.controller('hsgSandboxController', hsgSandboxController)
	.component('prmServiceDetailsAfter', {
		bindings: { parentCtrl: '<' },
		controller: 'hsgSandboxController',
		template: `
			<hsg-service-details-foldable-items-component ng-if="$ctrl.isSandbox()" after-ctrl="$ctrl"></hsg-service-details-foldable-items-component>
		`
	})

hsgServiceDetailsAfterModule.requires.push(hsgServiceDetailsFoldableItemsModule.name)
