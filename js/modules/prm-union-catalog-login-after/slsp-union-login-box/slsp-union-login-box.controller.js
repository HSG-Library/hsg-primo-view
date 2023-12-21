export class slspUnionLoginBoxController {

	constructor($scope, $compile, $timeout) {
		this.$scope = $scope
		this.$compile = $compile
		this.$timeout = $timeout
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
	}

	cancelUnionLogin() {
		this.parentCtrl.cancelLogin()
	}
}

slspUnionLoginBoxController.$inject = ['$scope', '$compile', '$timeout']
