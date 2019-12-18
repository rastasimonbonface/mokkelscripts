// ==UserScript==
// @name         mannenzaken - adBlock
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       Rasta
// @match        https://forum.mannenzaken.nl/*
// @require https://code.jquery.com/jquery-3.2.1.min.js
// @require https://code.jquery.com/jquery-migrate-3.0.0.min.js
// @grant        none
// ==/UserScript==
var css = "";
css += [
		"div.canvas-layout-container > .mokkels-advertentie.canvas-widget{",
		"	display: none;",
		"}"
	].join("\n");
(function() {
    if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
