export class slspArchivesAvailabilityLineController {

	constructor($translate) {
		this.$translate = $translate
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl

		this.changeButton = false
		if (!this.parentCtrl.result.pnx.display.source || this.parentCtrl.result.pnx.display.source.length === 0) {
			return
		}
		this.source = this.parentCtrl.result.pnx.display.source[0]
		if (!(this.source === 'ETH_Hochschularchiv')) return
		if (!this.parentCtrl.result.delivery.GetIt1 || this.parentCtrl.result.delivery.GetIt1.length == 0 || !this.parentCtrl.result.delivery.GetIt1[0].links || this.parentCtrl.result.delivery.GetIt1[0].links.length == 0) return

		let aOnlineLink = this.parentCtrl.result.delivery.GetIt1[0].links.filter(l => {
			if (l.isLinktoOnline && l.link !== '') {
				return true
			}
			return false
		})
		if (aOnlineLink.length === 0) {
			// there is no online resource
			this.$translate('delivery.code.no_inventory').then((translation) => {
				this.changeButton = true
				this.changeButtonText = translation
			})
			let availabilityLine = this.parentCtrl.$element[0]
			if (availabilityLine) {
				availabilityLine.classList.add('slsp-hsa-no-online')
			}
		}
	}

	$doCheck() {
		if (this.changeButton) {
			let availabilityLine = this.parentCtrl.$element[0]
			let button = availabilityLine.querySelector('.availability-status')
			if (angular.element(button) && angular.element(button).length > 0) {
				angular.element(button).html(this.changeButtonText)
				this.changeButton = false
				this.changeButtonText = ''
			}
		}
	}
}

slspArchivesAvailabilityLineController.$inject = ['$translate']
