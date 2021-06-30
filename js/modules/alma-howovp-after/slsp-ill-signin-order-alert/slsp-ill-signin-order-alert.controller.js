export class slspIllSigninOrderAlertController {

	constructor() {
		this.vm = this.afterCtrl;
	}

	getAlert() {
		var ga = this.vm.parentCtrl.almaHowToGetitService.reqAlert._htmlMsg;
		var myEl2 = angular.element(document.querySelector('primo-explore'));

		if (ga.length > 0) {
			return myEl2.addClass('alert');
		}
		else {
			return myEl2.removeClass('alert');
		}
	}
}
