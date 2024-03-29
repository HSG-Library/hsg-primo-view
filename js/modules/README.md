# Modules
* **`alma-howovp-after`** *hook*
	* **`slsp-ill-signin-order-alert`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-ill-signin-order-alert
<br><br>
* **`alma-htgi-svc-after`** *hook*
	* **`slsp-archives-htgi`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/central-customization-package/tree/main/41SLSP_NETWORK-CENTRAL_PACKAGE/js/slsp-archives-htgi
<br><br>
* **`hsg-alert-message`** *global module*\
Module used on the homepage to display (alert) messages to the users. The messages can be edited in SharePoint, and will be retrieved via ajax. 
<br><br>
* **`hsg-exception-handler`** *global module*\
Global exception handler which logs exceptions and adds a marker (`**HSG-SWISSCOVERY**`) in front of all console logs if the error originates from a custom file.\
There is a proof of concept to report exceptions to a remote serivce via http, in order to centrally collect and analyze errors.
<br><br>
* **`prm-alma-other-members-after`** *hook*
	* **`slsp-collapse-other-inst`** *module*\
  'Other loan and request options' in the 'Loan and request' section is collapsed by default. Adapted from SLSP: [SLSP Solution](https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/prm-alma-other-members-after/slsp-collapse-other-inst)
<br><br>
* **`prm-alma-viewit-after`** *hook*
	* **`hsg-off-campus-info`** *module*\
	Info message, that licensed e-ressources are only accessible from the HSG network. Very similar to the [BCUF solution](https://github.com/BCUF/bcufr-primo-views/tree/master/41SLSP_BCUFR-DFR/js/modules/prm-alma-viewit-after/bcu-off-campus) and the [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-alma-delivery-after/eth-fullview-offcampus-warning)
	* **`hsg-report-broken-link`** *module* \
	Link which reports a broken link to an e-ressource. The link triggers a modal popup and automatically sends an email and adds the broken link into an Excel file via a Microsoft [PowerAutomate flow](https://emea.flow.microsoft.com/manage/environments/Default-a7262e59-1b56-4f5a-a412-6f07181f48ee/flows/f2987d08-631f-4e91-a320-318b0793d158/details). Similar to the [BCUF solution](https://github.com/BCUF/bcufr-primo-views/tree/master/41SLSP_BCUFR-DFR/js/modules/prm-alma-viewit-after/bcu-online-feedback) and the [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-alma-delivery-after/eth-online-feedback-mail)
  * **`slsp-archives-viewit`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/central-customization-package/tree/main/41SLSP_NETWORK-CENTRAL_PACKAGE/js/slsp-archives-viewit
<br><br>
* **`prm-gallery-item-after`** *hook*
  * **`hsg-collections-show-author`** *module*\
  Show author name in collections. 
<br><br>
* **`prm-journals-after`** *hook*
  * **`hsg-journals-startpage`** *module*\
  Start page for the journals search, similar to the [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-journals-after/eth-journals-startpage)
<br><br>
* **`prm-loan-after`** *hook*
  * **`slsp-renew-item-text`** *module*\
  New way to display reasons why an item is not renewable [SLSP Solution](https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/prm-loan-after/slsp-renew-item-text)  
<br><br>
* **`prm-location-item-after`** *hook*
  * **`hsg-display-item-policy`** *module*\
  Display item policies 63, 67, 68, 70, which are hidden by default
<br><br>
* **`prm-location-items-after`** *hook*	
  * **`eth-location-items-filter`** *module*\	
   Adapted from [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-location-items-after/eth-location-items-filter) as suggested by [SLSP](https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/prm-location-items-after).
  * **`slsp-i-button`** *module*\
  Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-i-button
<br><br>
* **`prm-locations-after`** *hook*
   * **`eth-locations-filter`** *module*\	
   Adapted from [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-locations-after/eth-locations-filter) as suggested by [SLSP](https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/prm-locations-after)
<br><br>
* **`prm-personal-info-after`** *hook*
  * **`slsp-edit-personal-details`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-edit-personal-details
<br><br>
* **`prm-request-after`** *hook*
	* **`hsg-reading-room-info` (not active)** *module*\
	Message which is displayed if all available items are unvailable, but there is a 'reading room only' item which a user can request without waiting: *"The loanable items are not available. To order the non-loanable copy to the Service Point for viewing, select the pick-up location HSG Reading Room. If you choose the pick-up location HSG, you will be placed on the waiting list."*
	* **`sls-courier-info`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-courier-info 
<br><br>
* **`prm-search-result-availability-line-after`** *hook*
  * **`hsg-browzine-integration`** *module*\
  BrowZine integration
  * **`slsp-archives-availability-line`** *module*\
  Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/central-customization-package/tree/main/41SLSP_NETWORK-CENTRAL_PACKAGE/js/slsp-archives-viewit
<br><br>
* **`prm-service-details-after`** *hook*	
  * **`hsg-service-details-foldable-items`** *module*\
  Overly long service details entries, eg. table of contents, are collapsed and can be expandend
<br><br>
* **`prm-stack-map-after`** *hook*	
  * **`hsg-stack-map-link`** *module*\
  The stack map (MediaScout) opens in a modal dialog instead of a new tab/window.	
<br><br>
* **`prm-stand-alone-login-after`** *hook*	
  * **`hsg-stand-alone-login-info`** *module*\
  Add additional styling and content to the stand alone login page (https://[discoveryhost]/discovery/login?vid=[viewid])
<br><br>
* **`prm-user-area-expandable-after`** *hook*
  * **`bcu-lang-switch`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/prm-user-area-expandable-after/bcu-lang-switch \
	Slight modification in the CSS, as well as the code structure.
  * **`sls-ill-signin-order-logged-out`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-ill-signin-order-logged-out
<br><br>
* **`slsp-http-intercept-requests`** *global module*\
Adapted from SLSP see: https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-http-intercept-requests \ 
Users are now allowed to cancel a request or a digitization request only if the process is "not started" or "process started". If the process is "in process", "in transit" and “on hold shelf”, the user cannot cancel a request or a digitization.
<br><br>
