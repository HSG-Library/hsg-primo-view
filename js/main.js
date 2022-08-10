
import { hsgHowovpAfterModule } from './modules/alma-howovp-after/hsg-howovp-after.module'
import { hsgHtgiSvcAfterModule } from './modules/alma-htgi-svc-after/hsg-htgi-svc-after.module'
import { hsgAlertMessageModule } from './modules/hsg-alert-message/hsg-alert-message.module'
import { hsgExceptionHandlerModule } from './modules/hsg-exception-handler/hsg-exception-handler.module'
import { hsgAlmaOtherMembersAfterModule } from './modules/prm-alma-other-members-after/hsg-alma-other-members-after.module'
import { hsgAlmaViewitAfterModule } from './modules/prm-alma-viewit-after/hsg-alma-viewit-after.module'
import { hsgGalleryItemAfterModule } from './modules/prm-gallery-item-after/hsg-gallery-item-after.module'
import { hsgJournalsAfterModule } from './modules/prm-journals-after/hsg-journals-after.module'
import { hsgLoanAfterModule } from './modules/prm-loan-after/hsg-loan-after.module'
import { hsgLocationItemAfterModule } from './modules/prm-location-item-after/hsg-location-item-after.module'
import { hsgLocationItemsAfterModule } from './modules/prm-location-items-after/hsg-location-items-after.module'
import { hsgLocationsAfterModule } from './modules/prm-locations-after/hsg-locations-after.module'
import { hsgPersonalInfoAfterModule } from './modules/prm-personal-info-after/hsg-personal-info-after.module'
import { hsgRequestAfterModule } from './modules/prm-request-after/hsg-request-after.module'
import { hsgSearchResultAvailabilityLineAfterModule } from './modules/prm-search-result-availability-line-after/hsg-search-result-availabilty-line-after.module'
import { hsgServiceDetailsAfterModule } from './modules/prm-service-details-after/hsg-service-details-after.module'
import { hsgStackMapAfterModule } from './modules/prm-stack-map-after/hsg-stack-map-after.module'
import { hsgStandAloneLoginAfterModule } from './modules/prm-stand-alone-login-after/hsg-stand-alone-login-after.module'
import { hsgUserAreaExpandableAfterModule } from './modules/prm-user-area-expandable-after/hsg-user-ara-expandable-after.module'
import { slspHttpInterceptRequestsModule } from './modules/slsp-http-intercept-requests/slsp-http-intercept-requests.module'

let app = angular.module('viewCustom', ['angularLoad'])

app.requires.push(hsgAlertMessageModule.name)
app.requires.push(hsgExceptionHandlerModule.name)
app.requires.push(hsgHowovpAfterModule.name)
app.requires.push(hsgHtgiSvcAfterModule.name)
app.requires.push(hsgAlmaOtherMembersAfterModule.name)
app.requires.push(hsgAlmaViewitAfterModule.name)
app.requires.push(hsgGalleryItemAfterModule.name)
app.requires.push(hsgJournalsAfterModule.name)
app.requires.push(hsgLoanAfterModule.name)
app.requires.push(hsgLocationItemAfterModule.name)
app.requires.push(hsgLocationItemsAfterModule.name)
app.requires.push(hsgLocationsAfterModule.name)
app.requires.push(hsgPersonalInfoAfterModule.name)
app.requires.push(hsgRequestAfterModule.name)
app.requires.push(hsgSearchResultAvailabilityLineAfterModule.name)
app.requires.push(hsgServiceDetailsAfterModule.name)
app.requires.push(hsgStackMapAfterModule.name)
app.requires.push(hsgStandAloneLoginAfterModule.name)
app.requires.push(hsgUserAreaExpandableAfterModule.name)
app.requires.push(slspHttpInterceptRequestsModule.name)

app.run(function () { console.log('** app running **') })

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
}

let browzine = {}
browzine.script = document.createElement("script")
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js"
document.head.appendChild(browzine.script)

// **controller is implemented in hsg-browzine-integration module**
// End BrowZine - Primo Integration

///////////////////////////////////////////
/// code for LibraryH3lp chat           ///
/// provided by support@libraryh3lp.com ///
///////////////////////////////////////////
function getClosest(elem, selector) {
	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function (s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length
				while (--i >= 0 && matches.item(i) !== this) { }
				return i > -1
			}
	}

	// Get the closest matching element
	for (; elem && elem !== document; elem = elem.parentNode) {
		if (elem.matches(selector)) return elem
	}
	return null
}

var chatFrameWrap = document.createElement('div')
chatFrameWrap.setAttribute('id', 'lh3-chat-frame-wrap')
chatFrameWrap.setAttribute('style', 'display: none; height: 390px; background-color: #fff; border: 1px solid #00802f; width: 400px')

var closeChatBar = document.createElement('div')
closeChatBar.setAttribute('id', 'lh3-close-chat-bar')
closeChatBar.setAttribute('style', 'background-color: #00802f; color: #fff; font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; padding: 5px 10px; text-align: right;')
var closeChat = document.createElement('span')
closeChat.setAttribute('id', 'lh3-close-chat')
closeChat.setAttribute('style', 'cursor: pointer;')
closeChat.innerHTML = '&#10005;'
closeChatBar.appendChild(closeChat)
chatFrameWrap.appendChild(closeChatBar)

var needsJs = document.createElement('div')
needsJs.setAttribute('class', 'needs-js')
chatFrameWrap.appendChild(needsJs)

var chatHeader = document.createElement('header')
chatHeader.setAttribute('aria-labelled-by', 'lh3-chat-button')
chatHeader.setAttribute('id', 'lh3-chat-header')
chatHeader.setAttribute('style', 'display: block; position: absolute; top: -3px; left: -65px;')

var chatOnlineImage = document.createElement('img')
chatOnlineImage.setAttribute('src', 'https://s3.amazonaws.com/libraryh3lp.com/eu/buttons/1725-st-gallen-chat-online.png')
chatOnlineImage.setAttribute('alt', 'Chat online')
chatOnlineImage.setAttribute('style', 'height: 46px; width: 46px; padding: 2px 0;')

var chatButton = document.createElement('button')
chatButton.setAttribute('id', 'lh3-chat-button')
chatButton.setAttribute('style', 'background-color: transparent; border: none; display: block; padding: 10px 10px 8px;')
chatButton.appendChild(chatOnlineImage)

var chatTooltipHeader = document.createElement('div')
chatTooltipHeader.setAttribute('style', 'font-weight: bold;')
chatTooltipHeader.innerHTML = 'Live Chat'
var chatTooltipContentDe = document.createElement('div')
chatTooltipContentDe.innerHTML = 'Haben Sie Fragen?'
var chatTooltipContentEn = document.createElement('div')
chatTooltipContentEn.innerHTML = 'Do you have any questions?'
var chatTooltip = document.createElement('div')
chatTooltip.setAttribute('id', 'chat-tooltip')
chatTooltip.setAttribute('style', 'display: none; position: absolute; top: 70px; right: 10px; width: max-content; text-align: right; padding: 5px; border: 1px solid #00802f; border-radius: 0; background-color: white; color: #3A3A3A; font-family: Source Sans Pro;')
chatTooltip.appendChild(chatTooltipHeader)
chatTooltip.appendChild(chatTooltipContentDe)
chatTooltip.appendChild(chatTooltipContentEn)

var chatTooltipArrow = document.createElement('div')
chatTooltipArrow.setAttribute('id', 'chat-tooltip-arrow')
chatTooltipArrow.setAttribute('style', 'display: none; position: absolute; bottom: -2px; left: 15px; width: 0; border-top: 5px solid #00802f; border-right: 5px solid transparent; border-left: 5px solid transparent; font-size: 0; line-height: 0; transform: rotate(180deg);')

var lh3ChatOnline = false
var showLH3Chat = false
window.mouseOverChatTab = function (event) {
	if (lh3ChatOnline && !showLH3Chat) {
		document.getElementById('chat-tooltip').style.display = 'block'
		document.getElementById('chat-tooltip-arrow').style.display = 'block'
	}
}
window.mouseOutChatTab = function (event) {
	if (lh3ChatOnline && !showLH3Chat) {
		document.getElementById('chat-tooltip').style.display = 'none'
		document.getElementById('chat-tooltip-arrow').style.display = 'none'
	}
}
window.toggleChatTab = function (event) {
	if (event) {
		event.preventDefault()
		event.stopPropagation()
	} else if (showLH3Chat) {
		// Clicked a toggle somewhere from page, but chat is already open.
		return false
	}

	// Hide any tooltip.
	document.getElementById('chat-tooltip').style.display = 'none'
	document.getElementById('chat-tooltip-arrow').style.display = 'none'

	showLH3Chat = !showLH3Chat
	chatButton.style.display = showLH3Chat ? 'none' : 'block'
	chatFrameWrap.style.display = showLH3Chat ? 'block' : 'none'
	chatFrameWrap.style.width = ((window.screen.availWidth < 400) ? (window.screen.availWidth - 2) : 400) + 'px'
	chatHeader.style.left = showLH3Chat ? '-69px' : '-67px'
	if (!showLH3Chat) {
		chatWidget.setAttribute('style', 'position: fixed; top: 38.2%; right: 20px; z-index: 1000;')
	}
	return false
}

closeChat.addEventListener('click', window.toggleChatTab)
closeChat.addEventListener('touchend', window.toggleChatTab)
chatButton.addEventListener('click', window.toggleChatTab)
chatButton.addEventListener('mouseover', window.mouseOverChatTab)
chatButton.addEventListener('mouseout', window.mouseOutChatTab)
chatButton.addEventListener('touchend', window.toggleChatTab)
chatHeader.appendChild(chatTooltip)
chatHeader.appendChild(chatTooltipArrow)
chatHeader.appendChild(chatButton)

var chatWidget = document.createElement('div')
chatWidget.setAttribute('id', 'lh3-chat-widget')
chatWidget.setAttribute('style', 'position: fixed; top: 35%; right: 20px; z-index: 1000;')
chatWidget.appendChild(chatHeader)
chatWidget.appendChild(chatFrameWrap)
document.body.appendChild(chatWidget)

var chatWidgetMouseDown = false
window.dragChatWidget = function (event) {
	event.preventDefault()
	const dataOffset = chatWidget.getAttribute('data-offset')
	if (chatWidgetMouseDown && dataOffset) {
		const offset = JSON.parse(dataOffset)
		const left = event.type === 'mousemove' ? event.clientX : event.targetTouches[0].clientX
		const top = event.type === 'mousemove' ? event.clientY : event.targetTouches[0].clientY
		chatWidget.style.left = (left + offset[0]) + 'px'
		chatWidget.style.top = (top + offset[1]) + 'px'
	}
}
window.stopDraggingChatWidget = function (event) {
	chatWidgetMouseDown = false
	document.removeEventListener('mousemove', window.dragChatWidget, true)
	document.removeEventListener('touchmove', window.dragChatWidget, true)
	document.removeEventListener('mouseup', window.stopDraggingChatWidget, true)
	document.removeEventListener('touchend', window.stopDraggingChatWidget, true)
}
window.startDraggingChatWidget = function (event) {
	if (chatFrameWrap.style.display === 'none') {
		return // Chat box is not visible.
	}

	event.preventDefault()
	event.stopPropagation()

	chatWidgetMouseDown = true
	const left = event.type === 'mousedown' ? event.clientX : event.targetTouches[0].clientX
	const top = event.type === 'mousedown' ? event.clientY : event.targetTouches[0].clientY
	const chatWidgetOffset = [
		chatWidget.offsetLeft - left,
		chatWidget.offsetTop - top
	]
	chatWidget.setAttribute('data-offset', JSON.stringify(chatWidgetOffset))

	document.addEventListener('mousemove', window.dragChatWidget, true)
	document.addEventListener('touchmove', window.dragChatWidget, true)
	document.addEventListener('mouseup', window.stopDraggingChatWidget, true)
	document.addEventListener('touchend', window.stopDraggingChatWidget, true)
}

chatWidget.addEventListener('mousedown', window.startDraggingChatWidget, true)
chatWidget.addEventListener('touchstart', window.startDraggingChatWidget, true)

window.lh3PresenceCheck = function () {
	s = document.createElement('script')
	s.async = true
	s.id = 'lh3-presence-check'
	s.src = 'https://eu.libraryh3lp.com/presence/jid/swisscoverybs/chat.eu.libraryh3lp.com/js?cb=window.updateChatTab'
	s.type = 'application/javascript'
	document.body.appendChild(s)
}

window.updateChatTab = function () {
	for (var i = 0; i < jabber_resources.length; ++i) {
		var resource = jabber_resources[i]
		if (resource.show !== 'available' && resource.show !== 'chat') {
			lh3ChatOnline = false

			var busyText = document.querySelector('.lh3-busy')
			var offlineText = document.querySelector('.lh3-offline')

			if (!busyText && !offlineText) {
				setTimeout(lh3PresenceCheck, 1000)
			}

			var wrap = document.getElementById('lh3-chat-frame-wrap')
			wrap.style.borderColor = '#00802f'

			var bar = document.getElementById('lh3-close-chat-bar')
			bar.style.backgroundColor = '#00802f'

			var chatOfflineImage = document.createElement('img')
			if (resource.show === 'dnd') { // Busy
				chatOfflineImage.setAttribute('src', 'https://s3.amazonaws.com/libraryh3lp.com/eu/buttons/1725-st-gallen-chat-online.png')
				chatOfflineImage.setAttribute('alt', 'Chat ausgelastet / busy')

				var lh3ChatFrameWrap = document.querySelector('#lh3-chat-frame-wrap')
				if (lh3ChatFrameWrap) {
					lh3ChatFrameWrap.style.borderColor = "#6829ff"
					lh3ChatFrameWrap.children[0].style.backgroundColor = "#6829ff"
				}

				if (busyText && offlineText) {
					busyText.style.display = 'block'
					offlineText.style.display = 'none'
				}
			} else { // Away, Extended Away, Unavailable
				chatOfflineImage.setAttribute('src', 'https://s3.amazonaws.com/libraryh3lp.com/eu/buttons/1725-st-gallen-chat-offline.svg')
				chatOfflineImage.setAttribute('alt', 'Chat offline')

				if (busyText && offlineText) {
					busyText.style.display = 'none'
					offlineText.style.display = 'block'
				}
			}
			chatOfflineImage.setAttribute('style', 'height: 46px; width: 46px; padding: 2px 0;')

			var button = document.getElementById('lh3-chat-button')
			button.innerHTML = ''
			button.appendChild(chatOfflineImage)
		} else {
			lh3ChatOnline = true
		}
	}
}

function clickAway(event) {
	var linkToggleRegex = RegExp('toggleChatTab')
	var linkElement = getClosest(event.target, 'a')
	if (showLH3Chat && !lh3ChatOnline && !getClosest(event.target, '#lh3-chat-widget') && (!linkElement || !linkToggleRegex.test(linkElement.getAttribute('onclick')))) {
		window.toggleChatTab(event)
	}
}

document.addEventListener('click', clickAway)
document.addEventListener('touchend', clickAway)

function handleEscape(event) {
	if (event.key === "Escape" && showLH3Chat && !lh3ChatOnline) {
		window.toggleChatTab(event)
	}
}
document.addEventListener('keyup', handleEscape)

var s = document.createElement('script')
s.async = true
s.id = 'lh3-chat-snippet'
s.src = 'https://eu.libraryh3lp.com/js/libraryh3lp.js?1564'
s.type = 'application/javascript'
s.onload = lh3PresenceCheck
document.body.appendChild(s)
///////////////////////////////////////////
/// code for LibraryH3lp chat ends here ///
/// provided by support@libraryh3lp.com ///
///////////////////////////////////////////
