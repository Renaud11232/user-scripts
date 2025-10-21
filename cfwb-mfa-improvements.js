// ==UserScript==
// @name         CFWB MFA Improvements
// @namespace    https://renaud11232.github.io
// @version      1.0.0
// @description  Collections of improvements to the MFA page of cfwb.be
// @author       Renaud11232
// @match        https://mfa.cfwb.be/osp/a/TOP/auth/oauth2/grant*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mfa.cfwb.be
// @grant        none
// ==/UserScript==

(function() {
    const factorSelect = document.getElementById("naafSelect");
    if (factorSelect) {
        const lastSelectedFactor = localStorage.getItem("__NaafLastSelectedFactor");
        if (lastSelectedFactor) {
            factorSelect.value = lastSelectedFactor;
        }
    }
    const loginButton2 = document.getElementById("loginButton2");
    if (loginButton2) {
        loginButton2.addEventListener("click", function() {
            localStorage.setItem("__NaafLastSelectedFactor", document.getElementById("naafSelect").value);
        });
    }
})();