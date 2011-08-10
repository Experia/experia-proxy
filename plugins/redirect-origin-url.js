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
	var reqInf = api.getRequestInfo();
	var sess = reqInf.session;
	stage = sess.proxy_url;
	
	url = "http://" + reqInf.hostname + reqInf.url;
	var qi = api.getRequestInfo();
	var si = api.getResponseInfo();
	
	api.setResponseInfo({
		statusCode: 301,
		body: [],
		headers: {
			'no-redirect': true,
			location: url
		}
	});
	api.notify();
};
