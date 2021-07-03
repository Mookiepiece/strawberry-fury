/* eslint-disable no-unused-labels */
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
import fs from 'fs-extra';

const runBuild = async () => {
  Duplicate_Types: {
    fs.copySync(path.resolve('./lib'), path.resolve('./es'));
  }
  Build_Utils: {
    const utils = fs
      .readdirSync(path.resolve('./src'))
      .map(i => i.split('.').slice(0, -1).join('.')); // #6

    const inputOptions = {
      input: utils.reduce((map, name) => ({ ...map, [name]: path.resolve(`./src/${name}`) }), {}),
      plugins: [
        peerDepsExternal(),
        resolve({
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
        }),
        babel({
          babelHelpers: 'runtime',
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
        }),
      ],
    };
    const outOptions = {
      dir: 'lib',
      format: 'commonjs',
      exports: 'auto',
    };
    const outOptions2 = {
      dir: 'es',
      format: 'esm',
    };

    const bundle = await rollup(inputOptions);
    await bundle.write(outOptions);
    const bundle2 = await rollup(inputOptions);
    await bundle2.write(outOptions2);
  }
};

runBuild();
