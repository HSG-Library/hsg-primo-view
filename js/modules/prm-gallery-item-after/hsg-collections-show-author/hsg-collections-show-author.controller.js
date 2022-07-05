export class hsgCollectionsShowAuthorController {

	constructor($element, $scope) {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.$element = $element
		this.$scope = $scope
		this.waiting = true
	}

	$onInit() {
		const name = this.getAuthorOrContributor()
		if (!name) {
			return
		}
		const that = this
		const deregister = this.$scope.$watch(
			function () {
				return that.$element.parent().parent().query('.item-title')[0]
			},
			function (newValue, oldValue) {
				if (that.waiting && typeof newValue === "object") {
					that.waiting = false
					that.placeAuthor(newValue, name)
					deregister()
				}
			}
		)
	}

	placeAuthor(itemTitleElement, author) {
		itemTitleElement.insertAdjacentHTML('beforeEnd', ' <br><br><span style="font-weight: normal">' + author + '</span>')
	}

	getAuthorOrContributor() {
		let data = this.parentCtrl.item.pnx.addata
		if (data.au) {
			return data.au.slice(0, 3).join('; ')
		}
		if (data.addau) {
			return data.addau.slice(0, 3).join('; ')
		}
		return
	}
}

hsgCollectionsShowAuthorController.$inject = ['$element', '$scope']
