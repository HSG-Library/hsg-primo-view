export class hsgCollectionsShowAuthorController {

	constructor($element, $scope) {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.$element = $element
		this.$scope = $scope
		this.waiting = true
	}

	$onInit() {
		if (!this.hasAuthorInfo()) {
			return
		}
		const author = this.parentCtrl.item.pnx.addata.au[0] || ''
		const that = this
		const deregister = this.$scope.$watch(
			function () {
				return that.$element.parent().parent().query('.item-title')[0]
			},
			function (newValue, oldValue) {
				if (that.waiting && typeof newValue === "object") {
					that.waiting = false
					that.placeAuthor(newValue, author)
					deregister()
				}
			}
		)
	}

	placeAuthor(itemTitleElement, author) {
		itemTitleElement.insertAdjacentHTML('beforeEnd', " <br><br>" + author)
	}

	hasAuthorInfo() {
		try {
			this.parentCtrl.item.pnx.addata.au[0]
			return true
		} catch (e) {
			return false
		}
	}
}

hsgCollectionsShowAuthorController.$inject = ['$element', '$scope']
