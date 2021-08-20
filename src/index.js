/* global GM_addStyle */
import style from './style.css'

function expandRichContent (node) {
  node.classList.remove('is-collapsed')
}

function expandRichContentRecursive (node) {
  node
    .querySelectorAll('.RichContent.is-collapsed')
    .forEach(expandRichContent)
}

console.log('知乎移动端修复正在运行')

GM_addStyle(style)

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

document.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') {
    event.stopImmediatePropagation()
  }
}, false)
