import copy from 'rollup-plugin-copy';
import { wasm } from '@rollup/plugin-wasm';
import replace from '@rollup/plugin-replace';

export default defineNitroConfig({
  preset: 'vercel-edge',
  srcDir: '.vitepress',
  routeRules: {
    '/api/**': { cors: false },
  },
  // experimental: {
  //   wasm: true,
  // },
  rollupConfig: {
    external: ['@resvg/resvg-wasm/index_bg.wasm', './resvg.wasm?module'],
    plugins: [
      copy({
        targets: [
          { src: './node_modules/@vercel/og/dist/yoga.wasm', dest: './.vercel/output/functions/__nitro.func' },
          { src: './node_modules/@vercel/og/dist/resvg.wasm', dest: './.vercel/output/functions/__nitro.func' }
        ]
      }),
      wasm({
        sync: ['@resvg/resvg-wasm/index_bg.wasm']
      }),
      replace({
        include: ['./**/*.ts'],
        '/* WASM_IMPORT */': 'import resvg_wasm from "./resvg.wasm?module";',
        delimiters: ['', ''],
        preventAssignment: false,
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
