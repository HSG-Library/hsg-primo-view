import { hsgChatController } from './hsg-chat.controller'
import { hsgChatHtml } from './hsg-chat.html'

export const hsgChatModule = angular
	.module('hsgChatModule', [])
	.controller('hsgChatController', hsgChatController)
	.component('hsgChatComponent', {
		controller: 'hsgChatController',
		template: hsgChatHtml
	})
