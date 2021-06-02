import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    }),
    alias({
      entries: {
        '@strawberry': path.resolve(__dirname, '../src'),
        '@starfall': path.resolve(__dirname, '../../starfall/src'),
      },
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    }),
  ],
  external: [/@babel\/runtime/, /core-js/],
};
