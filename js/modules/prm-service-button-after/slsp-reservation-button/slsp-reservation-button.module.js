import { slspReservationButtonController } from './slsp-reservation-button.controller'

export const slspReservationButtonModule = angular
	.module('slspReservationButtonModule', [])
	.controller('slspReservationButtonController', slspReservationButtonController)
	.component('slspReservationButtonComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspReservationButtonController',
	})
