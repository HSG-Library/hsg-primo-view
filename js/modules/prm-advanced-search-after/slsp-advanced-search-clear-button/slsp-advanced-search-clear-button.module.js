import { slspAdvancedSearchClearButtonController } from './slsp-advanced-search-clear-button.controller'

export const slspAdvancedSearchClearButtonModule = angular
    .module('slspAdvancedSearchClearButtonModule', [])
    .controller('slspAdvancedSearchClearButtonController', slspAdvancedSearchClearButtonController)
    .component('slspAdvancedSearchClearButtonComponent', {
        bindings: { afterCtrl: '<' },
        controller: 'slspAdvancedSearchClearButtonController',
    })
