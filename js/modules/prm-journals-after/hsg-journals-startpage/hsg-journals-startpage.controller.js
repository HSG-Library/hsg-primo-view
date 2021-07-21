export class hsgJournalsStartpageController {
	constructor(hsgTranslatorService, hsgJournalsStartpageConfig) {
		this.translator = hsgTranslatorService;
		this.config = hsgJournalsStartpageConfig;
	}

	translate(key) {
		return this.translator.getLabel(key, this.config);
	}

}

hsgJournalsStartpageController.$inject = ['hsgTranslatorService', 'hsgJournalsStartpageConfig'];
