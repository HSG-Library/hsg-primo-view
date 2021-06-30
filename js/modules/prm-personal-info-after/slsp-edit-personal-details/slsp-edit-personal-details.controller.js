export class slspEditPersonalDetailsController {

	constructor() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.detailsBaseEdu = "https:\/\/eduid.ch";
		this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card\/";
		this.exclude = ['STAFF', '11', '12', '13', '14', '15', '16', '91', '92', '99'];
		this.grpA = ['11', '91', '92'];
		this.grpB = ['12', '13', '14', '15', '16'];
	}

	getPatronGrp() {
		if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
			let patron = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
			if (!this.exclude.includes(patron)) {
				return true;
			}
			else {
				return false;
			}
		}
		return false;
	}

	grpLabelA() {
		if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
			let labelA = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
			if (this.grpA.includes(labelA)) {
				return true;
			}
			else {
				return false;
			}
		}
		return false;
	}

	grpLabelB() {
		if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
			let labelB = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode;
			if (this.grpB.includes(labelB)) {
				return true;
			}
			else {
				return false;
			}
		}
		return false;
	}
}