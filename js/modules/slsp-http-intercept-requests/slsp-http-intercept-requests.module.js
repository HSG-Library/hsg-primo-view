import { slspHttpInterceptRequestsConfig } from "./slsp-http-intercept-requests.config";

export const slspHttpInterceptRequestsModule = angular
	.module('slspHttpInterceptRequestsModule', ['ng'])
	.config(slspHttpInterceptRequestsConfig);