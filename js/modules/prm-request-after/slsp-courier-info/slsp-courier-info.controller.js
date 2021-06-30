export class slspCourierInfoController {

	constructor($element) {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.$element = $element;
		this.form = $element[0].parentElement.parentElement;
	}

	//function for inserting block
	$doCheck() {
		let form = false;
		if (this.form.children[1].children[1] !== undefined &&
			this.form.children[1].children[1].children[0] !== undefined) {
			form = this.form.children[1].children[1].children[0];
		}
		else if (this.form.children[1].children[0] !== undefined &&
			this.form.children[1].children[0].children[0] !== undefined) {
			form = this.form.children[1].children[0].children[0];
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
