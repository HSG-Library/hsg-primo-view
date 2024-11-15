export class slspUnionLoginBoxController {

	constructor($scope, $compile, $timeout, $rootScope, $window) {
		this.$scope = $scope;
		this.$compile = $compile;
		this.$timeout = $timeout;
		this.$rootScope = $rootScope;
		this.$window = $window;
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
	}

	cancelUnionLogin() {
		this.parentCtrl.cancelLogin();
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

slspUnionLoginBoxController.$inject = ['$scope', '$compile', '$timeout', '$rootScope', '$window'];
