import path from 'path';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import analyze from 'rollup-plugin-analyzer';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const banner = `"use client";`;
const entry = './src/index.ts';

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
  }),
  analyze({
    summaryOnly: true,
  }),
  resolve(),
  peerDepsExternal(),
  commonjs(),
  terser({
    compress: false,
  }),
  alias({
    entries: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  }),
];

const rollupConfig = {
  input: entry,
  output: {
    dir: './build',
    format: 'esm',
    banner,
  },
  plugins,
  external: ['react', 'react-dom'],
};

export default rollupConfig;
