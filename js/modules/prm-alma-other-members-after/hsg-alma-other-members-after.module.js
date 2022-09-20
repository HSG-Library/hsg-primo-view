import { slspCollapseOtherInstModule } from './slsp-collapse-other-inst/slsp-collapse-other-inst.module'
import { slspIconLabelOtherMembersModule } from './slsp-icon-label-other-members/slsp-icon-label-other-members.module'

export const hsgAlmaOtherMembersAfterModule = angular
	.module('hsgAlmaOtherMembersAfterModule', [])
	.component('prmAlmaOtherMembersAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-collapse-other-inst-component after-ctrl="$ctrl"></slsp-collapse-other-inst-component>
		<slsp-icon-label-other-members-component after-ctrl="$ctrl"></slsp-icon-label-other-members-component>
		`
	})

hsgAlmaOtherMembersAfterModule.requires.push(slspCollapseOtherInstModule.name)
hsgAlmaOtherMembersAfterModule.requires.push(slspIconLabelOtherMembersModule.name)
