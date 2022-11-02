export class bcuRapidoNoFurtherOptionsController {

	constructor($scope) {
		this.$scope = $scope
	}

	$doCheck() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		let msg = this.parentCtrl.almaRSServiceAvailable
		let isi = this.parentCtrl.isSignedIn()
		let elem = document.getElementById('rapidoOffer')
		let span = document.querySelector('button span[translate="brief.results.tabs.Get_it_from_other_locations"]')

		if (elem !== null && span !== null && msg == "false" && isi == "true") {
			elem.remove()
			span.parentElement.remove()
		}
	}
}

bcuRapidoNoFurtherOptionsController.$inject = ['$scope']
