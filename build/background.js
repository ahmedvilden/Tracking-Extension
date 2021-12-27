/* global chrome */

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { message: 'load' });
});
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  chrome.tabs.reload(sender.tab.id);
  sendResponse('done');
});
