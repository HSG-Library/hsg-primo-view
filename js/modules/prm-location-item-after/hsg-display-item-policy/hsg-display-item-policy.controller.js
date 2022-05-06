export class hsgDisplayItemPolicyController {

	constructor($scope, $document, $element, hsgDisplayItemPolicyConfig, hsgTranslatorService, hsgUserService) {
		this.$scope = $scope
		this.$document = $document
		this.$element = $element
		this.config = hsgDisplayItemPolicyConfig
		this.translator = hsgTranslatorService
		this.userService = hsgUserService
	}

	$onInit() {
		this.ctrl = this.afterCtrl.parentCtrl
		/* 
		only set the item policy when the user is logged in,
		otherwise, the item policy is not displayed
		*/
		if (this.isLoggedIn()) {
			this.setItemPolicyText()
		}
	}

	setItemPolicyText() {
		// only if organisation is "41SLSP_HSG"
		if (!this.isOrgHsg()) {
			return
		}
		// the item policy must be empty
		if (!this.isItemPolicyEmpty()) {
			return
		}
		// if the library is IFF
		// OR
		// the location is not in in ['HABI', 'ARCH', 'HG', 'OPSY', 'UNASSIGNED']
		// --> this should match for item policy 70
		if (this.isLibraryIff() && this.isValidLocation()) {
			this.selectItem().itemFields[1] = this.translate('onRequest')
			/*
			after setting the item policy the first time, register
			a watcher to change it again, in case it gets reset
			*/
			this.registerWatcher()
			return
		}
		// only if library is HSG
		// AND
		// the location must not be in ['HABI', 'ARCH', 'HG', 'OPSY', 'UNASSIGNED']
		// --> this should match for item policy 63 and 68
		if (this.isLibraryHsg() && this.isValidLocation()) {
			this.selectItem().itemFields[1] = this.translate('onSite')
			/*
			after setting the item policy the first time, register
			a watcher to change it again, in case it gets reset
			*/
			this.registerWatcher()
			return
		}
		// if the library is not HSG
		// OR
		// the location is not in in ['HABI', 'ARCH', 'HG', 'OPSY', 'UNASSIGNED']
		// --> this should match for item policy 67
		if (!this.isLibraryHsg() || !this.isValidLocation()) {
			this.selectItem().itemFields[1] = this.translate('unavailable')
			/*
			after setting the item policy the first time, register
			a watcher to change it again, in case it gets reset
			*/
			this.registerWatcher()
			return
		}
	}

	registerWatcher() {
		let that = this
		this.$scope.$watch(
			function () {
				return that.selectItem().itemFields[1]
			},
			function (newValue, oldValue) {
				if (newValue !== oldValue) {
					that.setItemPolicyText()
				}
			}
		)
	}

	isLoggedIn() {
		return !this.userService.isGuest()
	}

	isOrgHsg() {
		return this.ctrl.loc.location.organization == "41SLSP_HSG"
	}

	isLibraryHsg() {
		let libraryCode = this.ctrl.loc.location.libraryCode
		return libraryCode == "HSG"
	}

	isLibraryIff() {
		let libraryCode = this.ctrl.loc.location.libraryCode
		return libraryCode == "HIFF"
	}

	isItemPolicyEmpty() {
		let item = this.selectItem()
		return item.itemFields[1] == ' '
	}

	isValidLocation() {
		let locationCodes = ['HABI', 'ARCH', 'HG', 'OPSY', 'UNASSIGNED']
		let subLocationCode = this.ctrl.loc.location.subLocationCode
		return !locationCodes.includes(subLocationCode)
	}

	selectItem() {
		let componentName = this.$element[0].nodeName.toLocaleLowerCase()
		let index = Array.from(this.$document.find(componentName)).findIndex(e => e == this.$element[0])
		return this.ctrl.loc.items[index]
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return key
		}
		return this.translator.getLabel(key, this.config)
	}
}

hsgDisplayItemPolicyController.$inject = ['$scope', '$document', '$element', 'hsgDisplayItemPolicyConfig', 'hsgTranslatorService', 'hsgUserService']
