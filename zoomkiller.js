chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.tabs.remove(details.tabId, () => {});
}, {url: [{urlMatches : 'https://*.zoom.us/postattendee'}]});

chrome.webNavigation.onCompleted.addListener((details) => {
    setTimeout(() => {
        chrome.tabs.remove(details.tabId, () => {});
    }, 10000);
}, {url: [{hostSuffix : 'zoom.us', querySuffix: 'status=success'}]});

chrome.webNavigation.onReferenceFragmentUpdated.addListener((details) => {
    if (details.url.endsWith('#success')) {
        chrome.tabs.remove(details.tabId, () => {});
    }
}, {url: [{hostSuffix : 'zoom.us'}]});
