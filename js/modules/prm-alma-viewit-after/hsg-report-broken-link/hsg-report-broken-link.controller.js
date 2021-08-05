export class hsgReportBrokenLinkController {

	constructor($mdDialog, $http, hsgTranslatorService, hsgUserService, hsgReportBrokenLinkConfig) {
		this.$mdDialog = $mdDialog;
		this.$http = $http;
		this.config = hsgReportBrokenLinkConfig;
		this.translator = hsgTranslatorService;
		this.hsgUserService = hsgUserService;

		this.status = '';
		this.errorMessage;
		this.sent = false;
		this.info = new LinkInfo();
		this.parentCtrl = this.afterCtrl.parentCtrl;
	}

	$onInit() {
		this.sent = false;
		// not for open access
		if (this.parentCtrl.item.pnx.addata.openaccess && this.parentCtrl.item.pnx.addata.openaccess[0] === 'true') {
			return;
		}
		// not for cdi open access
		if (this.parentCtrl.item.pnx.addata.oa && this.parentCtrl.item.pnx.addata.oa[0] === 'free_for_read') {
			return;
		}
	}

	collectInfo() {
		let display = this.parentCtrl.item.pnx.display;
		this.info.mmsId = this.parentCtrl.item.pnx.control.recordid[0];
		this.info.title = this.getTitle(display);
		this.info.creationdate = this.getCreationdate(display);
		this.info.creator = this.getCreator(display);
		this.info.type = this.getType(display);
		this.info.identifier = this.getIdentifier(display);
		this.info.reportDate = new Date(Date.now()).toLocaleDateString() + ' ' + new Date(Date.now()).toLocaleTimeString();
		this.info.onCampus = this.hsgUserService.isOnCampus();
		this.info.userAgent = navigator.userAgent;
		this.info.url = window.location.href;
	}

	getStatus() {
		return this.status;
	}

	getTitle(display) {
		if (display.title && display.title.length > 0) {
			return display.title[0];
		}
		return '';
	}

	getCreationdate(display) {
		if (display.creationdate && display.creationdate.length > 0) {
			return display.creationdate[0];
		}
		return '';
	}

	getCreator(display) {
		if (display.creator && display.creator.length > 0) {
			return display.creator.join(', ');
		}
		return '';
	}

	getType(display) {
		if (display.type && display.type.length > 0) {
			return display.type[0];
		}
		return '';
	}

	getIdentifier(display) {
		if (display.identifier && display.identifier.length > 0) {
			let ident = display.identifier[0];
			if (ident.indexOf('<b>ISBN') > -1) {
				return display.identifier.join(', ').replace(/<\/b>/g, '').replace(/<b>/g, '');
			}
			else if (ident.indexOf('<b>ISSN') > -1) {
				return display.identifier.join(', ').replace(/<\/b>/g, '').replace(/<b>/g, '');
			}
			else if (ident.indexOf('ISBN') > -1) {
				return 'ISBN: ' + ident.substring(ident.indexOf('$$V') + 3);
			}
			else if (ident.indexOf('ISSN') > -1) {
				return 'ISSN: ' + ident.substring(ident.indexOf('$$V') + 3);
			}
		}
		return '';
	}

	getStatus() {
		return this.status;
	}

	reportLink(event) {
		this.collectInfo();
		if (this.sent) {
			return;
		}
		let that = this;
		let confirm = this.$mdDialog.prompt()
			.title(this.translate('popupTitle'))
			.htmlContent(this.getInfoText())
			.ariaLabel('report broken link')
			.targetEvent(event)
			.placeholder(this.translate('commentLabel'))
			.ok(this.translate('okLabel'))
			.cancel(this.translate('cancelLabel'))
			.multiple('true');

		this.$mdDialog.show(confirm)
			.then(function (comment) { // send
				that.info.comment = comment;
				that.$http.post(
					that.config.reportEndpoint,
					that.info,
					{
						'headers': {
							'Content-Type': 'application/json'
						}
					}
				).then(
					function (success) {
						console.info(success);
						that.status = '✓';
						that.sent = true;
					},
					function (error) {
						console.error(error);
						that.status = '✗';
						that.errorMessage = `${this.translate('errorMessage')} (${error.data.error.message})`
					}
				);
			}, function () { // cancel
				that.status = '';
			});
	}

	getInfoText() {
		return `
<dl class="hsg-broken-link-info-list">
	<dt>Report Date</dt><dd>${this.info.reportDate}</dd>
	<dt>Title</dt><dd>${this.info.title}</dd>
	<dt>Creator</dt><dd>${this.info.creator}</dd>
	<dt>Creation Date</dt><dd>${this.info.creationdate}</dd>
	<dt>Type</dt><dd>${this.info.type}</dd>
	<dt>MMS-ID</dt><dd>${this.info.mmsId}</dd>
	<dt>Identifier</dt><dd>${this.info.identifier}</dd>
	<dt>Package Names</dt><dd>${this.info.packageNames}</dd>
	<dt>On Campus</dt><dd>${this.info.onCampus}</dd>
	<dt>User Agent</dt><dd>${this.info.userAgent}</dd>
	<dt>URL</dt><dd>${this.info.url}</dd>
</dl>
`;
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing");
			return;
		}
		return this.translator.getLabel(key, this.config);
	}
}

hsgReportBrokenLinkController.$inject = ['$mdDialog', '$http', 'hsgTranslatorService', 'hsgUserService', 'hsgReportBrokenLinkConfig'];


class LinkInfo {
	constructor() {
		this.reportDate;
		this.title;
		this.creator
		this.creationdate;
		this.type;
		this.mmsId;
		this.identifier;
		this.onCampus;
		this.userAgent;
		this.url;
		this.comment;
	}
}
