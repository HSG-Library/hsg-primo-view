import { hsgSandboxController } from '../hsg-sandbox/hsg-sandbox.controller'
import { hsgChatModule } from './hsg-chat/hsg-chat.module'

export const hsgExploreMainAfterModule = angular
	.module('hsgExploreMainAfterModule', [])
	.controller('hsgSandboxController', hsgSandboxController)
	.component('prmExploreMainAfter', {
		controller: 'hsgSandboxController',
		template: `<hsg-chat-component ng-if="$ctrl.isSandbox()"></hsg-chat-component>`
	})

hsgExploreMainAfterModule.requires.push(hsgChatModule.name)
