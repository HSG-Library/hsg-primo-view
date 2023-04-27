export class hsgHomeController {

	constructor(hsgOnCampusService) {
		this.onCampusService = hsgOnCampusService
	}

	$onInit() {
		this.check()
	}

	check() {
		this.onCampusService.getIpAndCheck()
	}

	isOnCampus() {
		return this.onCampusService.isOnCampus()
	}

	isCheckDone() {
		return this.onCampusService.isCheckDone()
	}
}

hsgHomeController.$inject = ['hsgOnCampusService']
