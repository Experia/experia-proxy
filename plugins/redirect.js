/*
Written by Raphael Costa
Copyright (c) 2011
http://github.com/raphaelcosta
*/

/*
Plugin to generate an http 302 redirect to the given url.
(user will see the url change in their location field)
usage: @redirect()
*/

exports.run = function(api) {
	var respInf = api.getResponseInfo();
	var reqInf = api.getRequestInfo();
	
	console.log("REDIRECT");
	
	var url = respInf['headers']['location'];
	
	var url_parts = require('url').parse(url, true);
	
	url =  url_parts.protocol + "//" + url_parts.host + url_parts.pathname;
	console.log(url);
	
	api.setResponseInfo({
		statusCode: 302,
		body: [],
		headers: {
			location: "?uri="+ encodeURIComponent(url),
		}
	});
	api.notify();
};
