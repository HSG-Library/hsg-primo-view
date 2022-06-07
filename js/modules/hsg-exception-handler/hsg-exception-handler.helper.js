export const hsgExceptionHandlerHelper = ['$injector', function ($injector) {

	this.reportError = function (exception, cause) {
		return
		// proof of concept, don't sent error reports yet.
		// the reports must be aggregated first

		// let $http = $injector.get('$http');
		// $http.post(
		// 	'https://prod-251.westeurope.logic.azure.com:443/workflows/faeacfb45cb5492bb70f056746922a36/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wPY0wg5dstRNa3Tv1gzHVZlr7iNxgnRu14ERtWc4cOo',
		// 	{
		// 		"date": new Date(Date.now()).toDateString(),
		// 		"time": new Date(Date.now()).toTimeString(),
		// 		"exception": {
		// 			"message": exception.message,
		// 			"stack": exception.stack
		// 		},
		// 		"cause": cause
		// 	}
		// ).then(
		// 	function (success) {
		// 		console.info('error reported', success);
		// 	},
		// 	function (error) {
		// 		console.error('could not report error', error);
		// 	}
		// );
	}

	this.isFromHandler = function (exception) {
		if (typeof exception !== "object") {
			return false
		}
		let stack = exception.stack
		return stack && stack.indexOf('hsgExceptionHandler') > -1
	}

	this.isFromCustomCode = function (exception) {
		if (typeof exception !== "object") {
			return false
		}
		let stack = exception.stack
		return stack && stack.indexOf('custom.js') > -1
	}

	return {
		reportError: this.reportError,
		isFromHandler: this.isFromHandler,
		isFromCustomCode: this.isFromCustomCode
	}

}]
