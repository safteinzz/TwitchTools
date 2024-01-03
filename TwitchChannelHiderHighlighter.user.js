// ==UserScript==
// @name         Hide Specific Twitch Channels, Highlight Others, and Hide Specific Games
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Hide specific channels and games from Twitch recommendations and highlight other channels
// @author       SaFteiNZz
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const hideChannels = ['ChannelName1', 'ChannelName2']; // Add channel names here to hide them
    const highlightChannels = ['FavoriteChannel1', 'FavoriteChannel2']; // Add channel names here to highlight them
    const hideGames = ['GameTitle1', 'GameTitle2']; // Add game titles here to hide them

    function updateChannelDisplay() {
        const sideChannels = document.querySelectorAll('.side-nav-card, .ScTransformWrapper-sc-1wvuch4-1');

        sideChannels.forEach(channel => {
            const titleElement = channel.querySelector('[data-a-target="side-nav-title"]');
            const gameTitleElement = channel.querySelector('[data-a-target="side-nav-game-title"] p');

            // Hide channels in the side navigation
            if (titleElement) {
                const channelName = titleElement.textContent.trim();
                const gameTitle = gameTitleElement ? gameTitleElement.textContent.trim() : '';

                if (hideChannels.includes(channelName) || hideGames.includes(gameTitle)) {
                    channel.style.display = 'none';
                } else if (highlightChannels.includes(channelName)) {
                    channel.style.background = '#6441a5'; // Highlight style
                }
            }
        });

        const liveChannels = document.querySelectorAll('.live-channel-card');

        liveChannels.forEach(channel => {
            const linkElement = channel.querySelector('[data-a-target="preview-card-image-link"]');
            const gameLinkElement = channel.querySelector('[data-a-target="preview-card-game-link"]');

            if (linkElement) {
                const channelName = linkElement.getAttribute('href').replace('/', '');
                const gameTitle = gameLinkElement ? gameLinkElement.textContent.trim() : '';

                // Hide and highlight live channels
                if (hideChannels.map(c => c.toLowerCase()).includes(channelName.toLowerCase()) || hideGames.includes(gameTitle)) {
                    channel.style.display = 'none';
                } else if (highlightChannels.map(c => c.toLowerCase()).includes(channelName.toLowerCase())) {
                    channel.style.background = '#6441a5'; // Highlight style
                }
            }
        });
    }

    // Run the function on load and when the content changes
    window.addEventListener('load', updateChannelDisplay);
    new MutationObserver(updateChannelDisplay).observe(document.body, {childList: true, subtree: true});
})();
