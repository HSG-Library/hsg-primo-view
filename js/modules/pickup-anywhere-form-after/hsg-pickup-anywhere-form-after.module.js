import { slspClosePickupAnywhereFormModule } from './slsp-close-pickup-anywhere-form/slsp-close-pickup-anywhere-form.module';
import { slspHomeDeliveryLabelModule } from './slsp-home-delivery-label/slsp-home-delivery-label.module';

export const hsgPickupAnywhereFormAfterModule = angular
  .module('hsgPickupAnywhereFormAfterModule', [])
  .component('pickupAnywhereFormAfter', {
    bindings: { parentCtrl: '<' },
    template: `
            <slsp-close-pickup-anywhere-form-component after-ctrl="$ctrl"></slsp-close-pickup-anywhere-form-component>
            <slsp-home-delivery-label-component after-ctrl="$ctrl"></slsp-home-delivery-label-component>
            `
  });


hsgPickupAnywhereFormAfterModule.requires.push(slspClosePickupAnywhereFormModule.name);
hsgPickupAnywhereFormAfterModule.requires.push(slspHomeDeliveryLabelModule.name)
