import { hsgTranslatorService } from '../../../services/hsg-translator.service'

export class hsgJournalsStartpageController {
	constructor($element, $sce, hsgTranslatorService, hsgJournalsStartpageConfig) {
		this.$element = $element
		this.$sce = $sce
		this.translator = hsgTranslatorService
		this.config = hsgJournalsStartpageConfig
	}

	showStartPage() {
		let prmSearchElement = this.$element.parent().parent().query('prm-search')[0]
		let prmResultsElement = prmSearchElement.querySelector('prm-search-result-list')
		let hasSearchResults = prmResultsElement == null || prmResultsElement.length == 0
		let searchContainer = prmSearchElement.querySelector('div[role=document]')
		searchContainer.style.display = hasSearchResults ? 'none' : 'block'
		return hasSearchResults
	}

	isGerman() {
		return this.translator.getLang() == 'de'
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
