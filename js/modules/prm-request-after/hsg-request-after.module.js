import { hsgPickupInfoModule } from './hsg-pickup-info/hsg-pickup-info.module'
import { slspAlmaRequestModule } from './slsp-alma-request/slsp-alma-request.module'
import { slspCourierInfoModule } from './slsp-courier-info/slsp-courier-info.module'
//import { hsgReadingRoomInfoModule } from './hsg-reading-room-info/hsg-reading-room-info.module';

export const hsgRequestAfterModule = angular
	.module('hsgRequestAfterModule', [])
	.component('prmRequestAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-pickup-info-component after-ctrl="$ctrl"></hsg-pickup-info-component>
		<slsp-alma-request-component after-ctrl="$ctrl"></slsp-alma-request-component>
		<slsp-courier-info-component after-ctrl="$ctrl"></slsp-courier-info-component>
		`
		// <hsg-reading-room-info-component after-ctrl="$ctrl"></hsg-reading-room-info-component>
	})

hsgRequestAfterModule.requires.push(slspAlmaRequestModule.name)
hsgRequestAfterModule.requires.push(slspCourierInfoModule.name)
hsgRequestAfterModule.requires.push(hsgPickupInfoModule.name)
//hsgRequestAfterModule.requires.push(hsgReadingRoomInfoModule.name);
