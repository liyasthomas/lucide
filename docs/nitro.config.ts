export default defineNitroConfig({
  preset: 'vercel-edge',
  srcDir: '.vitepress',
  routeRules: {
    '/api/**': { cors: false },
  },
  experimental: {
    wasm: true,
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
