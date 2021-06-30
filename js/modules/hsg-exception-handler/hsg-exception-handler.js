export const hsgExceptionHandler = ['$log', 'hsgExceptionHandlerHelper', function ($log, hsgExceptionHandlerHelper) {
	return function hsgExceptionHandler(exception, cause) {
		if (!hsgExceptionHandlerHelper.isFromHandler(exception)
			&& hsgExceptionHandlerHelper.isFromCustomCode(exception)) {
			hsgExceptionHandlerHelper.reportError(exception, cause);
			$log.error('**HSG-SWISSCOVERY**', exception, cause);
		} else {
			$log.error(exception, cause);
		}
	}
}];
