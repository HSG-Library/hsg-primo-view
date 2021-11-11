export class slspRenewItemTextController {

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl;
		this.getRenewText = getRenewText;

		function getRenewText() {
			if (this.parentCtrl.item.renewstatuses !== undefined && this.parentCtrl.item.renewstatuses.renewstatus[0] !== undefined) {
				return this.parentCtrl.item.renewstatuses.renewstatus[0];
			}
			else {
				return;
			}
		}
	}
}
