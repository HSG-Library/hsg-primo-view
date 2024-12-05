export class slspTopPaginationSwitchController {

	constructor($scope) {
		this.$scope = $scope;
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.parentCtrl.enableTopPagination = true;
	}
}

slspTopPaginationSwitchController.$inject = ['$scope'];
