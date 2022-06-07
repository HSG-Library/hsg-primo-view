import { hsgReadingRoomInfoController } from './hsg-reading-room-info.controller'
import { hsgReadingRoomInfoService } from './hsg-reading-room-info.service'

export const hsgReadingRoomInfoModule = angular
	.module('hsgReadingRoomInfoModule', [])
	.factory('hsgReadingRoomInfoService', hsgReadingRoomInfoService)
	.controller('hsgReadingRoomInfoController', hsgReadingRoomInfoController)
	.component('hsgReadingRoomInfoComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgReadingRoomInfoController'
	})
