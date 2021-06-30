export const hsgUserService = ['jwtHelper', function (jwtHelper) {

	this.getJwt = function () {
		if (!sessionStorage) {
			return null;
		}
		return sessionStorage.getItem('primoExploreJwt');
	}

	this.getDecodedToken = function () {
		let jwt = this.getJwt();
		if (!jwt) {
			return null;
		}
		return jwtHelper.decodeToken(jwt);
	}

	this.isGuest = function () {
		let decodedToken = this.getDecodedToken();
		if (!decodedToken) {
			return true;
		}
		let userName = decodedToken.userGroup !== 'GUEST' ? decodedToken.userName : '';
		if (userName) {
			return false
		}
		else {
			return true;
		}
	}

	this.getUserIp = function () {
		let decodedToken = this.getDecodedToken();
		if (!decodedToken) {
			return '';
		}
		return decodedToken.userIp;
	}

	this.isOnCampus = function () {
		let decodedToken = this.getDecodedToken();
		if (!decodedToken) {
			return false;
		}
		if (decodedToken.onCampus === 'true') {
			return true;
		}
		else {
			return false;
		}
	}

	return {
		getJwt: this.getJwt,
		getDecodedToken: this.getDecodedToken,
		isGuest: this.isGuest,
		getUserIp: this.getUserIp,
		isOnCampus: this.isOnCampus
	};

}];