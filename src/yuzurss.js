function YuzuRSSClient(host, port) {
	this.host = host;
	this.port = port;
}

YuzuRSSClient.prototype.fetch = function (urls, limit, callback) {
	if (typeof urls === 'string') {
		urls = [urls];
	} else if (!Array.isArray(urls) || !urls.length) {
		return this;
	}

	var body = { urls: urls, limit: limit };
	this.postJSON(this.buildQueryURL(), body, this.onData(callback));

	return this;
}

YuzuRSSClient.prototype.buildQueryURL = function () {
	return 'http://' + this.host + ':' + this.port + '/feed/';
}

YuzuRSSClient.prototype.postJSON = function (url, data, callback) {
	var request = new XMLHttpRequest();
	request.onload = function () {
		var result;
		try {
			result = JSON.parse(request.responseText);
		} catch (e) {
			return;
		}
		return callback(result);
	}
	request.open('POST', url, true);
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(JSON.stringify(data));
}

YuzuRSSClient.prototype.onData = function (callback) {
	return function (result) {
		if (!result) {
			return;
		}

		try {
			// console.log(result)
			result = Array.isArray(result) ? result : [result];

			// Change date to js object
			result.forEach(function (item) {
				item.published = new Date(item.published);
			})

			return callback(result);
		} catch (e) {
			console.log(e);
			return callback([]);
		}
	}
}

export default YuzuRSSClient;
