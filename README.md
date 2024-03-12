# TwitchTools

## Description
TwitchTools is a collection of Tampermonkey scripts and tools designed to enhance the user experience on Twitch. The first tool in this collection is the Twitch Channel Customizer, which allows users to hide specific channels and games from Twitch recommendations and highlight other channels of their choice.

## Twitch Channel Customizer

### Features
- Hide specified Twitch channels from the recommendations.
- Hide specified games from the recommendations.
- Highlight specified Twitch channels for easy access.

### Installation
1. Ensure you have Tampermonkey installed in your browser.
2. Download `TwitchChannelHiderHighlighter.user.js` from the TwitchTools repository.
3. Open Tampermonkey in your browser and go to the 'Utilities' tab.
4. Under 'File', upload the downloaded `.user.js` file.
5. The script will be installed and should appear in your Tampermonkey dashboard.

### Usage
- To hide channels or games, add their names to the `hideChannels` or `hideGames` arrays in the script.
- To highlight channels, add their names to the `highlightChannels` array.
- Changes take effect on page load or refresh.

### Customization
Edit the arrays in the script to match your preferences:
- `hideChannels`: Add the channel names you want to hide.
- `hideGames`: Add the game titles you want to hide.
- `highlightChannels`: Add the channel names you want to highlight.

## Future Additions
Keep an eye on the TwitchTools repository for more tools and scripts designed to improve your Twitch experience.

## Contributions
Feel free to fork this project and make your own changes. Pull requests for improvements to any tool under TwitchTools are welcome.

## License
This project is open-source and available under the MIT License. See the LICENSE file for more details.

## Author
SaFteiNZz
