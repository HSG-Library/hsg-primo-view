import { slspUnionLoginBoxModule } from './slsp-union-login-box/slsp-union-login-box.module'

export const hsgUnionCatalogLoginAfterModule = angular
	.module('hsgUnionCatalogLoginAfterModule', [])
	.component('prmUnionCatalogLoginAfter', {
		template: `<slsp-union-login-box-component after-ctrl="$ctrl"></slsp-union-login-box-component>`
	})

hsgUnionCatalogLoginAfterModule.requires.push(slspUnionLoginBoxModule.name)
