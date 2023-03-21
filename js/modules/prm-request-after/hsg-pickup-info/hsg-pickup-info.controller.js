export class hsgPickupInfoController {

	constructor($element, $rootScope, $scope, $http, hsgUtilsService) {
		this.$element = $element
		this.$rootScope = $rootScope
		this.$scope = $scope
		this.$http = $http
		this.utils = hsgUtilsService
	}

	$onInit() {
		console.log('init pickup info')
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.lock = false
	}

	$doCheck() {
		if (!this.pickupLocation() || this.pickupLocation().indexOf("619134100005506") == -1) {
			this.cleanUp()
			return
		}
		if (!this.submitButton()) {
			return
		}
		if (this.lock) {
			return
		}
		if (this.form() && !this.info()) {
			this.lock = true
			let infoHtml = '<div class="hsg-pickup-info"><h2>Der Abholort für ihr Exemplar ist SGKBV Bibliothek Hauptpost.</h2><p>Wenn sie das Exemplar an der HSG beziehen wollen, müssen sie das Exemplar selber aus dem Freihandbereich der Bibliothek holen.</p></div>'
			this.form().insertAdjacentHTML('beforebegin', infoHtml)
			if (this.submitButton()) {
				this.submitButton().addEventListener('click', this.captureClick, true)
			}
		}
	}

	// checkIfSpeibi() {
	// 	const barcode = this.parentCtrl.locationsService.lineData
	// 	this.utils.searchBarcode(barcode).then(response => {
	// 		console.log('response', response)
	// 		const libCode = response.data.delivery.bestlocation.libraryCode
	// 		this.isSpeibi = libCode == 'SGSBI';
	// 		this.checkDone = true
	// 	})
	// }

	captureClick(event) {
		const msg = 'Wenn sie diese Bestellung abschicken, müssen sie ihr Exemplar in der SGKBV Bibliothek Hauptpost abholen, wenn sie das Exemplar an der HSG beziehen wollen, müssen sie das Exemplar selber aus dem Freihandbereich der Bibliothek holen. Fortfahren?'
		const doSubmit = confirm(msg)
		if (!doSubmit) {
			event.stopImmediatePropagation()
			event.stopPropagation()
			event.preventDefault()
		}
	}

	cleanUp() {
		if (this.form()) {
			if (this.info()) {
				this.info().remove()
			}
		}
		if (this.submitButton()) {
			this.submitButton().removeEventListener('click', this.captureClick, true)
		}
		this.lock = false
	}

	pickupLocation() {
		try {
			return this.parentCtrl.formData.pickupLocation
		} catch (error) {
			return undefined
		}
	}

	submitButton() {
		try {
			return this.$element.parent().parent()[0].querySelectorAll("button[type=submit]")[0]
		} catch (error) {
			return undefined
		}
	}

	form() {
		try {
			return this.$element.parent().parent()[0].querySelectorAll("form.almaRequestLoan")[1]
		} catch (error) {
			return undefined
		}
	}

	info() {
		try {
			return this.$element.parent().parent()[0].querySelector('div.hsg-pickup-info')
		} catch (error) {
			return undefined
		}
	}
}

hsgPickupInfoController.$inject = ['$element', '$rootScope', '$scope', '$http', 'hsgUtilsService']
