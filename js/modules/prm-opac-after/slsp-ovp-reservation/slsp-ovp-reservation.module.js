import { slspOvpReservationController } from './slsp-ovp-reservation.controller'


export const slspOvpReservationModule = angular
	.module('slspOvpReservationModule', [])
	.controller('slspOvpReservationController', slspOvpReservationController)
	.component('slspOvpReservationComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspOvpReservationController',
	})
