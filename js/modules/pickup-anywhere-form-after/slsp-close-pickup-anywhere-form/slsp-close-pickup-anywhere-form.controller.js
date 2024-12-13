export class slspClosePickupAnywhereFormController {
  constructor() {
    this.parentCtrl = null;
  }

  $onInit() {
    this.parentCtrl = this.afterCtrl.parentCtrl;
  }

  closePickupAnywhereForm() {
    if (this.parentCtrl) {
      this.parentCtrl.hidePickupAnywhereForm.emit();
    } else {
      console.error("slspClosePickupAnywhereFormController");
    }
  }
}

slspClosePickupAnywhereFormController.$inject = [];