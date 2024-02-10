// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "scrapeData") {
        // Your web scraping logic goes here

        // Replace the selectors with the ones specific to your webpage
        const specificTextElements = document.querySelectorAll('html');
        
        // Collect text content from each element
        const scrapedLines = Array.from(specificTextElements).map(element => element.innerText.trim()).filter(text => text.length > 0);

        // Join the scraped lines into a single string
        const fullPageText = scrapedLines.join('\n');

        // You can use the scraped data as needed (e.g., log to console, send to server, etc.)
        console.log("Scraped Data:", fullPageText);

        // Alternatively, you can display it in an alert
        alert("Scraped Data:\n" + fullPageText);
    }
});
