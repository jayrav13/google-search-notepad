// background.js

$(window).on('hashchange', function() {
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0], {"message": "url_changed"}, function(response) {});
	});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {          
	if (changeInfo.status == 'complete') {   
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {message: "SendIt"}, function(response) {});  
		});
	}
});
