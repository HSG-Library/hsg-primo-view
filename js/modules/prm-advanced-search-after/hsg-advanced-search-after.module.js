import { slspAdvancedSearchClearButtonModule } from './slsp-advanced-search-clear-button/slsp-advanced-search-clear-button.module'

export const hsgAdvancedSearchAfterModule = angular
    .module('hsgAdvancedSearchAfterModule', [])
    .component('prmAdvancedSearchAfter', {
        bindings: { parentCtrl: '<' },
        template: `
            <slsp-advanced-search-clear-button-component after-ctrl="$ctrl"></slsp-advanced-search-clear-button-component>
        `
    })


hsgAdvancedSearchAfterModule.requires.push(slspAdvancedSearchClearButtonModule.name)
