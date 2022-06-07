import { hsgExceptionHandler } from './hsg-exception-handler'
import { hsgExceptionHandlerHelper } from './hsg-exception-handler.helper'

export const hsgExceptionHandlerModule = angular
	.module('hsgExceptionHandlerModule', [])
	.factory('hsgExceptionHandlerHelper', hsgExceptionHandlerHelper)
	.factory('$exceptionHandler', hsgExceptionHandler)
