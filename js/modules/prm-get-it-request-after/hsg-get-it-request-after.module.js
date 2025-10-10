import { slspPickupInformationModule } from './slsp-pickup-information/slsp-pickup-information.module'
import { slspRefineJournalRequestModule } from './slsp-refine-journal-request/slsp-refine-journal-request.module'

export const hsgGetItRequestAfterModule = angular
  .module('hsgGetItRequestAfterModule', [])
  .component('prmGetItRequestAfter', {
    bindings: { parentCtrl: '<' },
    template: `
            <slsp-pickup-information-component after-ctrl="$ctrl"></slsp-pickup-information-component>
            <slsp-refine-journal-request-component after-ctrl="$ctrl"></slsp-refine-journal-request-component>
            `
  });


hsgGetItRequestAfterModule.requires.push(slspPickupInformationModule.name)
hsgGetItRequestAfterModule.requires.push(slspRefineJournalRequestModule.name)