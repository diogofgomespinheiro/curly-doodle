import typescriptPaths from 'rollup-plugin-typescript-paths';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';

export const plugins = [
  typescriptPaths({ tsConfigPath: '../tsconfig.json' }),
  peerDepsExternal(),
  resolve({
    browser: true,
    preferBuiltins: true,
    extensions: ['.ts', '.tsx']
  }),
  commonjs(),
  visualizer(),
  typescript()
];

export default {
  input: './src/index.ts'
};
