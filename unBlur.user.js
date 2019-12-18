// ==UserScript==
// @name         mannenzaken - UnBlur
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @icon         https://forum.mannenzaken.nl/favicon.ico
// @author       Rasta
// @match        https://forum.mannenzaken.nl/*
// @grant        none
// ==/UserScript==
(function() {
  var telement = document.getElementsByClassName("blixem-nsfw-text-container");
  var nelement = document.getElementsByClassName("blixem-nsfw");
  [...telement].map(n => n && n.remove());
  [...nelement].map(n => n && n.classList.add("is-sfw"));
  [...nelement].map(n => n && n.classList.remove("is-nsfw"));
})();
