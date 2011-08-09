/*
Written by Greg Reimer
Copyright (c) 2010
http://github.com/greim
*/

/*
Plugin to generate an http 302 redirect to the given url.
(user will see the url change in their location field)
usage: @external-redirect(url)
*/

exports.run = function(api) {

	console.log(api);
	var reqInf = api.getRequestInfo();
	
	console.log(reqInf.url);
	console.log(reqInf.hostname);
	
	url = "http://" + reqInf.hostname + reqInf.url;
	
	console.log(url);
	
	api.setResponseInfo({
		statusCode: 302,
		body: [],
		headers: {
			location: url,
		}
	});
	api.notify();
};
