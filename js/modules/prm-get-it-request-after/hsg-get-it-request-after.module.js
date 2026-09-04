import { slspPickupInformationModule } from './slsp-pickup-information/slsp-pickup-information.module'
import { slspRefineJournalRequestModule } from './slsp-refine-journal-request/slsp-refine-journal-request.module'
import { slspScoreRequestModule } from './slsp-score-request/slsp-score-request.module'
import { slspRefineJournalDigitizationRequestModule } from './slsp-refine-journal-digitization-request/slsp-refine-journal-digitization-request.module'

export const hsgGetItRequestAfterModule = angular
  .module('hsgGetItRequestAfterModule', [])
  .component('prmGetItRequestAfter', {
    bindings: { parentCtrl: '<' },
    template: `
            <slsp-pickup-information-component after-ctrl="$ctrl"></slsp-pickup-information-component>
            <slsp-refine-journal-request-component after-ctrl="$ctrl"></slsp-refine-journal-request-component>
            <slsp-score-request-component after-ctrl="$ctrl"></slsp-score-request-component>
            <slsp-refine-journal-digitization-request-component after-ctrl="$ctrl"></slsp-refine-journal-digitization-request-component>
            `
  });


hsgGetItRequestAfterModule.requires.push(slspPickupInformationModule.name)
hsgGetItRequestAfterModule.requires.push(slspRefineJournalRequestModule.name)
hsgGetItRequestAfterModule.requires.push(slspScoreRequestModule.name)
hsgGetItRequestAfterModule.requires.push(slspRefineJournalDigitizationRequestModule.name)