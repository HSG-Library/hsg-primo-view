export class slspCitationSelectController {

	constructor($scope, $timeout, $compile) {
		this.$scope = $scope
		this.$timeout = $timeout
		this.$compile = $compile
	}

	$onInit() {
		this.$timeout(() => {
			this.parentCtrl = this.afterCtrl.parentCtrl

			let citationSelectRadio = '<div class="md-container slsp-citation-select"><div class="md-off"></div><div class="md-on"></div></div>'

			let citationSelectList = document.querySelectorAll('prm-citation ul li button')

			angular.forEach(citationSelectList, (citationSelect) => {
				angular.element(citationSelect).append(this.$compile(citationSelectRadio)(this.$scope)).addClass('slsp-citation-select-radio')
			})
		}, 0)
	}
}

slspCitationSelectController.$inject = ['$scope', '$timeout', '$compile']
