export class slspIconLabelOtherUnitsController {

	constructor($scope, $compile, $timeout) {
		this.$scope = $scope
		this.$compile = $compile
		this.$timeout = $timeout
	}

	$onInit() {
		this.$timeout(() => {
			this.parentCtrl = this.afterCtrl.parentCtrl

			let iconLabelOtherUnitsE = document.querySelectorAll(`prm-alma-other-units md-content md-list.md-primoExplore-theme`)
			let htmlOtherUnitsE = `
			<div class="icnWrp">
				<div class="iconDiv">
					<svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" width="100%" height="100%" viewBox="0 0 185 185"><g id="System_icons"><g><rect width="185" height="185" fill="none" opacity=".2"/><g id="Outline_Icons"><g><path d="M155.98,92.26c0,35.19-28.5,63.72-63.66,63.72-35.16,0-63.3-29.68-63.3-64.87S55.9,30.44,89.77,29.08c.92-.04,1.83-.06,2.76-.06,35.16,0,63.45,28.05,63.45,63.24Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><path d="M89.77,29.08c-33.12,35.88-33.12,82.69,0,126.85" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><path d="M95.29,29.08c33.12,35.88,33.12,82.67,0,126.83" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><line x1="39.43" y1="56.62" x2="145.06" y2="56.62" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><line x1="29.04" y1="89.74" x2="155.98" y2="89.74" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/><line x1="37.22" y1="122.86" x2="148.17" y2="122.86" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="6"/></g></g></g></g></svg>
				</div>
				<div class="iconLabel" translate="customized.fee.online"></div>
			</div>`

			angular.element(iconLabelOtherUnitsE).prepend(this.$compile(htmlOtherUnitsE)(this.$scope)).addClass('icnLblOtherUnitsE')

			//not collapsed by default
			this.parentCtrl.isCollapsed = false
		}, 0)
	}
}

slspIconLabelOtherUnitsController.$inject = ['$scope', '$compile', '$timeout']
