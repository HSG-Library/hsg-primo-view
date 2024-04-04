import { slspOvpItemReservationController } from './slsp-ovp-item-reservation.controller'


export const slspOvpItemReservationModule = angular
	.module('slspOvpItemReservationModule', [])
	.controller('slspOvpItemReservationController', slspOvpItemReservationController)
	.component('slspOvpItemReservationComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspOvpItemReservationController',
	})
