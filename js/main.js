
import { hsgHowovpAfterModule } from './modules/alma-howovp-after/hsg-howovp-after.module';
import { hsgHtgiSvcAfterModule } from './modules/alma-htgi-svc-after/hsg-htgi-svc-after.module';
import { hsgAlertMessageModule } from './modules/hsg-alert-message/hsg-alert-message.module';
import { hsgExceptionHandlerModule } from './modules/hsg-exception-handler/hsg-exception-handler.module';
import { hsgHomeModule } from './modules/hsg-home/hsg-home.module';
import { hsgPickupAnywhereFormAfterModule } from './modules/pickup-anywhere-form-after/hsg-pickup-anywhere-form-after.module';
import { hsgAdvancedSearchAfterModule } from './modules/prm-advanced-search-after/hsg-advanced-search-after.module';
import { hsgAlmaOtherMembersAfterModule } from './modules/prm-alma-other-members-after/hsg-alma-other-members-after.module';
import { hsgAlmaOtherUnitsAfterModule } from './modules/prm-alma-other-units-after/hsg-alma-other-units-after.module';
import { hsgAlmaViewerAfterModule } from './modules/prm-alma-viewer-after/hsg-alma-viewer-after.module';
import { hsgAlmaViewitAfterModule } from './modules/prm-alma-viewit-after/hsg-alma-viewit-after.module';
import { hsgAlmaViewitItemsAfterModule } from './modules/prm-alma-viewit-items-after/hsg-alma-viewit-items-after.module';
import { hsgCitationAfterModule } from './modules/prm-citation-after/hsg-citation-after.module';
import { hsgFavoritesEditLabelsMenuAfterModule } from './modules/prm-favorites-edit-labels-menu-after/hsg-favorites-edit-labels-menu-after.module';
import { hsgFinesAfterModule } from './modules/prm-fines-after/hsg-fines-after.module';
import { hsgFullViewAfterModule } from './modules/prm-full-view-after/hsg-full-view-after.module';
import { hsgGalleryItemAfterModule } from './modules/prm-gallery-item-after/hsg-gallery-item-after.module';
import { hsgGetItRequestAfterModule } from './modules/prm-get-it-request-after/hsg-get-it-request-after.module';
import { hsgJournalsAfterModule } from './modules/prm-journals-after/hsg-journals-after.module';
import { hsgLoanAfterModule } from './modules/prm-loan-after/hsg-loan-after.module';
import { hsgLocationHoldingsAfterModule } from './modules/prm-location-holdings-after/hsg-location-holdings-after.module';
import { hsgLocationItemAfterModule } from './modules/prm-location-item-after/hsg-location-item-after.module';
import { hsgLocationItemsAfterModule } from './modules/prm-location-items-after/hsg-location-items-after.module';
import { hsgLocationsAfterModule } from './modules/prm-locations-after/hsg-locations-after.module';
import { hsgLoginAfterModule } from './modules/prm-login-after/hsg-login-after.module';
import { hsgOfferDetailsTileAfterModule } from './modules/prm-offer-details-tile-after/hsg-offer-details-tile-after.module';
import { hsgOpacAfterModule } from './modules/prm-opac-after/hsg-opac-after.module';
import { hsgPersonalInfoAfterModule } from './modules/prm-personal-info-after/hsg-personal-info-after.module';
import { hsgRequestAfterModule } from './modules/prm-request-after/hsg-request-after.module';
import { hsgRequestsAfterModule } from './modules/prm-requests-after/hsg-requests-after.module';
import { hsgSearchBarAfterModule } from './modules/prm-search-bar-after/hsg-search-bar-after.module';
import { hsgSearchResultAvailabilityLineAfterModule } from './modules/prm-search-result-availability-line-after/hsg-search-result-availabilty-line-after.module';
import { hsgSearchResultListAfterModule } from './modules/prm-search-result-list-after/hsg-search-result-list-after.module';
import { hsgSearchResultToolBarAfterModule } from './modules/prm-search-result-tool-bar-after/hsg-search-result-tool-bar-after.module';
import { hsgSendEmailAfterModule } from './modules/prm-send-email-after/hsg-send-email-after.module';
import { hsgServiceButtonAfterModule } from './modules/prm-service-button-after/hsg-service-button-after.module';
import { hsgServiceDetailsAfterModule } from './modules/prm-service-details-after/hsg-service-details-after.module';
import { hsgServiceNgrsAfterModule } from './modules/prm-service-ngrs-after/hsg-service-ngrs-after.module';
import { hsgServicePhysicalBestOfferAfterModule } from './modules/prm-service-physical-best-offer-after/hsg-service-physical-best-offer-after.module';
import { hsgStackMapAfterModule } from './modules/prm-stack-map-after/hsg-stack-map-after.module';
import { hsgStandAloneLoginAfterModule } from './modules/prm-stand-alone-login-after/hsg-stand-alone-login-after.module';
import { hsgTabsAndScopesSelectorAfterModule } from './modules/prm-tabs-and-scopes-selector-after/hsg-tabs-and-scopes-selector-after.module';
import { hsgTopBarBeforeModule } from './modules/prm-top-bar-before/hsg-top-bar-before.module';
import { hsgUnionCatalogLoginAfterModule } from './modules/prm-union-catalog-login-after/hsg-union-catalog-login-after.module';
import { hsgUserAreaExpandableAfterModule } from './modules/prm-user-area-expandable-after/hsg-user-ara-expandable-after.module';
import { slspHttpInterceptPickupInformation } from './modules/slsp-http-intercept-pickup-information/slsp-http-intercept-pickup-information.module';
import { slspHttpInterceptRequestsModule } from './modules/slsp-http-intercept-requests/slsp-http-intercept-requests.module';

let app = angular.module('viewCustom', ['angularLoad']);

app.requires.push(hsgHomeModule.name);
app.requires.push(hsgAlertMessageModule.name);
app.requires.push(hsgExceptionHandlerModule.name);
app.requires.push(hsgHowovpAfterModule.name);
app.requires.push(hsgHtgiSvcAfterModule.name);
app.requires.push(hsgAdvancedSearchAfterModule.name);
app.requires.push(hsgAlmaOtherMembersAfterModule.name);
app.requires.push(hsgAlmaViewerAfterModule.name);
app.requires.push(hsgAlmaViewitAfterModule.name);
app.requires.push(hsgAlmaViewitItemsAfterModule.name);
app.requires.push(hsgCitationAfterModule.name);
app.requires.push(hsgFinesAfterModule.name);
app.requires.push(hsgFavoritesEditLabelsMenuAfterModule.name);
app.requires.push(hsgFullViewAfterModule.name);
app.requires.push(hsgGalleryItemAfterModule.name);
app.requires.push(hsgGetItRequestAfterModule.name);
app.requires.push(hsgJournalsAfterModule.name);
app.requires.push(hsgLoanAfterModule.name);
app.requires.push(hsgLocationHoldingsAfterModule.name);
app.requires.push(hsgLocationItemAfterModule.name);
app.requires.push(hsgLocationItemsAfterModule.name);
app.requires.push(hsgLocationsAfterModule.name);
app.requires.push(hsgLoginAfterModule.name);
app.requires.push(hsgOfferDetailsTileAfterModule.name);
app.requires.push(hsgOpacAfterModule.name);
app.requires.push(hsgPersonalInfoAfterModule.name);
app.requires.push(hsgPickupAnywhereFormAfterModule.name);
app.requires.push(hsgRequestAfterModule.name);
app.requires.push(hsgRequestsAfterModule.name);
app.requires.push(hsgSearchBarAfterModule.name);
app.requires.push(hsgSearchResultAvailabilityLineAfterModule.name);
app.requires.push(hsgSearchResultListAfterModule.name);
app.requires.push(hsgSearchResultToolBarAfterModule.name);
app.requires.push(hsgSendEmailAfterModule.name);
app.requires.push(hsgServiceButtonAfterModule.name);
app.requires.push(hsgServiceDetailsAfterModule.name);
app.requires.push(hsgServiceNgrsAfterModule.name);
app.requires.push(hsgServicePhysicalBestOfferAfterModule.name);
app.requires.push(hsgStackMapAfterModule.name);
app.requires.push(hsgStandAloneLoginAfterModule.name);
app.requires.push(hsgTabsAndScopesSelectorAfterModule.name);
app.requires.push(hsgTopBarBeforeModule.name);
app.requires.push(hsgUnionCatalogLoginAfterModule.name);
app.requires.push(hsgUserAreaExpandableAfterModule.name);
app.requires.push(hsgAlmaOtherUnitsAfterModule.name);
app.requires.push(slspHttpInterceptPickupInformation.name);
app.requires.push(slspHttpInterceptRequestsModule.name);

app.run(function () { console.log('** app running **'); });

app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'https://api.seeip.org/**'
	]);
}]);

window.isSandbox = function () {
	const sandboxView = "41SLSP_HSG:sandbox_jfu";
	const params = new URLSearchParams(window.location.search);
	if (params.has('vid')) {
		const vid = params.get('vid');
		return vid == sandboxView;
	}
	return false;
};

// Begin BrowZine - Primo Integration (See: https://thirdiron.atlassian.net/wiki/spaces/BrowZineAPIDocs/pages/79200260/Ex+Libris+Primo+Integration)
window.browzine = {
	api: "https://public-api.thirdiron.com/public/v1/libraries/2827",
	apiKey: "17316fec-6c1d-4f1f-b68a-20053d35dfb8",

	// **labels maintained and translated in hsg-browzine-integration module**
	journalCoverImagesEnabled: true,
	journalBrowZineWebLinkTextEnabled: false,

	articleBrowZineWebLinkTextEnabled: false,
	articlePDFDownloadLinkEnabled: true,
	articleLinkEnabled: true,

	printRecordsIntegrationEnabled: true,

	//unpaywallEmailAddressKey: "not-applicable@unisg.ch",
	articlePDFDownloadViaUnpaywallEnabled: false,
	articleLinkViaUnpaywallEnabled: false,
	articleAcceptedManuscriptPDFViaUnpaywallEnabled: false,
	articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: false,
};

let browzine = {};
browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
document.head.appendChild(browzine.script);

// **controller is implemented in hsg-browzine-integration module**
// End BrowZine - Primo Integration
