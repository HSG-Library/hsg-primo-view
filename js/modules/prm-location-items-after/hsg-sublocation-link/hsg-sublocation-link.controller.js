export class hsgSublocationLinkController {

	constructor($scope, $element, hsgSublocationLinkConfig, hsgTranslatorService) {
		this.$scope = $scope
		this.$element = $element
		this.config = hsgSublocationLinkConfig
		this.translator = hsgTranslatorService
		this.showLink = false
		this.mapLink = ''
		this.mapLinkText = ''
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		let that = this
		this.$scope.$watch(
			function () {
				return that.parentCtrl.currLoc
			},
			function (newValue, oldValue) {
				if (newValue !== oldValue) {
					that.createLink()
				}
			}
		)
	}

	createLink() {
		const loc = this.parentCtrl.currLoc.location
		if (loc) {
			const subLocationCode = loc.subLocationCode
			if (!this.isConfigured(subLocationCode)) {
				return
			}
			this.mapLinkText = this.translate('mapLinkText' + subLocationCode)
			if (subLocationCode === 'SZ') {
				this.showLink = true
				this.mapLink = this.config[subLocationCode].mapLink
			} else {
				this.showLink = false
			}
		}
	}

	getShowLink() {
		return this.showLink
	}

	getMapLink() {
		return this.mapLink
	}

	getMapLinkText() {
		return this.mapLinkText
	}

	isConfigured(subLocationCode) {
		if (this.config[subLocationCode]) {
			return true
		}
		return false
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

hsgSublocationLinkController.$inject = ['$scope', '$element', 'hsgSublocationLinkConfig', 'hsgTranslatorService']
