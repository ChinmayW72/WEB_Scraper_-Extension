// popup.js
console.log("Popup script loaded");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    var scrapeButton = document.getElementById("scrapeButton");

    if (scrapeButton) {
        scrapeButton.addEventListener("click", function () {
            console.log("Scrape button clicked");
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeData" });
            });
        });
    } else {
        console.error("Button element not found");
    }
});
