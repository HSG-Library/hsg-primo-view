export class ethDisableRequestButtonController {

	constructor($timeout) {
		this.$timeout = $timeout;
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.observeDomChanges();
	}

	observeDomChanges() {
		const targetNode = document.querySelector('prm-service-physical-best-offer'); // Das zu beobachtende Element

		if (!targetNode) {
			console.error('***slsp*** Target element not found for DOM observation');
			return;
		}

		const config = { childList: true, subtree: true }; // Konfiguration für Änderungen in den Kind-Elementen und Unterelementen

		const observer = new MutationObserver((mutationsList) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'childList') {
					this.checkAndDisableButton(targetNode);
				}
			}
		});

		// Start der Beobachtung
		observer.observe(targetNode, config);
	}

	checkAndDisableButton(targetNode) {
		let noAvailableCopies = targetNode.querySelector('[translate="rapido.tiles.physical.no_best_offer.line_2"]');
			if (noAvailableCopies) {
				let requestButton = targetNode.querySelector('#get_it_btn_physical');
				if (requestButton) {
					angular.element(requestButton).attr('disabled', 'disabled');
				}
			}
	}
}

ethDisableRequestButtonController.$inject = ['$timeout'];
