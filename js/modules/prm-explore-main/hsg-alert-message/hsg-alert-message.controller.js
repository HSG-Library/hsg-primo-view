
export class hsgAlertMessageController {

	constructor($http, hsgTranslatorService, hsgAlertMessageConfig) {
		this.$http = $http;
		this.translator = hsgTranslatorService;
		this.config = hsgAlertMessageConfig;
		this.fetchMessage();
	}

	fetchMessage() {
		let url = this.config.messageUrl;
		let requestBody = {
			lang: this.translator.getLang()
		};
		this.$http.post(
			url,
			requestBody
		).then(
			function (successResponse) {
				const message = successResponse.data.trim();
				if (message && !/^\s+$/.test(message)) {
					document.documentElement.style.setProperty('--alert-message', `"${message}"`);
					return;
				}
				document.documentElement.style.setProperty('--alert-message', '');
			},
			function (errorResponse) {
				let code = errorResponse.data.error.code;
				let errorMessage = errorResponse.data.error.message;
				throw new Error("Could not retrieve hsg alert message from '" + url + "'. Error: '" + code + "', '" + errorMessage + "'");
			}
		);
	}
}

hsgAlertMessageController.$inject = ['$http', 'hsgTranslatorService', 'hsgAlertMessageConfig'];
