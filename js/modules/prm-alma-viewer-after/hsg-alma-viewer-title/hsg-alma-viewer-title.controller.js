
export class hsgAlmaViewerTitleController {

	constructor($scope) {
		this.$scope = $scope
	}

	$onInit() {
		this.ctrl = this.afterCtrl.parentCtrl
		this.titleElement = document.getElementById('primoExploreTitle')
		if (this.deregister) {
			this.deregister()
		}
		this.customTitle = null
		this.disTitle = null
		this.fileName = null
	}

	$doCheck() {
		const data = this.ctrl._data
		if (data && !this.gotLabel) {
			this.disTitle = data.label
			this.gotLabel = this.disTitle
		}
		const fileNameElement = document.getElementById('file_label_0')
		if (this.disTitle && fileNameElement && !this.gotFileName) {
			this.fileName = fileNameElement.getAttribute('title')
			this.gotFileName = this.fileName
			this.customTitle = this.disTitle + ' - ' + this.fileName
			this.deregister = this.registerWatcher()
		}
	}

	registerWatcher() {
		const that = this
		return this.$scope.$watch(
			function () {
				return that.titleElement.textContent
			},
			function (newValue, oldValue) {
				if (newValue !== that.customTitle) {
					that.titleElement.textContent = that.customTitle
				}
			}
		)
	}
}

hsgAlmaViewerTitleController.$inject = ['$scope']
