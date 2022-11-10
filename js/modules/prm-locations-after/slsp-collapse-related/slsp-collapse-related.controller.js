export class slspCollapseRelatedController {

	constructor($timeout, $scope) {
		this.$timeout = $timeout
		this.$scope = $scope
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		if (angular.isArray(this.parentCtrl.locations) && this.parentCtrl.locations.length > 0) {
			this.parentCtrl.relatedLocationsListLimit = 0
		}
	}
}

slspCollapseRelatedController.$inject = ['$timeout', '$scope']
