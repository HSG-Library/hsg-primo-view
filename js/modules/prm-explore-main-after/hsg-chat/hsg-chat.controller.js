export class hsgChatController {

	constructor($sce, $document, $window) {
		this.$sce = $sce
		this.$document = $document
		this.$window = $window
	}

	$onInit() {
		let protocol = this.$window.location.protocol
		let scriptSrc = (protocol === "https:" ? "https://" : "http://") + "eu.libraryh3lp.com/js/libraryh3lp.js?1544"

		this.$sce.trustAsResourceUrl(scriptSrc)

		console.log('append!')
		let script = angular.element('<script/>')
		script.attr('async', true)
		script.attr('src', scriptSrc)
		angular.element(document.getElementsByTagName('body')).append(script)
	}
}

hsgChatController.$inject = ['$sce', '$document', '$window']
