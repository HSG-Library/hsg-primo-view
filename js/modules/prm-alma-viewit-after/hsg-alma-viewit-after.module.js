import { hsgOffCampusInfoModule } from "./hsg-off-campus-info/hsg-off-campus-info.module"
import { hsgReportBrokenLinkModule } from "./hsg-report-broken-link/hsg-report-broken-link.module"
import { slspArchivesViewitModule } from "./slsp-archives-viewit/slsp-archives-viewit.module"

export const hsgAlmaViewitAfterModule = angular
	.module('hsgAlmaViewitAfterModule', [])
	.component('prmAlmaViewitAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-archives-viewit-component after-ctrl="$ctrl"></slsp-archives-viewit-component>
		<hsg-report-broken-link-component after-ctrl="$ctrl"></hsg-report-broken-link-component>
		<hsg-off-campus-info-component after-ctrl="$ctrl"></hsg-off-campus-info-component>
		`
	})

hsgAlmaViewitAfterModule.requires.push(slspArchivesViewitModule.name)
hsgAlmaViewitAfterModule.requires.push(hsgReportBrokenLinkModule.name)
hsgAlmaViewitAfterModule.requires.push(hsgOffCampusInfoModule.name)
