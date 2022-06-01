export class bcuLangSwitchController {

	constructor($element, $window) {
		this.$parent = $element.parent().parent()[0]
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.$window = $window
	}

	$onInit() {
		this.languages = ["de", "en"]
		if (!this.languages.includes(this.parentCtrl.lang)) {
			this.changeLanguage("en")
		}
	};

	changeLanguage(lang) {
		this.parentCtrl.changeLangService.addLangParamToUrl(lang)
		let parentCtrl = this.parentCtrl
		this.parentCtrl.i18nService.setLanguage(lang).then(function () {
			parentCtrl.$timeout(function () {
				return parentCtrl.$state.go(parentCtrl.$state.current, { lang: lang }, { reload: !0 })
			})
		})
	};
}

bcuLangSwitchController.$inject = ['$element', '$window']
