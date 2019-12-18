// ==UserScript==
// @name         mannenzaken - UnBlur
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @icon         https://forum.mannenzaken.nl/favicon.ico
// @author       Rasta
// @match        https://forum.mannenzaken.nl/*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @require      https://code.jquery.com/jquery-migrate-3.0.0.min.js
// @grant        none
// ==/UserScript==
(function() {
    $('.blixem-nsfw-text-container').remove()
    $('.blixem-nsfw').addClass('is-sfw')
    $('.blixem-nsfw').removeClass('is-nsfw')
})();
