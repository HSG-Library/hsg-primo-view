export class slspDigitizationButtonLabelController {

	constructor($scope, $compile, $timeout) {
		this.$scope = $scope
		this.$compile = $compile
		this.$timeout = $timeout
	}

	$onInit() {
		this.$timeout(() => {
			this.parentCtrl = this.afterCtrl.parentCtrl
			if (this.parentCtrl.service.type !== undefined && this.parentCtrl.service.type === 'AlmaDigitization') {
				this.digiButtonLabel = digiButtonLabel
				let digiButtonLabel = document.querySelectorAll('prm-full-view-service-container prm-service-button button span[translate="AlmaDigitization"]')
				let html = `<div class="DigiButtonLabel1">CHF</div>`

				angular.element(digiButtonLabel).after(html).addClass('digiButton')
			}
			if (this.parentCtrl.service.type !== undefined && this.parentCtrl.service.type === 'AlmaItemDigitization') {
				this.digiItemButtonLabel = digiItemButtonLabel
				let digiItemButtonLabel = document.querySelectorAll('prm-full-view-service-container prm-service-button button span[translate="AlmaItemDigitization"]')
				let html = `<div class="DigiButtonLabel">CHF</div>`

				angular.element(digiItemButtonLabel).append(html).addClass('digiButton')
			}
		}, 1)
	}
}

slspDigitizationButtonLabelController.$inject = ['$scope', '$compile', '$timeout']
