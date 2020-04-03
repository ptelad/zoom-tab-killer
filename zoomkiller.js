chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.tabs.remove(details.tabId, () => {
        console.log('TAB closed!');
    });
}, {url: [{urlMatches : 'https://zoom.us/postattendee'}]});