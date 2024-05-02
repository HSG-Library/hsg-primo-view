import { slspSaveLabelButtonModule } from './slsp-save-label-button/slsp-save-label-button.module'

export const hsgFavoritesEditLabelsMenuAfterModule = angular
	.module('hsgFavoritesEditLabelsMenuAfterModule', [])
	.component('hsgFavoritesEditLabelsMenuAfterModule', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-save-label-button-component after-ctrl="$ctrl"></slsp-save-label-button-component>
            <slsp-favorites-edit-labels-menu-after parent-ctrl="$parent.$ctrl"></<slsp-favorites-edit-labels-menu-after>`
	})


hsgFavoritesEditLabelsMenuAfterModule.requires.push(slspSaveLabelButtonModule.name)
