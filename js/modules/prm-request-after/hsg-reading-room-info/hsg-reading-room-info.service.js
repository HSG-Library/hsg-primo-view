export const hsgReadingRoomInfoService = ['hsgUserService', function (hsgUserService) {

	function shouldCheckForReadingRoom() {
		return !isGuest()
	}

	async function hasReadingRoomItem(scope) {
		this.currentItem = getItem(scope)
		this.called = true
		const locationItems = getLocationItems(scope)
		const results = await Promise.all(locationItems)
		if (!isAnyItemAvailable(results)) {
			return results.some(item => {
				const locations = item.data.itemInfo.locations
				if (!locations || locations.length <= 0) {
					return false
				}
				const items = locations[0].items
				if (!items || items.length <= 0) {
					return false
				}
				return items.some(item => {
					const itemCatName = item.itemcategoryname
					if (itemCatName) {
						return itemCatName.startsWith("Reading Room")
					}
					return false
				})
			})
		}
		return false
	}

	function isAnyItemAvailable(results) {
		return results.some(item => {
			const locations = item.data.itemInfo.locations
			if (!locations || locations.length <= 0) {
				return true
			}
			const items = locations[0].items
			if (!items || items.length <= 0) {
				return true
			}
			return items.some(item => {
				const itemCatName = item.itemcategoryname
				const isNotReadingRoom = itemCatName.toLowerCase().indexOf("reading room") < 0
				if (isNotReadingRoom) {
					const itemStatusName = item.itemstatusname
					const isOnLoan = itemStatusName.match(/\d{2}\/\d{2}\/\d{4}/g)
					if (isOnLoan) {
						return false
					}
					return true
				}
				return false
			})
		})
	}

	function getLocationItems(scope) {
		let items = getItem(scope)
		if (!Array.isArray(items)) {
			items = [items]
		}
		const locationsService = ctrl(scope).locationsService
		let locations = items.map(item => locationsService.getLocations(item))
		locations = locations.map(l => l.flat()).flat()
		return locations.map(location => locationsService.getItems(location, false, false, {}))
	}

	function isGuest() {
		return hsgUserService.isGuest()
	}

	function getItem(scope) {
		return ctrl(scope).$scope.$ctrl.$scope.$parent.$parent.$ctrl.item
	}

	function ctrl(scope) {
		return scope.$ctrl.parentCtrl
	}

	return {
		shouldCheckForReadingRoom: shouldCheckForReadingRoom,
		hasReadingRoomItem: hasReadingRoomItem
	}

}]
