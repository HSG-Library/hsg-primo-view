import { slspIconLabelRapidoModule } from './slsp-icon-label-rapido/slsp-icon-label-rapido.module'
import { slspRapidoDigitalOfferModule } from './slsp-rapido-digital-offer/slsp-rapido-digital-offer.module'

export const hsgServicePhysicalBestOfferAfterModule = angular
	.module('hsgServicePhysicalBestOfferAfterModule', [])
	.component('prmServicePhysicalBestOfferAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-icon-label-rapido-component after-ctrl="$ctrl"></slsp-icon-label-rapido-component>
		<slsp-rapido-digital-offer-component after-ctrl="$ctrl"></slsp-rapido-digital-offer-component>
		`,
	})

hsgServicePhysicalBestOfferAfterModule.requires.push(slspIconLabelRapidoModule.name)
hsgServicePhysicalBestOfferAfterModule.requires.push(slspRapidoDigitalOfferModule.name)
