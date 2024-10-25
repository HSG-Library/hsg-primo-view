export class slspLoginBoxController {

	constructor($scope, $compile, $timeout, $rootScope, $window) {
		this.$scope = $scope;
		this.$compile = $compile;
		this.$timeout = $timeout;
		this.$rootScope = $rootScope;
		this.$window = $window;
	}

	$onInit() {
		this.$timeout(() => {
			this.parentCtrl = this.afterCtrl.parentCtrl;

			let buttonHelp = '<a ng-href="https://eduid.ch/help/?lang={{ $ctrl.getLanguage() }}" target="_blank" class="parallelLoginDescription"><span translate="parallel.login.description1"></span><svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>';

			let infoLabel = '<p class="parallelLoginDescription" translate="parallel.login.description2"></p>';

			let authMeth1 = angular.element(document.querySelectorAll(`prm-login div > md-content > md-list > md-list-item:nth-child(1)`));
			angular.element(authMeth1).append(this.$compile(buttonHelp)(this.$scope)).addClass('authMethSaml');

			let authMeth2 = angular.element(document.querySelectorAll(`prm-login div > md-content > md-list > md-list-item:nth-child(2)`));
			angular.element(authMeth2).append(this.$compile(infoLabel)(this.$scope)).addClass('authMethAlma');

		}, 0);
	}

	getLanguage() {
		let sms = this.$rootScope.$$childHead.$ctrl.userSessionManagerService;
		if (!sms) {
			return 'en';
		} else {
			return sms.getUserLanguage() || $window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
		}
	}
}

slspLoginBoxController.$inject = ['$scope', '$compile', '$timeout', '$rootScope', '$window'];