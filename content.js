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
		if(request.message != "notepad") {
			console.log("Error!");
		}
		else {
			console.log("Message successfully arrives!");
			$("#resultStats").html("<textarea style=\"position:fixed\" rows=\"3\" cols=\"80\" placeholder=\"Welcome to your Google Notepad!\"></textarea>");
		}
	}
);


