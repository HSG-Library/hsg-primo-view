export class slspMultivolumeRequestController {
	constructor($scope) {
		this.$scope = $scope
		this.previousUnavailableVolume = null
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.domManipulated = false
	}

	$doCheck() {
		const currentUnavailableVolume = this.parentCtrl.isNoOfferAfterRefine()

		if (!this.domManipulated) {
			let volumeField = angular.element(document.querySelector('prm-get-it-request .form_item[ng-if="::$ctrl.isCodeEnabledforForm(\'VOLUME\')"]'))
			let refineButton = angular.element(document.querySelector('span[ng-if="::$ctrl._tempRapidoLocateSerialMultivolumeOffers"]'))
			volumeField.append(refineButton)
			this.domManipulated = true
		}

		if (currentUnavailableVolume !== this.previousUnavailableVolume) {
			if (currentUnavailableVolume == true) {
				this.disableRequestButton()
			} else {
				this.enableRequestButton()
			}

			this.previousUnavailableVolume = currentUnavailableVolume
		}

	}

	disableRequestButton() {
		const requestButton = angular.element(document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple'))
		if (requestButton) {
			requestButton.attr('disabled', 'disabled')
		}
	}

	enableRequestButton() {
		const requestButton = angular.element(document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple'))
		if (requestButton) {
			requestButton.removeAttr('disabled')
		}
	}
}

slspMultivolumeRequestController.$inject = ['$scope']
