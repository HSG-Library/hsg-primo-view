import { slspIconLabelModule } from './slsp-icon-label/slsp-icon-label.module'

export const hsgFullViewAfterModule = angular
	.module('hsgFullViewAfterModule', [])
	.component('prmFullViewAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-icon-label-component after-ctrl="$ctrl"></slsp-icon-label-component>`
	})

hsgFullViewAfterModule.requires.push(slspIconLabelModule.name)
