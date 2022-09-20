import { slspIconLabelViewitItemsController } from './slsp-icon-label-viewit-items.controller'

export const slspIconLabelViewitItemsModule = angular
	.module('slspIconLabelViewitItemsModule', [])
	.controller('slspIconLabelViewitItemsController', slspIconLabelViewitItemsController)
	.component('slspIconLabelViewitItemsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelViewitItemsController'
	})
