import { hsgOffCampusInfoModule } from "./hsg-off-campus-info/hsg-off-campus-info.module";
//import { hsgReportBrokenLinkModule } from "./hsg-report-broken-link/hsg-report-broken-link.module";

export const hsgAlmaViewitAfterModule = angular
	.module('hsgAlmaViewitAfterModule', [])
	.component('prmAlmaViewitAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-off-campus-info-component after-ctrl="$ctrl"></hsg-off-campus-info-component>
		`
	});

//<hsg-report-broken-link-component after-ctrl="$ctrl"></hsg-report-broken-link-component>
//hsgAlmaViewitAfterModule.requires.push(hsgReportBrokenLinkModule.name);
hsgAlmaViewitAfterModule.requires.push(hsgOffCampusInfoModule.name);