export class slspCollapseOtherInstController {

	constructor($scope, $compile) {
		this.$scope = $scope
		this.$compile = $compile
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		if (this.parentCtrl.serviceMode !== 'howovp') {
			this.parentCtrl.isCollapsed = true
		}
		else {
			this.parentCtrl.isCollapsed = false
			if (this.parentCtrl.availabilityType == 'P') {
				this.noItemAtPickupLocation = noItemAtPickupLocation
				let noItemAtPickupLocation = document.querySelectorAll(`prm-alma-other-members[ng-if="$ctrl.ifShowOther('P')"]`)
				let htmlnoItemAtPickupLocation = `<div class="bar alert-bar zero-margin-bottom layout-align-center-center layout-row"><span class="center" translate="customized.alert.nolocations">​</span></div>`
				angular.element(noItemAtPickupLocation).prepend(this.$compile(htmlnoItemAtPickupLocation)(this.$scope)).addClass('noItemAtPickupLocation')
			}
		}
	}
}

slspCollapseOtherInstController.$inject = ['$scope', '$compile']
