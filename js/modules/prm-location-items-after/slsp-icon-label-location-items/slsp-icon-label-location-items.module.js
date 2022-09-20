import { slspIconLabelLocationItemsController } from './slsp-icon-label-location-items.controller'

export const slspIconLabelLocationItemsModule = angular
	.module('slspIconLabelLocationItemsModule', [])
	.controller('slspIconLabelLocationItemsController', slspIconLabelLocationItemsController)
	.component('slspIconLabelLocationItemsComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspIconLabelLocationItemsController',
	})
