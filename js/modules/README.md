# Modules
* **`alma-howovp-after`** *hook*
	* **`slsp-ill-signin-order-alert`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-ill-signin-order-alert
* **`hsg-alert-message`** *global module*\
Module used on the homepage to display (alert) messages to the users. The messages can be edited in SharePoint, and will be retrieved via ajax. 
* **`hsg-exception-handler`** *global module*\
Global exception handler which logs exceptions and adds a marker (`**HSG-SWISSCOVERY**`) in front of all console logs if the error originates from a custom file.\
There is a proof of concept to report exceptions to a remote serivce via http, in order to centrally collect and analyze errors.
* **`prm-alma-viewit-after`** *hook*
	* **`hsg-off-campus-info`** *module*\
	Info message, that licensed e-ressources are only accessible from the HSG network. Very similar to the [BCUF solution](https://github.com/BCUF/bcufr-primo-views/tree/master/41SLSP_BCUFR-DFR/js/modules/prm-alma-viewit-after/bcu-off-campus) and the [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-alma-delivery-after/eth-fullview-offcampus-warning)
	* **`hsg-report-broken-link`** *module* \
	Link which reports a broken link to an e-ressource. The link triggers a modal popup and automatically sends an email and adds the broken link into an Excel file via a Microsoft [PowerAutomate flow](https://emea.flow.microsoft.com/manage/environments/Default-a7262e59-1b56-4f5a-a412-6f07181f48ee/flows/f2987d08-631f-4e91-a320-318b0793d158/details). Similar to the [BCUF solution](https://github.com/BCUF/bcufr-primo-views/tree/master/41SLSP_BCUFR-DFR/js/modules/prm-alma-viewit-after/bcu-online-feedback) and the [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-alma-delivery-after/eth-online-feedback-mail)
* **`prm-journals-after`** *hook*
  * **`hsg-journals-startpage`** *module*\
  Start page for the journals search, similar to the [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-journals-after/eth-journals-startpage)
* **`prm-location-items-after`** *hook*	
  * **`slsp-i-button`** *module*\
  Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-i-button
* **`prm-locations-after`** *hook*
   * **`eth-locations-filter`** *module*\	
   Adapted from [ETHZ Solution](https://gitlab.com/ethlibrary/slsp/customization-eth-view/-/tree/master/js/modules/prm-locations-after/eth-locations-filter) as suggested by [SLSP](https://github.com/Swiss-Library-Service-Platform/swisscovery/tree/main/41SLSP_NETWORK-VU1_UNION/js/prm-locations-after)
* **`prm-personal-info-after`** *hook*
  * **`slsp-edit-personal-details`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-edit-personal-details
* **`prm-request-after`** *hook*
	* **`hsg-reading-room-info`** *module*\
	Message which is displayed if all available items are unvailable, but there is a 'reading room only' item which a user can request without waiting: *"The loanable items are not available. To order the non-loanable copy to the Service Point for viewing, select the pick-up location HSG Reading Room. If you choose the pick-up location HSG, you will be placed on the waiting list."*
	* **`sls-courier-info`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-courier-info 
* **`prm-user-area-expandable-after`** *hook*
  * **`sls-ill-signin-order-logged-out`** *module*\
	Adapted from SLSP, see: https://github.com/Swiss-Library-Service-Platform/Swisscovery-Network-Zone/tree/main/41SLSP_NETWORK-VU1_UNION/js/slsp-ill-signin-order-logged-out 	