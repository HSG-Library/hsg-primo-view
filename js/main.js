
import { hsgHowovpAfterModule } from './modules/alma-howovp-after/hsg-howovp-after.module';
import { hsgAlertMessageModule } from './modules/hsg-alert-message/hsg-alert-message.module';
import { hsgExceptionHandlerModule } from './modules/hsg-exception-handler/hsg-exception-handler.module';
import { hsgAlmaViewitAfterModule } from './modules/prm-alma-viewit-after/hsg-alma-viewit-after.module';
import { hsgJournalsAfterModule } from './modules/prm-journals-after/hsg-journals-after.module';
import { hsgLoanAfterModule } from './modules/prm-loan-after/hsg-loan-after.module';
import { hsgLocationItemsAfterModule } from './modules/prm-location-items-after/hsg-location-items-after.module';
import { hsgLocationsAfterModule } from './modules/prm-locations-after/hsg-locations-after.module';
import { hsgPersonalInfoAfterModule } from './modules/prm-personal-info-after/hsg-personal-info-after.module';
import { hsgRequestAfterModule } from './modules/prm-request-after/hsg-request-after.module';
import { hsgSearchResultAvailabilityLineAfterModule } from './modules/prm-search-result-availability-line-after/hsg-search-result-availabilty-line-after.module';
import { hsgStackMapAfterModule } from './modules/prm-stack-map-after/hsg-stack-map-after.module';
import { hsgUserAreaExpandableAfterModule } from './modules/prm-user-area-expandable-after/hsg-user-ara-expandable-after.module';
import { slspHttpInterceptRequestsModule } from './modules/slsp-http-intercept-requests/slsp-http-intercept-requests.module';

let app = angular.module('viewCustom', ['angularLoad']);

app.requires.push(hsgAlertMessageModule.name);
app.requires.push(hsgExceptionHandlerModule.name);
app.requires.push(hsgHowovpAfterModule.name);
app.requires.push(hsgAlmaViewitAfterModule.name);
app.requires.push(hsgJournalsAfterModule.name);
app.requires.push(hsgLoanAfterModule.name);
app.requires.push(hsgLocationItemsAfterModule.name);
app.requires.push(hsgLocationsAfterModule.name);
app.requires.push(hsgPersonalInfoAfterModule.name);
app.requires.push(hsgRequestAfterModule.name);
app.requires.push(hsgSearchResultAvailabilityLineAfterModule.name);
app.requires.push(hsgStackMapAfterModule.name);
app.requires.push(hsgUserAreaExpandableAfterModule.name);
app.requires.push(slspHttpInterceptRequestsModule.name);

app.run(function () { console.log('** app running **') });

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