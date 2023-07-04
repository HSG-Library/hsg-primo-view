export class slspMultivolumeRequestController {
	constructor($scope) {
		this.$scope = $scope
		this.previousUnavailableResource = null
	}

	$doCheck() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		const currentUnavailableResource = this.parentCtrl.bestoffer.unavailableResource
		if (currentUnavailableResource !== this.previousUnavailableResource) {
			if (currentUnavailableResource !== false) {
				this.disableRequestButton()
			} else {
				this.enableRequestButton()
			}
			this.previousUnavailableResource = currentUnavailableResource
		}
	}

	disableRequestButton() {
		const requestButton = document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple')
		if (requestButton) {
			requestButton.disabled = true
		}
	}

	enableRequestButton() {
		const requestButton = document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple')
		if (requestButton) {
			requestButton.disabled = false
		}
	}
}

slspMultivolumeRequestController.$inject = ['$scope']
