export class slspArchivesViewitController {

	constructor($translate) {
		this.$translate = $translate
		this.parentCtrl = this.afterCtrl.parentCtrl
	}

	$onInit() {
		if (!this.parentCtrl.item.pnx.display.source || this.parentCtrl.item.pnx.display.source.length === 0) {
			return
		}
		this.source = this.parentCtrl.item.pnx.display.source[0]
		// CMI STAR sources
		if (this.source === 'ETH_Hochschularchiv') {
			if (this.parentCtrl.item.delivery.GetIt1 && this.parentCtrl.item.delivery.GetIt1.length > 0 && this.parentCtrl.item.delivery.GetIt1[0].links && this.parentCtrl.item.delivery.GetIt1[0].links.length > 0) {

				// there is an online resource: return and do nothing
				let aOnlineLink = this.parentCtrl.item.delivery.GetIt1[0].links.filter(l => {
					if (l.isLinktoOnline && l.link !== '') {
						return true
					}
					return false
				})
				if (aOnlineLink.length > 0) {
					return
				}

				// there is no online resource
				// change section heading
				this.$translate('nui.getit.service_howtogetit').then((translation) => {
					let fullView = document.getElementById('fullView')
					angular.element(fullView.querySelector("h4[translate='nui.getit.service_viewit']")).text(translation)
					angular.element(fullView.querySelector("#services-index span[translate='nui.getit.service_viewit']")).text(translation)
				})

			}
			// hide content of viewit section
			let section = document.getElementById('full-view-container')
			section.classList.add('slsp-archives-hide')

			// get guid of CMIStar
			let sourceid = this.parentCtrl.item.pnx.control.originalsourceid[0]
			let guid = sourceid.substring(sourceid.lastIndexOf(':') + 1)

			// different sources: concat url
			if (this.source === 'ETH_Hochschularchiv') {
				this.url = 'http://archivdatenbank-online.ethz.ch/hsa/#/content/' + guid
				// only for test
				//this.label = 'Bestellen über Hochschularchiv Online';
			}
		}
	}
}

slspArchivesViewitController.$inject = ['$translate']
