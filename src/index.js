/* global GM_addStyle */

function expandRichContent (node) {
  node.classList.remove('is-collapsed')
}

function expandRichContentRecursive (node) {
  node
    .querySelectorAll('.RichContent.is-collapsed')
    .forEach(expandRichContent)
}

console.log('知乎移动端修复正在运行')

GM_addStyle(`
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
}`)

const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    if (
      m.target.classList.contains('RichContent') &&
      m.target.classList.contains('is-collapsed')
    ) {
      expandRichContent(m.target)
    } else {
      for (const node in m.addedNodes) {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.classList.contains('RichContent')
        ) {
          expandRichContent(node)
        }
      }
    }
  }
})

window.addEventListener('load', function (event) {
  event.stopImmediatePropagation()
  expandRichContentRecursive(document)
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  })
})
