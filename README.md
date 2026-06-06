# MinusAI

A lightweight Chrome Extension that automatically appends `-AI` to all your Google searches. 

With the increasing amount of AI-generated content and overviews in search results, this extension provides a simple way to filter them out by taking advantage of Google's built-in exclusion operator.

## Features
- **Automatic filtering:** Silently adds `-AI` to your search queries before the page loads.
- **Easy Toggle:** Click the extension icon in your toolbar to instantly turn the filtering ON or OFF.
- **Lightweight:** Uses minimal permissions and runs efficiently without slowing down your browsing experience.

## Installation

Currently, this extension can be installed manually by enabling Developer Mode in Chrome:

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle switch in the top right corner.
4. Click the **Load unpacked** button in the top left.
5. Select the `MinusAI` directory containing the extension files.

## Usage

Once installed, simply perform a Google search as you normally would. 
- If the extension is **ON** (indicated by a green badge on the icon), `-AI` will be automatically appended to your query.
- To disable the extension temporarily, click the MinusAI icon in your toolbar so the badge turns red and says **OFF**. Your searches will run exactly as you typed them.
