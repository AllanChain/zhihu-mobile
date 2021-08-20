// ==UserScript==
// @name         知乎移动端修复
// @version      1.0.0
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
function t(e){e.classList.remove("is-collapsed")}function i(e){e.querySelectorAll(".RichContent.is-collapsed").forEach(t)}console.log("\u77E5\u4E4E\u79FB\u52A8\u7AEF\u4FEE\u590D\u6B63\u5728\u8FD0\u884C");GM_addStyle(`
.DownloadGuide {
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
body.ModalWrap-body {
  overflow: auto !important;
}
.ContentItem-expandButton {
  display: none;
}
.RichContent-inner {
  max-height: fit-content !important;
}`);var a=new MutationObserver(e=>{for(let n of e)if(n.target.classList.contains("RichContent")&&n.target.classList.contains("is-collapsed"))t(n.target);else for(let o in n.addedNodes)o.nodeType===Node.ELEMENT_NODE&&o.classList.contains("RichContent")&&t(o)});window.addEventListener("load",function(e){e.stopImmediatePropagation(),i(document),a.observe(document.documentElement,{childList:!0,subtree:!0})});
