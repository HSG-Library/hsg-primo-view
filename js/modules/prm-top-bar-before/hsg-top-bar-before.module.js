import { slspGitHintModule } from './slsp-git-hint/slsp-git-hint.module'

export const hsgTopBarBeforeModule = angular
	.module('hsgTopBarBeforeModule', [])
	.component('prmTopBarBefore', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-git-hint-component after-ctrl="$ctrl"></slsp-git-hint-component>
						`
	})


hsgTopBarBeforeModule.requires.push(slspGitHintModule.name)
