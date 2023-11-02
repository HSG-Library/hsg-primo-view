import { hsgAlmaViewerTitleModule } from './hsg-alma-viewer-title/hsg-alma-viewer-title.module'

export const hsgAlmaViewerAfterModule = angular
	.module('hsgAlmaVihsgAlmaViewerAfterModuleewitAfterModule', [])
	.component('prmAlmaViewerAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-alma-viewer-title-component after-ctrl="$ctrl"></hsg-alma-viewer-title-component>
		`
	})

hsgAlmaViewerAfterModule.requires.push(hsgAlmaViewerTitleModule.name)
