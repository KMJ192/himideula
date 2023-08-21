import path from 'path';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import postCSS from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import autoprefixer from 'autoprefixer';

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
  }),
  peerDepsExternal(),
  commonjs(),
  postCSS({
    extract: true,
    modules: false,
    minimize: true,
    to: path.resolve(__dirname, `build`),
    use: ['sass'],
    plugins: [autoprefixer()],
  }),
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
  input: './src/index.ts',
  output: {
    dir: './build',
    format: 'esm',
    banner: `"use client";import "./index.css";`,
  },
  plugins,
  external: ['react', 'react-dom'],
};

export default rollupConfig;
