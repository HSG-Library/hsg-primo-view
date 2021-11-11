export class slspIButtonController {

	constructor(hsgTranslatorService) {
		this.hsgTranslatorService = hsgTranslatorService;
	}

	$onInit() {
		debugger;
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.biblinkText = "Library";
		this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?search\=";
		this.currLoc = this.parentCtrl.currLoc;
	}

	getLibrary() {
		if (this.currLoc) {
			return this.currLoc.location.librarycodeTranslation;
		}
		return "";
	}

	getLibraryCode() {
		if (this.currLoc) {
			return this.currLoc.location.libraryCode;

		}
		return "";
	}

	getLanguage() {
		return this.hsgTranslatorService.getLang();

	}
}

slspIButtonController.$inject = ['hsgTranslatorService'];
