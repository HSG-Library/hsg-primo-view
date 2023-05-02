export const hsgOnCampusService = ['$http', function ($http) {

	this.onCampus = false
	this.checkDone = false

	this.getIpAndCheck = function () {
		this.checkDone = false
		this.onCampus = false
		this.doRetry = true
		$http({
			method: 'GET',
			url: 'https://ipv4.icanhazip.com',
			headers: { 'Accept': 'text/plain' }
		}).then(
			response => {
				this.doRetry = true
				const ip = response.data
				console.log('current ip', ip)
				this.checkOnCampus(ip)
			},
			response => {
				console.log('checking ip failed, retry: ', this.doRetry, response)
				if (this.doRetry) {
					console.log('previous check failed, retry')
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
			console.log('IP is in range -> oncampus', ip)
			this.onCampus = true
		} else {
			console.log('IP not in range or has wrong format -> NOToncampus', ip)
			this.onCampus = false
		}
		this.checkDone = true
	}

	this.looksLikeIp = function (ip) {
		if (ip) {
			const regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/m
			if (regex.exec(ip)) {
				console.log('this looks like an IP', ip)
				return true
			}
		}
		console.log('this does not look like an IP', ip)
		return false
	}

	this.isInRange = function (ip) {
		const lower = '130.82.0.0'
		const upper = '130.82.255.255'
		console.log('lower', this.toNumber(lower))
		console.log('upper', this.toNumber(upper))
		console.log('ip', this.toNumber(ip))
		return this.isBetween(this.toNumber(ip), this.toNumber(lower), this.toNumber(upper))
	}

	this.toNumber = function (ip) {
		return ip.split('.')
			.map(number => number.trim())
			.map(number => ('000' + number).slice(-3)) // add 3 '0' to the number and take the last 3 digits (this converts eg. 1.0.11.222 to 1000011222 insteat of 1011222)
			.join('')
	}

	this.isBetween = function (num, lower, upper) {
		const isGreaterThanLower = Number(num) > Number(lower)
		const isLessThanUpper = Number(num) < Number(upper)
		console.log('isGreaterThanLower', isGreaterThanLower)
		console.log('isLessThanUpper', isLessThanUpper)
		return isGreaterThanLower && isLessThanUpper
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
