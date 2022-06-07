
export class hsgAlertMessageController {

	constructor($http, $sce, hsgTranslatorService, hsgAlertMessageConfig) {
		this.$http = $http
		this.$sce = $sce
		this.translator = hsgTranslatorService
		this.config = hsgAlertMessageConfig
		this.showMessage = false
		this.showMessageClass = 'unisg-alert-hidden'
		this.message = ''
		this.htmlMessage
		this.fetchMessage()
	}

	fetchMessage() {
		let url = this.config.messageUrl
		let requestBody = {
			lang: this.translator.getLang()
		}
		let that = this
		this.$http.post(
			url,
			requestBody
		).then(
			function (successResponse) {
				that.showMessage = false
				that.message = successResponse.data
				if (that.message && !/^\s+$/.test(that.message)) {
					that.htmlMessage = that.renderHtml(that.message)
					that.showMessage = true
					that.showMessageClass = 'unisg-alert-voila'
					return
				}
				that.showMessage = false
				that.showMessageClass = 'unisg-alert-hidden'
			},
			function (errorResponse) {
				that.showMessage = false
				let code = errorResponse.data.error.code
				let errorMessage = errorResponse.data.error.message
				throw new Error("Could not retrieve hsg alert message from '" + url + "'. Error: '" + code + "', '" + errorMessage + "'")
			}
		)
	}

	renderHtml(value) {
		return this.$sce.trustAsHtml(value)
	};
}

hsgAlertMessageController.$inject = ['$http', '$sce', 'hsgTranslatorService', 'hsgAlertMessageConfig']
