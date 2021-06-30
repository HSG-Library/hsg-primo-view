import { slspIllSigninOrderLoggedOutModule } from "./slsp-ill-signin-order-logged-out/slsp-ill-signin-order-logged-out.module";

export const hsgUserAreaExpandableAfterModule = angular
	.module('hsgUserAreaExpandableAfterModule', [])
	.component('prmUserAreaExpandableAfter', {
		bindings: { parentCtrl: '<' },
		template: `<slsp-ill-signin-order-logged-out-component after-ctrl="$ctrl"></slsp-ill-signin-order-logged-out-component>`
	});

hsgUserAreaExpandableAfterModule.requires.push(slspIllSigninOrderLoggedOutModule.name);
