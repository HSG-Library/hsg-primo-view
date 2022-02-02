import { slspArchivesAvailabilityLineController } from './slsp-archives-availability-line.controller';


export const slspArchivesAvailabilityLineModule = angular
	.module('slspArchivesAvailabilityLineModule', [])
	.controller('slspArchivesAvailabilityLineController', slspArchivesAvailabilityLineController)
	.component('slspArchivesAvailabilityLineComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'slspArchivesAvailabilityLineController',
	});
