export class slspIButtonController {

	constructor($rootScope, $sce, hsgTranslatorService, slspIButtonConfig) {
		this.$rootScope = $rootScope
		this.$sce = $sce
		this.translator = hsgTranslatorService
		this.config = slspIButtonConfig
		this.biblinkBase = "https:\/\/registration.slsp.ch\/libraries\/\?library\="
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.getLibrary = this.getLibrary.bind(this)
		this.getLibraryCode = this.getLibraryCode.bind(this)
		this.getLanguage = this.getLanguage.bind(this)
	}

	getLibrary() {
		if (this.parentCtrl.currLoc !== undefined && this.parentCtrl.currLoc.location !== undefined) {
			const library = this.parentCtrl.currLoc.location.librarycodeTranslation
			if (this.getLibraryCode() == 'HSG') {
				return library + '-' + this.translate('library')
			}
			return library
		} else {
			return
		}
	}

	getLibraryCode() {
		if (this.parentCtrl.currLoc !== undefined && this.parentCtrl.currLoc.location !== undefined) {
			return this.parentCtrl.currLoc.location.libraryCode
		} else {
			return
		}
	}

	getLanguage() {
		const sms = this.$rootScope.$$childHead.$ctrl.userSessionManagerService
		if (!sms) {
			return 'en'
		} else {
			return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage
		}
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

slspIButtonController.$inject = ['$rootScope', '$sce', 'hsgTranslatorService', 'slspIButtonConfig']
