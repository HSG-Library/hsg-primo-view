import { hsgJournalsStartpageModule } from "./hsg-journals-startpage/hsg-journals-startpage.module";

export const hsgJournalsAfterModule = angular
	.module('hsgJournalsAfterModule', [])
	.component('prmJournalsAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-journals-startpage-component after-ctrl="$ctrl"></hsg-journals-startpage-component>
		`
	});

hsgJournalsAfterModule.requires.push(hsgJournalsStartpageModule.name);