import { slspArchivesHtgiModule } from './slsp-archives-htgi/slsp-archives-htgi.module'
import { hsgOpenurlInterlibraryModule } from './hsg-openurl-interlibrary/hsg-openurl-interlibrary.module'

export const hsgHtgiSvcAfterModule = angular
	.module('hsgHtgiSvcAfterModule', [])
	.component('almaHtgiSvcAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-archives-htgi-component after-ctrl="$ctrl"></slsp-archives-htgi-component>
		<hsg-openurl-interlibrary-component after-ctrl="$ctrl"></hsg-openurl-interlibrary-component>
		`
	})

hsgHtgiSvcAfterModule.requires.push(slspArchivesHtgiModule.name)
hsgHtgiSvcAfterModule.requires.push(hsgOpenurlInterlibraryModule.name)
