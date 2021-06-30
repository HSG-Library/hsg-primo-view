import { slspIButtonModule } from './slsp-i-button/slsp-i-button.module';

export const hsgLocationItemsAfterModule = angular
	.module('hsgLocationItemsAfterModule', [])
	.component('prmLocationItemsAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-i-button-component after-ctrl="$ctrl"></slsp-i-button-component>`
	});

hsgLocationItemsAfterModule.requires.push(slspIButtonModule.name);