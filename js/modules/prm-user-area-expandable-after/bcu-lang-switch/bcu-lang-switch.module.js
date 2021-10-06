import { bcuLangSwitchController } from './bcu-lang-switch.controller';
import { bcuLangSwitchHtml } from './bcu-lang-switch.html';

export const bcuLangSwitchModule = angular
	.module('bcuLangSwitchModule', [])
	.controller('bcuLangSwitchController', bcuLangSwitchController)
	.component('bcuLangSwitchComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'bcuLangSwitchController',
		template: bcuLangSwitchHtml
	});