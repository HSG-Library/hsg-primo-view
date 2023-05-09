import { hsgOnCampusService } from '../../services/hsg-on-campus.service'
import { hsgHomeController } from './hsg-home.controller'


export const hsgHomeModule = angular
	.module('hsgHomeModule', [])
	.factory('hsgOnCampusService', hsgOnCampusService)
	.controller('hsgHomeController', hsgHomeController)

