require('esbuild').build({
  entryPoints: ['./index.ts'],
  bundle: true,
  platform: 'node',
  //outDir: 'src',
  outfile: '../src/index.js',
  sourcemap: true,
  target: 'node20',
  external: Object.keys(require('./package.json').dependencies ?? {}),
});
