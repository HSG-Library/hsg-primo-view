export class slspOvpReservationController {
	constructor($scope, $element, $compile) {
		this.$scope = $scope
		this.$element = $element
		this.$compile = $compile
		this.reservationLabel = '<span translate="customized.rapido.reservation"></span>'
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.processDoCheck = true
	}

	$doCheck() {
		let unavailability = this.parentCtrl.item.delivery.bestlocation.availabilityStatus

		// Hier das DOM-Element der Angular-Komponente abrufen
		let currentElement = this.$element[0]

		// Das Elternelement ("prm-opac") der Angular-Komponente abrufen
		let prmOpacElement = currentElement.closest('prm-opac')

		// Den Button innerhalb des aktuellen "prm-opac" Teils auswählen
		let reservationButton = prmOpacElement.querySelector('prm-service-button button span[translate="AlmaRequest"], prm-service-button button span[translate="AlmaRequestOther"]')

		if (!this.processDoCheck && unavailability !== "available") {
			// Überprüfen, ob das Element gefunden wurde, bevor auf innerHTML zugegriffen wird
			if (reservationButton && !reservationButton.innerHTML.includes('customized.rapido.reservation')) {
				// Element mit "reservationLabel" ersetzen
				let compiledHtml = this.$compile(this.reservationLabel)(this.$scope)
				angular.element(reservationButton).replaceWith(compiledHtml)
			}
		}
		//console.log(this.parentCtrl);
		this.processDoCheck = false
	}
}

slspOvpReservationController.$inject = ['$scope', '$element', '$compile']
