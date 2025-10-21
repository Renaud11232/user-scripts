// ==UserScript==
// @name         AliExpress Improvements
// @namespace    https://renaud11232.github.io
// @version      1.0.0
// @description  Collections of improvements to AliExpress
// @author       Renaud11232
// @match        http*://*.aliexpress.com/w/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fr.aliexpress.com
// @grant        none
// ==/UserScript==

(function() {
    new MutationObserver(() => {
        [...document.querySelectorAll(".search-card-item")].forEach(card => {
            if(card.href.match(/^https?:\/\/.*?\.aliexpress\.com\/ssr\/.*?$/)) {
                card.style.opacity = 0.2;
            } else {
                card.style.opacity = 1;
            }
        });
    }).observe(document.getElementById("card-list"), {
        childList: true,
        subtree: true
    });
})();