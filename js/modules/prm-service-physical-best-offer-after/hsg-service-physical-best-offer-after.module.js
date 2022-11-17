import { ethDisableRequestButtonModule } from './eth-disable-request-button/eth-disable-request-button.module'
import { slspIconLabelRapidoModule } from './slsp-icon-label-rapido/slsp-icon-label-rapido.module'
import { slspRapidoDigitalOfferModule } from './slsp-rapido-digital-offer/slsp-rapido-digital-offer.module'

export const hsgServicePhysicalBestOfferAfterModule = angular
	.module('hsgServicePhysicalBestOfferAfterModule', [])
	.component('prmServicePhysicalBestOfferAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-icon-label-rapido-component after-ctrl="$ctrl"></slsp-icon-label-rapido-component>
		<eth-disable-request-button-component after-ctrl="$ctrl"></eth-disable-request-button-component>
		<slsp-rapido-digital-offer-component after-ctrl="$ctrl"></slsp-rapido-digital-offer-component>
		`,
	})

hsgServicePhysicalBestOfferAfterModule.requires.push(ethDisableRequestButtonModule.name)
hsgServicePhysicalBestOfferAfterModule.requires.push(slspIconLabelRapidoModule.name)
hsgServicePhysicalBestOfferAfterModule.requires.push(slspRapidoDigitalOfferModule.name)
