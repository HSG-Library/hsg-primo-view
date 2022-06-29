import { hsgCollectionsShowAuthorController } from './hsg-collections-show-author.controller'

export const hsgCollectionsShowAuthorModule = angular
	.module('hsgCollectionsShowAuthorModule', [])
	.controller('hsgCollectionsShowAuthorController', hsgCollectionsShowAuthorController)
	.component('hsgCollectionsShowAuthorComponent', {
		bindings: { afterCtrl: '<' },
		controller: 'hsgCollectionsShowAuthorController'
	})
