
export class hsgAlertMessageController {

	constructor($http, hsgTranslatorService, hsgAlertMessageConfig) {
		this.$http = $http;
		this.translator = hsgTranslatorService;
		this.config = hsgAlertMessageConfig;
		this.showMessage = false;
		this.message = '';
		this.fetchMessage();
	}

	fetchMessage() {
		let url = this.config.messageUrl;
		let requestBody = {
			lang: this.translator.getLang()
		};
		let that = this;
		this.$http.post(
			url,
			requestBody
		).then(
			function (successResponse) {
				that.showMessage = false;
				that.message = successResponse.data;
				if (that.message && !/^\s+$/.test(that.message)) {
					that.showMessage = true;
					document.documentElement.style.setProperty('--alert-message', `"${that.message}"`);
					return;
				}
				that.showMessage = false;
				document.documentElement.style.setProperty('--alert-message', '');
			},
			function (errorResponse) {
				that.showMessage = false;
				let code = errorResponse.data.error.code;
				let errorMessage = errorResponse.data.error.message;
				throw new Error("Could not retrieve hsg alert message from '" + url + "'. Error: '" + code + "', '" + errorMessage + "'");
			}
		);
	}
}

hsgAlertMessageController.$inject = ['$http', 'hsgTranslatorService', 'hsgAlertMessageConfig'];
