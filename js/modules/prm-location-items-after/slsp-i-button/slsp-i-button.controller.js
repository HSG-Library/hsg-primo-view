export class slspIButtonController {

	constructor() {
		this.vm = this.afterCtrl;
		this.biblinkText = "Library";
		this.biblinkBase = "https:\/\/slsp.ch\/libraries";
	}

	getLibrary() {
		const currLoc = this.vm.parentCtrl.currLoc;
		if (currLoc) {
			return currLoc.location.librarycodeTranslation;
		}
		return "";
	}
}
