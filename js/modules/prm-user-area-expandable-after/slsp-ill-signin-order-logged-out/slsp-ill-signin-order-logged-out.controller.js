export class slspIllSigninOrderLoggedOutController {

	constructor($scope, hsgUserService) {
		this.$scope = $scope
		this.userService = hsgUserService
	}

	$onInit() {
		this.$scope.usrNme = this.userService.isGuest()

		if (this.$scope.usrNme == true) {
			var myEl = angular.element(document.querySelector('primo-explore'))
			return myEl.addClass('logged-out')
		}

		else {
			var myEl = angular.element(document.querySelector('primo-explore'))
			return myEl.removeClass('logged-out')
		}
	}

}

slspIllSigninOrderLoggedOutController.$inject = ['$scope', 'hsgUserService']
