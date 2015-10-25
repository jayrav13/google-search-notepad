$(document).ready(function() {
	console.log("From content!");
	if(window.location.href.indexOf("q=notepad") != -1) {
		console.log("A google site!");
	}
	else {
		console.log("Not found!");
	}
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request.message);
	}
);


