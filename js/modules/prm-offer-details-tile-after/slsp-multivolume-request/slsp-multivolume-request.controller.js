export class slspMultivolumeRequestController {
	constructor($scope) {
		this.$scope = $scope;
		this.previousUnavailableVolume = null;
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.domManipulated = false;
	}

	$doCheck() {
		const currentUnavailableVolume = this.parentCtrl.isNoOfferAfterRefine();
		const isUnavailableResource = this.parentCtrl.isUnavailableResource();

		if (!this.domManipulated) {
			let volumeField = angular.element(document.querySelector('prm-get-it-request .form_item[ng-if="::$ctrl.isCodeEnabledforForm(\'VOLUME\')"]'));
			let refineButton = angular.element(document.querySelector('span[ng-if="::$ctrl._tempRapidoLocateSerialMultivolumeOffers"]'));

			volumeField.append(refineButton);

			this.domManipulated = true;
		}

		if (currentUnavailableVolume !== this.previousUnavailableVolume) {
			if (currentUnavailableVolume === true) {
				this.disableRequestButton();
			} else {
				this.enableRequestButton();
			}

			this.previousUnavailableVolume = currentUnavailableVolume;
		}

		this.updatePhysicalGetItRequestClass(isUnavailableResource, currentUnavailableVolume);
	}

	disableRequestButton() {
		const requestButton = angular.element(document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple'));
		if (requestButton) {
			requestButton.attr('disabled', 'disabled');
		}
	}

	enableRequestButton() {
		const requestButton = angular.element(document.querySelector('button.button-with-icon.button-confirm.md-button.md-primoExplore-theme.md-ink-ripple'));
		if (requestButton) {
			requestButton.removeAttr('disabled');
		}
	}

	updatePhysicalGetItRequestClass(isUnavailableResource, isNoOfferAfterRefine) {
		const physicalGetItRequestDiv = angular.element(document.querySelector('#physicalGetItRequest'));
		if (physicalGetItRequestDiv) {
			// Klasse "is-unavailable-resource" hinzufügen/entfernen
			if (isUnavailableResource) {
				physicalGetItRequestDiv.addClass('is-unavailbl-resource');
			} else {
				physicalGetItRequestDiv.removeClass('is-unavailbl-resource');
			}

			// Klasse "no-best-offer" hinzufügen/entfernen
			if (isNoOfferAfterRefine) {
				physicalGetItRequestDiv.addClass('no-best-offer');
			} else {
				physicalGetItRequestDiv.removeClass('no-best-offer');
			}
		}
	}
}

slspMultivolumeRequestController.$inject = ['$scope'];