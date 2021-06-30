
import { slspCourierInfoModule } from './slsp-courier-info/slsp-courier-info.module';
import { hsgReadingRoomInfoModule } from './hsg-reading-room-info/hsg-reading-room-info.module';

export const hsgRequestAfterModule = angular
	.module('hsgRequestAfterModule', [])
	.component('prmRequestAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<slsp-courier-info-component after-ctrl="$ctrl"></slsp-courier-info-component>
		<hsg-reading-room-info-component after-ctrl="$ctrl"></hsg-reading-room-info-component>
		`
	});

hsgRequestAfterModule.requires.push(slspCourierInfoModule.name);
hsgRequestAfterModule.requires.push(hsgReadingRoomInfoModule.name);
