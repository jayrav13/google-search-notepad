// background.js

$(window).on('hashchange', function() {
	chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0], {"message": "url_changed"}, function(response) {});
	});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {          
	if (changeInfo.status == 'complete') {   
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			var activeTab = tabs[0]

			if(activeTab.url.indexOf("q=notepad") != -1) {
				chrome.tabs.sendMessage(tabs[0].id, {message: "notepad"}, function(response) {});
			}
		});
	}
});
