import { bcuLangSwitchModule } from './bcu-lang-switch/bcu-lang-switch.module'
import { slspIllSigninOrderLoggedOutModule } from './slsp-ill-signin-order-logged-out/slsp-ill-signin-order-logged-out.module'

export const hsgUserAreaExpandableAfterModule = angular
	.module('hsgUserAreaExpandableAfterModule', [])
	.component('prmUserAreaExpandableAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<bcu-lang-switch-component after-ctrl='$ctrl'></bcu-lang-switch-component>
		<slsp-ill-signin-order-logged-out-component after-ctrl='$ctrl'></slsp-ill-signin-order-logged-out-component>
		`
	})

hsgUserAreaExpandableAfterModule.requires.push(bcuLangSwitchModule.name)
hsgUserAreaExpandableAfterModule.requires.push(slspIllSigninOrderLoggedOutModule.name)
