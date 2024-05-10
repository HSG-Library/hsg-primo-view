import { slspTopPaginationSwitchModule } from './slsp-top-pagination-switch/slsp-top-pagination-switch.module'

export const hsgSearchResultToolBarAfterModule = angular
	.module('hsgSearchResultToolBarAfterModule', [])
	.component('prmSearchResultToolBarAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-top-pagination-switch-component after-ctrl="$ctrl"></slsp-top-pagination-switch-component>`
	})

hsgSearchResultToolBarAfterModule.requires.push(slspTopPaginationSwitchModule.name)
