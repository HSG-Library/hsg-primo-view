export class hsgPickupInfoController {

	constructor($element, $rootScope, $scope, $http, hsgPickupInfoConfig, hsgTranslatorService) {
		this.$element = $element
		this.$rootScope = $rootScope
		this.$scope = $scope
		this.$http = $http
		this.config = hsgPickupInfoConfig
		this.translator = hsgTranslatorService
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
			const libCode = this.libCode()
			if (libCode && libCode == "SGSBI") {
				return
			}
			let infoHtml = '<div class="hsg-pickup-info">' + this.translate('infoHtml') + '</div>'
			this.form().insertAdjacentHTML('beforebegin', infoHtml)
			if (this.submitButton()) {
				this.submitButton().addEventListener('click', (event) => this.captureClick(event, this.translate('confirmMsg')), true)
			}
		}
	}

	captureClick(event, msg) {
		const doSubmit = confirm(msg)
		if (!doSubmit) {
			event.stopImmediatePropagation()
			event.stopPropagation()
			event.preventDefault()
		}
	}

	cleanUp() {
		if (!this.lock) {
			// only clean up if there was a
			return
		}
		console.log('clean up pickup info')
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

	libCode() {
		try {
			if (this.parentCtrl.$scope.$parent.$parent.$ctrl.isSingleLoc()) {
				return this.parentCtrl.$scope.$parent.$parent.$ctrl.loc.location.libraryCode
			} else {
				return this.parentCtrl.$scope.$parent.$parent.$ctrl.item.delivery.holding.some(h => h.libraryCode == 'SGSBI') ? 'SGSBI' : undefined
			}
		} catch (error) {
			return undefined
		}
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

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return
		}
		let msg = this.translator.getLabel(key, this.config)
		return msg
	}
}

hsgPickupInfoController.$inject = ['$element', '$rootScope', '$scope', '$http', 'hsgPickupInfoConfig', 'hsgTranslatorService']
