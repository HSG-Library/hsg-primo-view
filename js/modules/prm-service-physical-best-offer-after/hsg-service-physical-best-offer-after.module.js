import { slspRapidoDigitalOfferModule } from './slsp-rapido-digital-offer/slsp-rapido-digital-offer.module'

export const hsgServicePhysicalBestOfferAfterModule = angular
	.module('hsgServicePhysicalBestOfferAfterModule', [])
	.component('prmServicePhysicalBestOfferAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-rapido-digital-offer-component after-ctrl="$ctrl"></slsp-rapido-digital-offer-component>`,
	})

hsgServicePhysicalBestOfferAfterModule.requires.push(slspRapidoDigitalOfferModule.name)
