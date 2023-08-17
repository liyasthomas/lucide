import copy from 'rollup-plugin-copy'

export default defineNitroConfig({
  preset: 'vercel-edge',
  srcDir: '.vitepress',
  routeRules: {
    '/api/**': { cors: false },
  },
  experimental: {
    wasm: true,
  },
  rollupConfig: {
    external: [
      './yoga.wasm?module',
      './resvg.wasm?module',
      './noto-sans-v27-latin-regular.ttf'
    ],
    plugins: [
      copy({
        targets: [
          { src: './node_modules/@vercel/og/dist/yoga.wasm', dest: './.vercel/output/functions/__nitro.func' },
          { src: './node_modules/@vercel/og/dist/resvg.wasm', dest: './.vercel/output/functions/__nitro.func' },
          { src: './node_modules/@vercel/og/dist/noto-sans-v27-latin-regular.ttf', dest: './.vercel/output/static' },
          { src: './node_modules/@vercel/og/dist/noto-sans-v27-latin-regular.ttf', dest: './.vercel/output/functions/__nitro.func' },
        ]
      })
    ]
  },
  esbuild: {
    options: {
      // jsx: 'transform',
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      // include: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.json'],
      // loaders: {
      //   '.js': 'js',
      //   '.jsx': 'jsx',
      //   '.ts': 'ts',
      //   '.tsx': 'tsx',
      // }
    },
  },
})
