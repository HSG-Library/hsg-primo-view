import { slspClosePickupAnywhereFormModule } from './slsp-close-pickup-anywhere-form/slsp-close-pickup-anywhere-form.module';

export const hsgPickupAnywhereFormAfterModule = angular
  .module('hsgPickupAnywhereFormAfterModule', [])
  .component('pickupAnywhereFormAfter', {
    bindings: { parentCtrl: '<' },
    template: `
            <slsp-close-pickup-anywhere-form-component after-ctrl="$ctrl"></slsp-close-pickup-anywhere-form-component>
            `
  });


hsgPickupAnywhereFormAfterModule.requires.push(slspClosePickupAnywhereFormModule.name);
