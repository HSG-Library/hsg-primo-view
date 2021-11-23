export class hsgBrowzineIntegrationController {

	constructor($window, $scope, hsgBrowzineIntegrationConfig, hsgTranslatorService) {
		this.$window = $window;
		this.$scope = $scope;
		this.config = hsgBrowzineIntegrationConfig;
		this.translator = hsgTranslatorService;
	}

	$onInit() {
		this.translateToCurrentLanguage();
		let scopeClone = this.$scope;
		scopeClone.$ctrl.parentCtrl = this.afterCtrl.parentCtrl;
		this.$window.browzine.primo.searchResult(scopeClone);
	}

	translateToCurrentLanguage() {
		let labels = {
			articlePDFDownloadLinkText: this.translate('articlePDFDownloadLinkText'),
			articleLinkText: this.translate('articleLinkText'),
		};
		// merge existing config with current language labels
		this.$window.browzine = Object.assign(this.$window.browzine, labels);
	}

	translate(key) {
		return this.translator.getLabel(key, this.config);
	}
}

hsgBrowzineIntegrationController.$inject = ['$window', '$scope', 'hsgBrowzineIntegrationConfig', 'hsgTranslatorService'];
