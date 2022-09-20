import { slspIconLabelRapidoModule } from './slsp-icon-label-rapido/slsp-icon-label-rapido.module'

export const hsgServicePhysicalBestOfferAfterModule = angular
	.module('hsgServicePhysicalBestOfferAfterModule', [])
	.component('prmServicePhysicalBestOfferAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-icon-label-rapido-component after-ctrl="$ctrl"></slsp-icon-label-rapido-component>`,
	})

hsgServicePhysicalBestOfferAfterModule.requires.push(slspIconLabelRapidoModule.name)
