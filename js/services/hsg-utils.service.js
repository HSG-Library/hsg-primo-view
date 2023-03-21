export const hsgUtilsService = ['$rootScope', '$http',
	function ($rootScope, $http) {

		this.getUserSessionManagerService = function () {
			return this.sms = $rootScope.$$childHead.$ctrl.userSessionManagerService
		}

		this.getViewId = function () {
			return this.getUserSessionManagerService().vid
		}

		this.getInstitution = function () {
			return this.getUserSessionManagerService().inst
		}

		this.getLang = function () {
			return this.getUserSessionManagerService().getInterfaceLanguage()
		}

		this.searchBarcode = async function (barcode) {
			const baseUrl = this.getUserSessionManagerService().restBaseURLs.barcodeSearchURL
			const url = baseUrl + "/" + barcode + "?lang=" + this.getLang() +"&vid=" + this.getViewId()
			return await $http.get(url)
		}

		return {
			getUserSessionManagerService: this.getUserSessionManagerService,
			getViewId: this.getViewId,
			getInstitution: this.getInstitution,
			getLang: this.getLang,
			searchBarcode: this.searchBarcode
		}
	}]
