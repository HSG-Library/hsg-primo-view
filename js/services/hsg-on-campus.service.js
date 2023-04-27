export const hsgOnCampusService = ['$http', function ($http) {

	this.onCampus = false
	this.checkDone = false
	this.doRetry = true

	this.getIpAndCheck = function () {
		this.checkDone = false
		this.onCampus = false
		$http({
			method: 'GET',
			url: 'https://icanhazip.com',
			headers: { 'Accept': 'text/plain' }
		}).then(
			response => {
				this.doRetry = true
				this.checkOnCampus(response.data)
			},
			response => {
				console.log('checking ip failed, retry: ', this.doRetry, response)
				if (this.doRetry) {
					this.doRetry = false
					this.getIpAndCheck()
				}
			})
	}

	this.isOnCampus = function () {
		return this.onCampus
	}

	this.isCheckDone = function () {
		return this.checkDone
	}

	this.checkOnCampus = function (ip) {
		if (this.looksLikeIp(ip) && this.isInRange(ip)) {
			this.onCampus = true
		} else {
			this.onCampus = false
		}
		this.checkDone = true
	}

	this.looksLikeIp = function (ip) {
		if (ip) {
			const regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/m
			if (regex.exec(ip)) {
				return true
			}
		}
		return false
	}

	this.isInRange = function (ip) {
		const lower = '130.82.0.0'
		const upper = '130.82.255.255'
		return this.isBetween(this.toNumber(ip), this.toNumber(lower), this.toNumber(upper))
	}

	this.toNumber = function (ip) {
		return ip.split('.').join('')
	}

	this.isBetween = function (num, lower, upper) {
		return Number(num) > Number(lower) && Number(num) < Number(upper)
	}

	return {
		getIpAndCheck: this.getIpAndCheck,
		isOnCampus: this.isOnCampus,
		isCheckDone: this.isCheckDone,
		checkOnCampus: this.checkOnCampus,
		looksLikeIp: this.looksLikeIp,
		isInRange: this.isInRange,
		toNumber: this.toNumber,
		isBetween: this.isBetween
	}
}]
