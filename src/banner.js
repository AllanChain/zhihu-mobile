const pkg = require('../package.json')
const path = require('path')

const banner = `// ==UserScript==
// @name         ${pkg.displayName}
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// @homepage     ${pkg.homepage}
// @namespace    https://github.com/AllanChain/
// @icon         https://static.zhihu.com/heifetz/favicon.ico
// @include      https://www.zhihu.com/*
// @include      https://zhuanlan.zhihu.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==`

module.exports = function (env) {
  if (env === 'prod') return banner
  const devFileLocation = path.resolve('index.js')
  return banner.replace('// ==/', `// @require      file://${devFileLocation}\n// ==/`)
}
