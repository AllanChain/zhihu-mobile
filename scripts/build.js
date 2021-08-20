require('esbuild').buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  write: true,
  outfile: 'docs/zhihu.user.js',
  format: 'cjs',
  minify: true,
  banner: {
    js: require('../src/banner')('prod')
  }
})
