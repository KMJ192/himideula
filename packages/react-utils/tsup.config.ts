import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  target: 'es2020',
  sourcemap: true,
  banner: {
    js: "'use client'",
  },
  outDir: 'build',
  dts: true,
  minify: true,
  external: ['react', 'react-dom', 'react-router-dom'],
});
