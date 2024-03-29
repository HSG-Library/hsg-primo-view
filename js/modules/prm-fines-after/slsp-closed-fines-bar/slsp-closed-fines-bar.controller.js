export class slspClosedFinesBarController {

	constructor($scope) {
		this.$scope = $scope
		this.showClosedFines = false // Variable für Anzeige-Status hinzufügen
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
	}

	$doCheck() {
		if (this.parentCtrl.finesTypeDropDownSelection === 'closed' || this.parentCtrl.finesTypeDropDownSelection === 'all') {
			const currentFinesArray = this.parentCtrl.totalNumOfFines
			if (angular.isArray(currentFinesArray) && currentFinesArray.length > 0) {
				let hasClosedFines = false // Variable für geschlossene Fines hinzufügen
				angular.forEach(currentFinesArray, (fine) => {
					if (fine.fineType === 'CLOSED') {
						hasClosedFines = true // Geschlossene Fines vorhanden
					}
				})
				this.showClosedFines = hasClosedFines // Anzeige-Status aktualisieren
			} else {
				this.showClosedFines = false // Keine Fines vorhanden
			}
		} else {
			this.showClosedFines = false // Dropdown-Auswahl entspricht nicht 'closed' oder 'all'
		}
	}
}

slspClosedFinesBarController.$inject = ['$scope']
