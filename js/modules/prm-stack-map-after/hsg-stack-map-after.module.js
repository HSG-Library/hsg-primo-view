import { hsgStackMapLinkModule } from "./hsg-stack-map-link/hsg-stack-map-link.module"

export const hsgStackMapAfterModule = angular
	.module('hsgStackMapAfterModule', [])
	.component('prmStackMapAfter', {
		bindings: { parentCtrl: '<' },
		template: `
		<hsg-stack-map-link-component after-ctrl="$ctrl"></hsg-stack-map-link-component>
		`
	})

hsgStackMapAfterModule.requires.push(hsgStackMapLinkModule.name)
