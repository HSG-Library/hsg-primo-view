import { slspTopPaginationSwitchModule } from './slsp-top-pagination-switch/slsp-top-pagination-switch.module'

export const hsgSearchResultListAfterModule = angular
	.module('hsgSearchResultListAfterModule', [])
	.component('prmSearchResultListAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-top-pagination-switch-component after-ctrl="$ctrl"></slsp-top-pagination-switch-component>`
	})

hsgSearchResultListAfterModule.requires.push(slspTopPaginationSwitchModule.name)
