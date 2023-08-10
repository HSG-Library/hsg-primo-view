import { slspMultivolumeRequestModule } from './slsp-multivolume-request/slsp-multivolume-request.module'

export const hsgOfferDetailsTileAfterModule = angular
	.module('hsgOfferDetailsTileAfterModule', [])
	.component('prmOfferDetailsTileAfter', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-multivolume-request-component after-ctrl="$ctrl"></slsp-multivolume-request-component>
						`
	})

hsgOfferDetailsTileAfterModule.requires.push(slspMultivolumeRequestModule.name)
