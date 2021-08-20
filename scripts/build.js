require('esbuild').buildSync({
  entryPoints: ['src/index.js'],
  bundle: true,
  write: true,
  outfile: 'dist/zhihu.user.js',
  format: 'cjs',
  minify: true,
  banner: {
    js: require('../src/banner')('prod')
  }
})
