import { hsgCollectionsShowAuthorModule } from './hsg-collections-show-author/hsg-collections-show-author.module'

export const hsgGalleryItemAfterModule = angular
	.module('hsgGalleryItemAfterModule', [])
	.component('prmGalleryItemAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-collections-show-author-component after-ctrl="$ctrl"></hsg-collections-show-author-component>
		`
	})

hsgGalleryItemAfterModule.requires.push(hsgCollectionsShowAuthorModule.name)
