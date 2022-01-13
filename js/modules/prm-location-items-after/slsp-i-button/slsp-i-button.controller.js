export class slspIButtonController {

	constructor(hsgTranslatorService) {
		this.hsgTranslatorService = hsgTranslatorService;
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.biblinkText = "Library";
		this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?library\=";
	}

	getLibrary() {
		let currLoc = this.parentCtrl.currLoc;
		if (currLoc) {
			return currLoc.location.librarycodeTranslation;
		} else {
			return this.parentCtrl.loc.location.librarycodeTranslation;
		}
	}

	getLibraryCode() {
		let currLoc = this.parentCtrl.currLoc;
		if (currLoc) {
			return currLoc.location.libraryCode;
		} else {
			return this.parentCtrl.loc.location.libraryCode;
		}
	}

	getLanguage() {
		return this.hsgTranslatorService.getLang();
	}
}

slspIButtonController.$inject = ['hsgTranslatorService'];
