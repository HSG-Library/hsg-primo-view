export class hsgOffCampusInfoController {

	constructor(hsgOffCampusInfoConfig, hsgOnCampusService, hsgTranslatorService) {
		this.config = hsgOffCampusInfoConfig
		this.onCampusService = hsgOnCampusService
		this.translator = hsgTranslatorService
		this.processDoCheck
		this.deliveryCategory = []
	}

	$onInit() {
		this.processDoCheck = false
		this.deliveryCategory = []
		if (this.afterCtrl.parentCtrl.item.pnx.addata.openaccess && this.afterCtrl.parentCtrl.itm.pnx.addata.openaccess[0] === 'true') {
			return
		}
		let delivery = this.afterCtrl.parentCtrl.item.delivery
		if (delivery && delivery.deliveryCategory && (delivery.deliveryCategory.indexOf('Alma-E') > -1 || delivery.deliveryCategory.indexOf('Remote Search Resource') > -1)) {
			this.deliveryCategory = delivery.deliveryCategory
			this.onCampusService.getIpAndCheck()
			this.processDoCheck = true
		}
	}

	$doCheck() {
		if (!this.processDoCheck) {
			return
		}
		let delivery = this.afterCtrl.parentCtrl.item.delivery
		if (!delivery || !delivery.electronicServices || delivery.electronicServices.length === 0) {
			return
		}
		if (delivery.deliveryCategory.indexOf('Remote Search Resource') > -1 && delivery.electronicServices[0].ilsApiId.indexOf("cdi_") === -1) {
			this.processDoCheck = false
			return
		}
		let filteredElectronicServices = delivery.electronicServices.filter(e => {
			if (e.publicNote && e.publicNote === "Onlinezugriff via World Wide Web") {
				return true
			}
		})
		if (filteredElectronicServices.length > 0) {
			this.processDoCheck = false
			return
		}
		this.processDoCheck = false
	}

	isOffCampus() {
		return !this.onCampusService.isOnCampus()
	}

	translate(key) {
		return this.translator.getLabel(key, this.config)
	}
}

hsgOffCampusInfoController.$inject = ['hsgOffCampusInfoConfig', 'hsgOnCampusService', 'hsgTranslatorService']
