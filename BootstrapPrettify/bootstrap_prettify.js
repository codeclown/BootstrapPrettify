var selector = 'link[rel="stylesheet"][href$="bootstrap.css"], link[rel="stylesheet"][href$="bootstrap.min.css"]';
var stylesheets = document.querySelectorAll(selector);

if(stylesheets.length != 0) {
	
	for(var i = 0; i < stylesheets.length; i++) {
		stylesheets[i].disabled = true;
	}
	
	var shizzle = document.createElement('link');
	shizzle.rel = 'stylesheet';
	shizzle.type = 'text/css';
	shizzle.href = chrome.extension.getURL('bootstrap.geocities.css');
	
	document.body.appendChild(shizzle);
	
	shizzle.onload = function() {
		// show body
	};
	
}