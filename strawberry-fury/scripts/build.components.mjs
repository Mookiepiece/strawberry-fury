/* eslint-disable no-unused-labels */
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import path from 'path';
import fs from 'fs';

const runBuild = async () => {
  Build_Components: {
    const components = fs
      .readdirSync(path.resolve('./src'))
      .filter(n => !n.startsWith('_'))
      .filter(n => fs.statSync(path.resolve('./src', n)).isDirectory());

    const inputOptions = {
      input: components.reduce(
        (map, name) => ({ ...map, [name]: path.resolve(`./src/${name}/index.ts`) }),
        {}
      ), // #1
      plugins: [
        peerDepsExternal(),
        resolve({
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'], // #2
        }),
        babel({
          babelHelpers: 'runtime',
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'], // #3
        }),
      ],
      external: [/@babel\/runtime/, /core-js/, /^@strawberry/, /^@starfall/],
    };
    const outOptions = {
      dir: 'lib',
      entryFileNames: '[name]/index.js',
      format: 'commonjs',
      exports: 'auto',
      paths(i) {
        if (i.startsWith('@starfall')) return i.replace('@starfall', '..');
        if (i.startsWith('@strawberry')) return i.replace('@strawberry', '..'); // #4
      },
    };

    const bundle = await rollup(inputOptions);
    await bundle.write(outOptions);
  }
  Build_Utils: {
    const utils = fs
      .readdirSync(path.resolve('./src/_utils'))
      .map(i => i.split('.').slice(0, -1).join('.'));

    const inputOptions = {
      input: utils.reduce(
        (map, name) => ({ ...map, [name]: path.resolve(`./src/_utils/${name}`) }),
        {}
      ),
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
      external: [/@babel\/runtime/, /core-js/, /^@strawberry/, /^@starfall/],
    };
    const outOptions = {
      dir: 'lib/_utils',
      format: 'commonjs',
      exports: 'auto',
      paths(i) {
        if (i.startsWith('@starfall')) return i.replace('@starfall', '..');
        if (i.startsWith('@strawberry')) return i.replace('@strawberry', '..');
      },
    };

    const bundle = await rollup(inputOptions);
    await bundle.write(outOptions);
  }
};

runBuild();

// #1
// https://rollupjs.org/guide/en/#input
// Unless the output.file option is used,
// generated chunk names will follow the output.entryFileNames option.
// Default: "[name].js"
// when a component wants to have a import from utils or other component directiory
// imports must starts with @strawberry to mark as extenral to avoid to be bundled in.

// #2
// if we dont use typescript plugin, then we need to told rollup our extensions
// this can be remove if we import typescript from 'rollup-plugin-typescript2'

// #3
// we tell babel to process `--extensions` files
// like setting [ test: /.ts/ ] in webpack
// https://babeljs.io/docs/en/babel-preset-typescript

// #4
// https://github.com/rollup/rollup/issues/3814#issuecomment-706588315
// aliasing external modules using output.path
// use @rollup/plugin-alias only if those modules are not external
// eg: ./Button/index.js -> import '@strawberry/utils' -> import '../utils'
// element-plus have did this
// this works even pathes are nested
// eg: ./Button/src/helpers/a.js -> import '@strawberry/utils' -> ./Button/index.(bundle.)js + import '../utils'
// because this only affects the output file which is a single file named lib/button/index.js
// ---
// we use `rollup-plugin-alias` in rollup.bundle.config.js because every imports are internal
// may be we'll using `babel-plugin-module-resolver` to resolve pathes for jest...
// ---
// now we have many resolvers for each build tool
// tsconfig.json                 -> typescript + vscode intellisense
// eslintrc import resolver      -> if `eslint-plugin-import` installed
// rollup config.output.alias    -> rollup (signle component/util)
// rollup-plugin-alias           -> rollup (bundle everything)
// babel-plugin-module-resolver  -> jest

// #5
// we assume that our utils directory has no sub directory
// and when a util file wants import from another util file
// also imports need starts with 🦄 to avoid not to be bundled in.
// same as other components
