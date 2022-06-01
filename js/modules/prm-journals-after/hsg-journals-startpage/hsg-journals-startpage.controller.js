export class hsgJournalsStartpageController {
	constructor($element, $sce, hsgTranslatorService, hsgJournalsStartpageConfig) {
		this.$element = $element
		this.$sce = $sce
		this.translator = hsgTranslatorService
		this.config = hsgJournalsStartpageConfig
	}

	showStartPage() {
		let elements = this.$element.parent().parent().query('md-content')
		return elements == null || elements.length == 0
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return
		}
		let msg = this.translator.getLabel(key, this.config)
		return this.$sce.trustAsHtml(msg)
	}

}

hsgJournalsStartpageController.$inject = ['$element', '$sce', 'hsgTranslatorService', 'hsgJournalsStartpageConfig']
