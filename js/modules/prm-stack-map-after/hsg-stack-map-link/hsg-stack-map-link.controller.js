export class hsgStackMapLinkController {
	constructor($element, $mdDialog, $mdMedia) {
		this.$element = $element;
		this.$mdDialog = $mdDialog;
		this.$mdMedia = $mdMedia;
	}

	$onInit() {
		let link = this.$element.parent().parent().children();
		let that = this;
		link.bind('click', function (e) {
			e.preventDefault();
			that.showDialog(that);
		});
	}

	showDialog(ctx) {
		let dialogConfig = {
			template: ctx.getTemplate(ctx),
			controller: 'hsgStackMapLinkDialogController',
			controllerAs: 'dialog',
			ariaLabel: 'MediaScout',
			clickOutsideToClose: true,
			multiple: 'true',
			fullscreen: ctx.$mdMedia('xs')
		}
		ctx.$mdDialog.show(dialogConfig);
	}

	getTemplate(ctx) {
		let href = ctx.$element.parent().parent().children().attr('href');
		href = this.secureLink(href);
		debugger;
		return `
		<md-dialog style="display: flex; flex-direction: column; height: 100%; width: 100%;overflow:scroll;" md-theme="primoExplore" aria-label="MediaScout" ng-class="dialog.css" class="_md md-primoExplore-theme md-content-overflow md-transition-in" role="dialog">
			<md-dialog-content style="display: flex; flex-grow: 1;" class="md-dialog-content" role="document">
				<iframe src="${href}" frameborder="0" allowfullscreen style="flex-grow: 1;" align="center"></iframe>
			</md-dialog-content>
			<md-dialog-actions>
			<button onfocus="blur()" class="md-cancel-button md-button md-primoExplore-theme" type="button" ng-click="dialog.hide()">
				<md-icon md-svg-icon="primo-ui:close" role="presentation" class="md-primoExplore-theme"></md-icon>
			</button>
			</md-dialog-actions>
		</md-dialog>	
		`;
	}

	secureLink(href) {
		return href.replace('http:', 'https:');
	}
}

hsgStackMapLinkController.$inject = ['$element', '$mdDialog', '$mdMedia'];


export class hsgStackMapLinkDialogController {

	constructor($mdDialog) {
		this.$mdDialog = $mdDialog;
	}

	abort() {
		return this.$mdDialog.cancel();
	}

	hide() {
		return this.$mdDialog.hide();
	}
}

hsgStackMapLinkDialogController.$inject = ['$mdDialog'];
