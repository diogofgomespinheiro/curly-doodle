import pkg from '../package.json';

import config, { plugins } from './rollup.config.common';

export default Object.assign(config, {
  output: {
    name: 'Curly Doodle',
    file: `dist/${pkg.name}.dev.js`,
    format: 'cjs',
    exports: 'named'
  },
  plugins: plugins.concat([])
});
