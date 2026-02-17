// Wurde von der ETH übernommen und basiert auf dem Modul eth-openurl-interlibrary

import {hsgTranslatorService} from '../../../services/hsg-translator.service';
import {hsgOpenurlInterlibraryConfig} from './hsg-openurl-interlibrary.config';
import {hsgOpenurlInterlibraryController} from './hsg-openurl-interlibrary.controller';
import {hsgOpenurlInterlibraryHtml} from './hsg-openurl-interlibrary.html';

export const hsgOpenurlInterlibraryModule = angular
    .module('hsgOpenurlInterlibraryModule', [])
        .factory('hsgTranslatorService', hsgTranslatorService)
        .factory('hsgOpenurlInterlibraryConfig', hsgOpenurlInterlibraryConfig)
        .controller('hsgOpenurlInterlibraryController', hsgOpenurlInterlibraryController)
        .component('hsgOpenurlInterlibraryComponent', {
            bindings: {afterCtrl: '<'},
            controller: 'hsgOpenurlInterlibraryController',
            template: hsgOpenurlInterlibraryHtml
        })