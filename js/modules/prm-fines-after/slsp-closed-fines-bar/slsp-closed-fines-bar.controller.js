export class slspClosedFinesBarController {
	constructor($scope) {
		this.$scope = $scope;
		this.showClosedFines = false;
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
	}

	$doCheck() {
		// Check if the conditions for showing the HTML code are met
		if (this.parentCtrl.finesTypeDropDownSelection === 'closed' || this.parentCtrl.finesTypeDropDownSelection === 'all') {
			const currentFinesArray = this.parentCtrl.totalNumOfFines;
			if (angular.isArray(currentFinesArray) && currentFinesArray.length > 0) {
				this.showClosedFines = true;
			} else {
				this.showClosedFines = false;
			}
		} else {
			this.showClosedFines = false;
		}

		// Perform the word replacement independently
		const currentFinesArray = this.parentCtrl.totalNumOfFines;
		if (angular.isArray(currentFinesArray) && currentFinesArray.length > 0) {
			angular.forEach(currentFinesArray, (fine) => {
				if (fine.fineType === 'CLOSED') {
					if (!fine.firstWordRemoved) {
						// Replace the first 2 words in the line right text with the fine data
						let fineData = fine.expandedDisplay[0].data;
						let firstLineRightText = fine.firstLineRight;
						const words = firstLineRightText.split(/\s+/);
						words.splice(0, 2);
						words.unshift(fineData);
						fine.firstLineRight = words.join(' ');
						fine.firstWordRemoved = true;
					}
				}
			});
		}
	}
}

slspClosedFinesBarController.$inject = ['$scope'];
