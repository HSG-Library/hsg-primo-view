export class hsgReadingRoomInfoController {

	constructor($element, $scope, hsgReadingRoomInfoService) {
		this.$element = $element
		this.$scope = $scope
		this.readingRoomInfoService = hsgReadingRoomInfoService
		this.form = $element[0].parentElement.parentElement
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.displayReadingRoomInfo
	}

	$onInit() {
		this.displayReadingRoomInfo = false
		if (this.readingRoomInfoService.shouldCheckForReadingRoom()) {
			this.readingRoomInfoService.hasReadingRoomItem(this.$scope)
				.then((hasItem) => {
					console.log("readingroom:", hasItem)
					if (hasItem) {
						this.displayReadingRoomInfo = true
					}
				})
		}
	}

	$doCheck() {
		let form = false
		if (this.form.children[1].children[1] !== undefined &&
			this.form.children[1].children[1].children[0] !== undefined) {
			form = this.form.children[1].children[1].children[0]
		}
		else if (this.form.children[1].children[0] !== undefined &&
			this.form.children[1].children[0].children[0] !== undefined) {
			form = this.form.children[1].children[0].children[0]
		}

		if (form && this.displayReadingRoomInfo && !form.querySelector(".unisg-alert")) {
			let readingInfo = document.createElement('DIV')
			readingInfo.className = "unisg-alert unisg-no-margin"
			readingInfo.innerHTML = `
                    <span onclick="this.parentElement.style.display='none'" class="unisg-alert-close">
                        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="close">
                            <md-icon md-svg-icon="primo-ui:close" role="presentation" class="md-primoExplore-theme">
                                <svg id="close_cache150" width="100%" height="100%" viewBox="0 0 24 24" y="240" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                                </svg>
                            </md-icon>
                        </prm-icon>
                    </span>
                    <p>
                        ${this.parentCtrl.$translate.instant('customize.fullview.readingRoomAvailableText')}
                    </p>
                    `
			form.insertBefore(readingInfo, form.firstChild)
		}
	}
}

hsgReadingRoomInfoController.$inject = ['$element', '$scope', 'hsgReadingRoomInfoService']
