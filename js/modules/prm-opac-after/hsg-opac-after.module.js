import { slspOvpReservationModule } from './slsp-ovp-reservation/slsp-ovp-reservation.module'

export const hsgOpacAfterModule = angular
	.module('hsgOpacAfterModule', [])
	.component('prmOpacAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-ovp-reservation-component after-ctrl="$ctrl"></slsp-ovp-reservation-component>`
	})


hsgOpacAfterModule.requires.push(slspOvpReservationModule.name)
