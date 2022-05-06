export class hsgStandAloneLoginInfoController {
	constructor($document, $element, $sce, hsgStandAloneLoginInfoConfig, hsgTranslatorService) {
		this.$document = $document
		this.$element = $element
		this.$sce = $sce
		this.config = hsgStandAloneLoginInfoConfig
		this.translator = hsgTranslatorService
		this.title = this.translate('title')
		this.text = this.translate('text')
	}

	$onInit() {
		this.$document[0].querySelector('body').classList.add('hsg-stand-alone-login-body')
		let parent = this.$element.parent()
		let card = this.$element[0].querySelector('md-card')
		let container = parent.parent()[0].querySelector('md-card').parentElement
		let insertBeforeElement = parent.parent()[0].querySelector('md-card')
		container.insertBefore(card, insertBeforeElement)

		container.flex = "100"
		container.style.flexFlow = "row"

		card.querySelector('#hsg-login-title').innerHTML = this.title
		card.querySelector('#hsg-login-text').innerHTML = this.text
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return key
		}
		let msg = this.translator.getLabel(key, this.config)
		return this.$sce.trustAsHtml(msg).toString()
	}

}

hsgStandAloneLoginInfoController.$inject = ['$document', '$element', '$sce', 'hsgStandAloneLoginInfoConfig', 'hsgTranslatorService']
