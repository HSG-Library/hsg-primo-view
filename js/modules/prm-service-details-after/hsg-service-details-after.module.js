import { hsgServiceDetailsFoldableItemsModule } from './hsg-service-details-foldable-items/hsg-service-details-foldable-items.module'

export const hsgServiceDetailsAfterModule = angular
	.module('hsgServiceDetailsAfterModule', [])
	.component('prmServiceDetailsAfter', {
		bindings: { parentCtrl: '<' },
		template: `
			<hsg-service-details-foldable-items-component after-ctrl="$ctrl"></hsg-service-details-foldable-items-component>
		`
	})

hsgServiceDetailsAfterModule.requires.push(hsgServiceDetailsFoldableItemsModule.name)
