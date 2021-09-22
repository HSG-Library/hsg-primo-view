export class hsgStackMapLinkController {
	constructor($element) {
		this.$element = $element;
	}

	$onInit() {
		this.$element.parent().parent().children().attr('target', '_self')
	}
}

hsgStackMapLinkController.$inject = ['$element'];
