export class hsgBrowzineIntegrationController {

	constructor($window, $scope, hsgTranslatorService) {
		this.$window = $window;
		this.$scope = $scope;
		this.hsgTranslatorService = hsgTranslatorService;
	}

	$onInit() {
		this.translateToCurrentLanguage();
		let scopeClone = this.$scope;
		scopeClone.$ctrl.parentCtrl = this.afterCtrl.parentCtrl;
		this.$window.browzine.primo.searchResult(scopeClone);
	}

	translateToCurrentLanguage() {
		// default labels (en)
		let labels = {
			articleBrowZineWebLinkText: "View Issue Contents in BrowZine HSG",
			articlePDFDownloadLinkText: "Download PDF",
			articleLinkText: "Read Article",
		};
		if (this.hsgTranslatorService.getLang() == "de") {
			// translate labels to de
			labels = {
				articleBrowZineWebLinkText: "Inhalt der Ausgabe in BrowZine HSG anzeigen",
				articlePDFDownloadLinkText: "PDF herunterladen",
				articleLinkText: "Artikel lesen",
			};
		}
		// merge existing config with current language labels
		this.$window.browzine = Object.assign(this.$window.browzine, labels);
	}
}

hsgBrowzineIntegrationController.$inject = ['$window', '$scope', 'hsgTranslatorService'];
