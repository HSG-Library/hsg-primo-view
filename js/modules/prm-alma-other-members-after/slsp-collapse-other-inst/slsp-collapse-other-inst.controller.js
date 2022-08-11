export class slspCollapseOtherInstController {
	constructor() { }

	$onInit() {
		this.parentCtrl = this.afterCtrl.parentCtrl
		this.parentCtrl.isCollapsed = true
	}
}
