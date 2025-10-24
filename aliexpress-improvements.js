// ==UserScript==
// @name         AliExpress Improvements
// @namespace    https://renaud11232.github.io
// @version      1.1.0
// @description  Collections of improvements to AliExpress
// @author       Renaud11232
// @match        http*://*.aliexpress.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fr.aliexpress.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle(`
        a[href*=".aliexpress.com/ssr/"] {
            opacity: 20%;
        }
    `);
})();
