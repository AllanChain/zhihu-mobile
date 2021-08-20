const path = require('path')
const banner = require('../src/banner')

const esbuildOption = {
  entryPoints: ['src/index.js'],
  bundle: true,
  write: true,
  format: 'cjs',
  loader: { '.css': 'text' }
}
if (process.env.NODE_ENV === 'dev') {
  esbuildOption.outfile = 'dev/zhihu.user.js'
  esbuildOption.watch = true
  console.log(banner(path.resolve(esbuildOption.outfile)))
} else if (process.env.NODE_ENV === 'prod') {
  esbuildOption.minify = true
  esbuildOption.outfile = 'docs/zhihu.user.js'
  esbuildOption.banner = { js: banner() }
}
require('esbuild').build(esbuildOption)
