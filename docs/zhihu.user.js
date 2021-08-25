// ==UserScript==
// @name         知乎移动端修复
// @version      1.0.2
// @description  知乎移动端修复：阻止跳转，自动展开
// @author       Allan Chain
// @homepage     https://github.com/AllanChain/zhihu-mobile
// @namespace    https://github.com/AllanChain/
// @icon         https://static.zhihu.com/heifetz/favicon.ico
// @include      https://www.zhihu.com/*
// @include      https://zhuanlan.zhihu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==
var a=`.DownloadGuide {
  display: none;
}
.OpenInAppButton {
  display: none;
}
.MobileAppHeader-downloadLink {
  display: none;
}
.ModalWrap {
  display: none;
}
html, body.ModalWrap-body {
  overflow: auto !important;
}
.ContentItem-expandButton {
  display: none;
}
.RichContent-inner {
  max-height: unset !important;
}
`;function o(e){e.classList.remove("is-collapsed")}function s(e){e.querySelectorAll(".RichContent.is-collapsed").forEach(o)}console.log("\u77E5\u4E4E\u79FB\u52A8\u7AEF\u4FEE\u590D\u6B63\u5728\u8FD0\u884C");GM_addStyle(a);var d=new MutationObserver(e=>{for(let t of e)if(t.target.classList.contains("RichContent")&&t.target.classList.contains("is-collapsed"))o(t.target);else for(let n in t.addedNodes)n.nodeType===Node.ELEMENT_NODE&&n.classList.contains("RichContent")&&o(n)});window.addEventListener("load",function(e){e.stopImmediatePropagation(),s(document),d.observe(document.documentElement,{childList:!0,subtree:!0})});document.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&e.stopImmediatePropagation()},!1);
