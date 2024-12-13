import { slspPickupInformationModule } from './slsp-pickup-information/slsp-pickup-information.module';

export const hsgGetItRequestAfterModule = angular
  .module('hsgGetItRequestAfterModule', [])
  .component('prmGetItRequestAfter', {
    bindings: { parentCtrl: '<' },
    template: `
            <slsp-pickup-information-component after-ctrl="$ctrl"></slsp-pickup-information-component>
            `
  });


hsgGetItRequestAfterModule.requires.push(slspPickupInformationModule.name);