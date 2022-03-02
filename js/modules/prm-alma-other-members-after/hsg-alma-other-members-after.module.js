import { slspCollapseOtherInstModule } from './slsp-collapse-other-inst/slsp-collapse-other-inst.module'

export const hsgAlmaOtherMembersAfterModule = angular
	.module('hsgAlmaOtherMembersAfterModule', [])
	.component('prmAlmaOtherMembersAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-collapse-other-inst-component after-ctrl="$ctrl"></slsp-collapse-other-inst-component>`
	})

hsgAlmaOtherMembersAfterModule.requires.push(slspCollapseOtherInstModule.name)
