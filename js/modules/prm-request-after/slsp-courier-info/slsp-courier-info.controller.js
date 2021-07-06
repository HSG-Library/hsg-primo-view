export class slspCourierInfoController {

	constructor($element) {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.$element = $element;
		this.prmRequestElement = $element[0].parentElement.parentElement;
	}

	//function for inserting block
	$doCheck() {
		let form = false;
		let allForms = this.prmRequestElement.querySelectorAll('form');
		if (allForms) {
			allForms.forEach(f => {
				if (f.length > 0) {
					form = f;
				}
			});
		}
		
		//create and insert info block if not present
		if (form && !form.querySelector('.courier-info') && form.querySelector('.layout-align-end-stretch')) {
			let info = document.createElement('DIV');
			info.className = "courier-info bar alert-bar";
			info.innerHTML = `
                    <h4>${this.parentCtrl.$translate.instant('customize.fullview.feesTitle')}</h4>
                    <p>${this.parentCtrl.$translate.instant('customize.fullview.feesInfo')}</p>
                    <p><a href="${this.parentCtrl.$translate.instant('customize.fullview.feesUrl')}" 
                        target="_blank">${this.parentCtrl.$translate.instant('customize.fullview.feesLinkText')}</a>
                    </p>
                    `;
			form.insertBefore(info, form.querySelector('.layout-align-end-stretch'));
		}
	}
}

slspCourierInfoController.$inject = ['$element'];
