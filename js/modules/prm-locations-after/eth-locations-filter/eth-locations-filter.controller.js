export class ethLocationsFilterController {

	constructor($timeout, $scope) {
		this.$timeout = $timeout
		this.$scope = $scope
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.$scope.$watch('this.$ctrl.parentCtrl.locations[0].location.librarycodeTranslation', (newValue, oldValue, scope) => {
			if (!scope.$ctrl.parentCtrl.isLocationsFilterVisible && newValue && newValue != '') {
				this.$timeout(() => {
					scope.$ctrl.parentCtrl.isLocationsFilterVisible = true
				}, 0)
			}
		}, true)
	}
}

ethLocationsFilterController.$inject = ['$timeout', '$scope']
