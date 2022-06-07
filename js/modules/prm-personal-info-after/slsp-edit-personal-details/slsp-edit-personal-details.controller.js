export class slspEditPersonalDetailsController {

	constructor(hsgTranslatorService) {
		let lang = hsgTranslatorService.getLang()
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.detailsBaseEdu = "https:\/\/eduid.ch\/web\/change-account-data\/2\/?lang=" + lang
		this.detailsBaseReg = "https:\/\/registration.slsp.ch\/library-card\/?lang=" + lang
		this.exclude = ['STAFF', '11', '12', '13', '14', '15', '16', '91', '92', '99']
		this.grpA = ['11', '91', '92']
		this.grpB = ['12', '13', '14', '15', '16']
	}

	getPatronGrp() {
		if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
			let patron = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode
			if (!this.exclude.includes(patron)) {
				return true
			}
			else {
				return false
			}
		}
		return false
	}

	grpLabelA() {
		if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
			let labelA = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode
			if (this.grpA.includes(labelA)) {
				return true
			}
			else {
				return false
			}
		}
		return false
	}

	grpLabelB() {
		if (this.parentCtrl.personalInfoService.personalInfo !== undefined) {
			let labelB = this.parentCtrl.personalInfoService.personalInfo.patronstatus[0].registration[0].institution[0].patronstatuscode
			if (this.grpB.includes(labelB)) {
				return true
			}
			else {
				return false
			}
		}
		return false
	}

	buttonMove() {
		let parentElement = angular.element(document.querySelector('prm-personal-info > div.layout-wrap.layout-align-center-start.layout-row > md-card:nth-child(2)'))
		let element = angular.element(document.querySelector('#SLSPeditPersonalDetails'))
		parentElement.append(element)
	}
}
slspEditPersonalDetailsController.$inject = ['hsgTranslatorService']
