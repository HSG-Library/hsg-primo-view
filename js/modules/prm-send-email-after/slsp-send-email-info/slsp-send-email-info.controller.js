export class slspSendEmailInfoController {

	constructor($scope, $compile) {
		this.$scope = $scope
		this.$compile = $compile
		this.sendEmailInfoLabel = '<div class="send-email-info-box"><span translate="customized.email.infobox"></span></div>'
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl

		let sendEmailForm = angular.element(document.querySelectorAll(`form[name="emailForm"]`))

		if (sendEmailForm && !sendEmailForm.html().includes('customized.email.infobox')) {
			let compiledHtml = this.$compile(this.sendEmailInfoLabel)(this.$scope)
			sendEmailForm.prepend(compiledHtml)
		}
	}
}

slspSendEmailInfoController.$inject = ['$scope', '$compile']
