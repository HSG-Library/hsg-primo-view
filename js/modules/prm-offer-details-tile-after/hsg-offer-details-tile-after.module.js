import { slspMultivolumeRequestModule } from './slsp-multivolume-request/slsp-multivolume-request.module'
import { slspBookRequestFormMsgModule } from './slsp-book-request-form-msg/slsp-book-request-form-msg.module'

export const hsgOfferDetailsTileAfterModule = angular
	.module('hsgOfferDetailsTileAfterModule', [])
	.component('prmOfferDetailsTileAfter', {
		bindings: { parentCtrl: '<' },
		template: `
            <slsp-multivolume-request-component after-ctrl="$ctrl"></slsp-multivolume-request-component>
			<slsp-book-request-form-msg-component after-ctrl="$ctrl"></slsp-book-request-form-msg-component>
						`
	})

hsgOfferDetailsTileAfterModule.requires.push(slspMultivolumeRequestModule.name)
hsgOfferDetailsTileAfterModule.requires.push(slspBookRequestFormMsgModule.name)
