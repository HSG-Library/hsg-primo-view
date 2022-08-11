export class slspIButtonController {

	constructor(hsgTranslatorService) {
		this.hsgTranslatorService = hsgTranslatorService
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.biblinkText = "Library"
		this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?library\="
	}

	getLibrary() {
		let currLoc = this.parentCtrl.currLoc
		if (currLoc) {
			return currLoc.location.librarycodeTranslation
		} else if (this.parentCtrl.loc) {
			return this.parentCtrl.loc.location.librarycodeTranslation
		} else {
			return ''
		}
	}

	getLibraryCode() {
		let currLoc = this.parentCtrl.currLoc
		if (currLoc) {
			return currLoc.location.libraryCode
		} else if (this.parentCtrl.loc) {
			return this.parentCtrl.loc.location.libraryCode
		} else {
			return ''
		}
	}

	getLanguage() {
		return this.hsgTranslatorService.getLang()
	}
}

slspIButtonController.$inject = ['hsgTranslatorService']
