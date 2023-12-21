export class slspCugPolicyController {
	constructor($scope) {
		this.$scope = $scope
	}

	$doCheck() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		let userGroup = this.parentCtrl.userSessionManagerService.jwtUtilService.getDecodedToken().userGroup

		for (let i = 0; i < this.parentCtrl.loc.items.length; i++) {
			if (['GUEST', '01', '02', '03', '04', '05', '06', '11', '12', '13', '14', '15', '16', '17', '18', '91', '92', '98', '99', 'STAFF'].includes(userGroup)) {
				this.parentCtrl.loc.items[i].itemFields[1] = ""
			} else if (this.parentCtrl.loc.items[i].itemFields[1].trim() !== "") {
				this.parentCtrl.loc.items[i].itemFields[3] = ""
			}
		}
	}
}

slspCugPolicyController.$inject = ['$scope']
