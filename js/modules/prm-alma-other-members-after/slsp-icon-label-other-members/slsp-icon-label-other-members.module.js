
import { slspIconLabelOtherMembersController } from './slsp-icon-label-other-members.controller'

export const slspIconLabelOtherMembersModule = angular
	.module('slspIconLabelOtherMembersModule', [])
	.controller('slspIconLabelOtherMembersController', slspIconLabelOtherMembersController)
	.component('slspIconLabelOtherMembersComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelOtherMembersController'
	})
