// ==UserScript==
// @name         问卷星允许选中
// @namespace    https://github.com/HaoNShi/Tampermonkey_Scripts
// @version      0.1.1
// @icon         https://www.wjx.cn/favicon.ico
// @description  问卷星允许选中和右键
// @author       HaoNShi
// @match        https://ks.wjx.top/jq/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 允许右键
    document.oncontextmenu = function () {
        return true;
    };
    // 允许选中
    document.onselectstart = function () {
        return true;
    };
})();
