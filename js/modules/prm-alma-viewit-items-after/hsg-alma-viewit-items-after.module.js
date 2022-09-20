import { slspIconLabelViewitItemsModule } from './slsp-icon-label-viewit-items/slsp-icon-label-viewit-items.module'

export const hsgAlmaViewitItemsAfterModule = angular
	.module('hsgAlmaViewitItemsAfterModule', [])
	.component('prmAlmaViewitItemsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-icon-label-viewit-items-component after-ctrl="$ctrl"></slsp-icon-label-viewit-items-component>`
	})

hsgAlmaViewitItemsAfterModule.requires.push(slspIconLabelViewitItemsModule.name)
