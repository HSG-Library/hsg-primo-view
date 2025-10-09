import { slspGitHintModule } from './slsp-git-hint/slsp-git-hint.module'
import { slspKeyboardFocusModule } from './slsp-keyboard-focus/slsp-keyboard-focus.module'

export const hsgTopBarBeforeModule = angular
	.module('hsgTopBarBeforeModule', [])
	.component('prmTopBarBefore', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-git-hint-component after-ctrl="$ctrl"></slsp-git-hint-component>
			<slsp-keyboard-focus-component after-ctrl="$ctrl"></slsp-keyboard-focus-component>
			`
	});


hsgTopBarBeforeModule.requires.push(slspGitHintModule.name)
hsgTopBarBeforeModule.requires.push(slspKeyboardFocusModule.name)
