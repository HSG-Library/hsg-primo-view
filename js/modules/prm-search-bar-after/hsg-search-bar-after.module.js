import { bcuSearchSlotsModule } from './bcu-search-slots/bcu-search-slots.module'

export const hsgSearchBarAfterModule = angular
	.module('hsgSearchBarAfterModule', [])
	.component('prmSearchBarAfter', {
		bindings: { parentCtrl: '<' },
		template: `<bcu-search-slots-component after-ctrl="$ctrl"></bcu-search-slots-component>`
	})

hsgSearchBarAfterModule.requires.push(bcuSearchSlotsModule.name)
