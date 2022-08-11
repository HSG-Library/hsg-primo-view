export class hsgSublocationLinkController {

	constructor($element, hsgSublocationLinkConfig, hsgTranslatorService) {
		this.$element = $element
		this.config = hsgSublocationLinkConfig
		this.translator = hsgTranslatorService
		this.showLink = false
		this.mapLink = ''
		this.mapLinkText = ''
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.mapLinkText = this.translate('mapLinkText')
		if (!this.parentCtrl.currLoc) {
			return
		}
		const loc = this.parentCtrl.currLoc.location
		if (loc) {
			const subLocationCode = loc.subLocationCode
			if (subLocationCode === 'SZ') {
				this.showLink = true
				this.mapLink = this.config[subLocationCode].mapLink
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

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return
		}
		let msg = this.translator.getLabel(key, this.config)
		return msg
	}
}

hsgSublocationLinkController.$inject = ['$element', 'hsgSublocationLinkConfig', 'hsgTranslatorService']
