// ==UserScript==
// @name         Advent of Code
// @namespace    dapeaoc
// @version      0.1
// @description  AoC Helper
// @author       dape
// @match        https://adventofcode.com/*
// @icon         https://adventofcode.com/favicon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('contextmenu', function contextmenu(event) {
        if(window.location.href.includes("input") || event.target.tagName == "CODE") {
            event.target.style.color = "green";
            navigator.clipboard.writeText( event.target.textContent);
            setTimeout(() => {
                 event.target.style.color = "#cccccc";
            }, 200);

            event.preventDefault();
        }
    }, true);
})();