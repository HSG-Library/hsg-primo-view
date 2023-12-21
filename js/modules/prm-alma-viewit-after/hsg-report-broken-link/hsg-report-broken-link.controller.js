export class hsgReportBrokenLinkController {

	constructor($mdDialog, $mdMedia, $http, hsgTranslatorService, hsgUserService, hsgReportBrokenLinkConfig) {
		this.$mdDialog = $mdDialog
		this.$mdMedia = $mdMedia
		this.$http = $http
		this.config = hsgReportBrokenLinkConfig
		this.translator = hsgTranslatorService
		this.hsgUserService = hsgUserService

		this.status = ''
		this.errorMessage
		this.info = new LinkInfo()
	}

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		// not for open access
		if (this.parentCtrl.item.pnx.addata.openaccess && this.parentCtrl.item.pnx.addata.openaccess[0] === 'true') {
			return
		}
		// not for cdi open access
		if (this.parentCtrl.item.pnx.addata.oa && this.parentCtrl.item.pnx.addata.oa[0] === 'free_for_read') {
			return
		}
	}

	collectInfo() {
		let display = this.parentCtrl.item.pnx.display
		this.info.mmsId = this.parentCtrl.item.pnx.control.recordid[0]
		this.info.title = this.getTitle(display)
		this.info.creationdate = this.getCreationdate(display)
		this.info.creator = this.getCreator(display)
		this.info.type = this.getType(display)
		this.info.identifier = this.getIdentifier(display)
		this.info.reportDate = new Date(Date.now()).toLocaleDateString() + ' ' + new Date(Date.now()).toLocaleTimeString()
		this.info.onCampus = this.hsgUserService.isOnCampus()
		this.info.userAgent = navigator.userAgent
		this.info.url = window.location.href
	}

	getStatus() {
		return this.status
	}

	getTitle(display) {
		if (display.title && display.title.length > 0) {
			return display.title[0]
		}
		return ''
	}

	getCreationdate(display) {
		if (display.creationdate && display.creationdate.length > 0) {
			return display.creationdate[0]
		}
		return ''
	}

	getCreator(display) {
		if (display.creator && display.creator.length > 0) {
			return display.creator.join(', ')
		}
		return ''
	}

	getType(display) {
		if (display.type && display.type.length > 0) {
			return display.type[0]
		}
		return ''
	}

	getIdentifier(display) {
		if (display.identifier && display.identifier.length > 0) {
			let ident = display.identifier[0]
			if (ident.indexOf('<b>ISBN') > -1) {
				return display.identifier.join(', ').replace(/<\/b>/g, '').replace(/<b>/g, '')
			}
			else if (ident.indexOf('<b>ISSN') > -1) {
				return display.identifier.join(', ').replace(/<\/b>/g, '').replace(/<b>/g, '')
			}
			else if (ident.indexOf('ISBN') > -1) {
				return 'ISBN: ' + ident.substring(ident.indexOf('$$V') + 3)
			}
			else if (ident.indexOf('ISSN') > -1) {
				return 'ISSN: ' + ident.substring(ident.indexOf('$$V') + 3)
			}
		}
		return ''
	}

	getStatus() {
		return this.status
	}

	reportLink(event) {
		this.collectInfo()
		let that = this

		let dialogConfig = {
			template: this.getTemplate(),
			controller: 'hsgReportBrokenLinkDialogController',
			controllerAs: 'dialog',
			ariaLabel: 'report broken link',
			targetEvent: event,
			multiple: 'true',
			fullscreen: this.$mdMedia('xs')
		}

		this.mainDialog = this.$mdDialog.show(dialogConfig)
			.then(function (dialogModel) { // send
				that.info.comment = dialogModel.comment + " " || ''
				if (dialogModel.contact) {
					that.info.comment += dialogModel.contact
				}
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
						console.info(success)
						that.status = '✓'
					},
					function (error) {
						console.error(error)
						that.status = '✗'
						that.errorMessage = `${this.translate('errorMessage')} (${error.data.error.message})`
					}
				)
			}, function () { // cancel
				that.status = ''
			})
	}

	getTemplate() {
		return `
		<md-dialog md-theme="primoExplore" aria-label="report broken link" ng-class="dialog.css" class="_md md-primoExplore-theme md-content-overflow md-transition-in hsg-report-broken-link-dialog" role="dialog">
		<hsg-off-campus-info-component class="hsg-broken-link-off-campus" after-ctrl=$ctrl></hsg-off-campus-info-component>
		<form name="form">
		<md-dialog-content class="md-dialog-content" role="document" tabindex="-1">
			<h2 class="md-title">${this.translate('popupTitle')}</h2>
			<br>
			<div class="md-dialog-content-body">
				<div>
					<div flex="">
						<md-input-container class="md-prompt-input-container md-primoExplore-theme">
							<label style="font-weight: bold">${this.translate('commentLabel')}</label>
							<md-icon md-svg-icon="primo-actions:citation" class="md-primoExplore-theme"></md-icon>
							<input md-autofocus="true" ng-model="dialog.result.comment" placeholder="&#8230;">
						</md-input-container>
					</div>
					<div flex="">
						<md-input-container class="md-prompt-input-container md-primoExplore-theme">
							<label style="font-weight: bold">${this.translate('contactLabel')}</label>
							<md-icon md-svg-icon="primo-actions:email" class="md-primoExplore-theme"></md-icon>
							<input name="contact" type="email" ng-model="dialog.result.contact" placeholder="name@email.com">
						</md-input-container>
					</div>
				</div>
				<p>${this.translate('popupInfo')}</p>
				<details>
					<summary>Details</summary>
					<dl class="hsg-broken-link-info-list">
						<dt>Report Date</dt><dd>${this.info.reportDate}</dd>
						<dt>Title</dt><dd>${this.info.title}</dd>
						<dt>Creator</dt><dd>${this.info.creator}</dd>
						<dt>Creation Date</dt><dd>${this.info.creationdate}</dd>
						<dt>Type</dt><dd>${this.info.type}</dd>
						<dt>MMS-ID</dt><dd>${this.info.mmsId}</dd>
						<dt>Identifier</dt><dd>${this.info.identifier}</dd>
						<dt>On Campus</dt><dd>${this.info.onCampus}</dd>
						<dt>User Agent</dt><dd>${this.info.userAgent}</dd>
						<dt>URL</dt><dd>${this.info.url}</dd>
					</dl>
				</details>
			</div>
		</md-dialog-content>
		<md-dialog-actions>
			<button class="md-primary md-cancel-button md-button md-primoExplore-theme md-ink-ripple" type="button" ng-click="dialog.abort()">
				${this.translate('cancelLabel')}
			</button>
			<button class="md-primary md-confirm-button md-button md-ink-ripple md-primoExplore-theme" type="button" ng-click="dialog.hide()">
				${this.translate('okLabel')}
			</button>
		</md-dialog-actions>
		</from>
		</md-dialog>
		`
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return
		}
		return this.translator.getLabel(key, this.config)
	}
}

hsgReportBrokenLinkController.$inject = ['$mdDialog', '$mdMedia', '$http', 'hsgTranslatorService', 'hsgUserService', 'hsgReportBrokenLinkConfig']

export class hsgReportBrokenLinkDialogController {

	constructor($mdDialog, hsgTranslatorService, hsgReportBrokenLinkConfig) {
		this.$mdDialog = $mdDialog
		this.config = hsgReportBrokenLinkConfig
		this.translator = hsgTranslatorService
		this.result = {}
	}

	abort() {
		return this.$mdDialog.cancel()
	}

	hide() {
		if (this.result.contact) {
			console.log(this.result)
			return this.$mdDialog.hide(this.result)
		} else {
			let confirm = this.$mdDialog.confirm()
				.htmlContent(this.translate('noContactMessage'))
				.ok(this.translate('okAnywayLabel'))
				.cancel(this.translate('cancelLabel'))
				.multiple('true')
			const that = this
			this.$mdDialog.show(confirm).then(
				//ok
				function () {

					console.log('that.result', that.result)
					that.$mdDialog.hide(that.result)
					console.log('ok!')
				},
				// cancel
				function () {
					console.log('cancel')
				})
		}
	}

	translate(key) {
		if (!this.config) {
			console.log("config missing")
			return
		}
		return this.translator.getLabel(key, this.config)
	}
}

hsgReportBrokenLinkDialogController.$inject = ['$mdDialog', 'hsgTranslatorService', 'hsgReportBrokenLinkConfig']


class LinkInfo {
	constructor() {
		this.reportDate
		this.title
		this.creator
		this.creationdate
		this.type
		this.mmsId
		this.identifier
		this.onCampus
		this.userAgent
		this.url
		this.comment
	}
}
