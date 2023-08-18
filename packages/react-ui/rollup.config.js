import path from 'path';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const plugins = [
  typescript(),
  peerDepsExternal(),
  commonjs(),
  terser(),
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
  },
  plugins,
  peerDepsExternal: ['react', 'react-dom'],
};

export default rollupConfig;
