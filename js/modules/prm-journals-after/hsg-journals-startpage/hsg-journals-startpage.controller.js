export class hsgJournalsStartpageController {
	constructor($sce, hsgTranslatorService, hsgJournalsStartpageConfig) {
		this.$sce = $sce;
		this.translator = hsgTranslatorService;
		this.config = hsgJournalsStartpageConfig;
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing");
			return;
		}
		let msg = this.translator.getLabel(key, this.config);
		return this.$sce.trustAsHtml(msg);
	}

}

hsgJournalsStartpageController.$inject = ['$sce', 'hsgTranslatorService', 'hsgJournalsStartpageConfig'];
