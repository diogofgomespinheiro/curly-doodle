const path = require('path');

const prettierConfig = require('../.prettierrc.js');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: prettierConfig
        }
      }
    },
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    'storybook-addon-outline'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@themes': resolve('../src/styles/themes'),
      '@atoms/*': resolve('../src/components/atoms'),
      '@molecules/*': resolve('../src/components/molecules'),
      '@organisms/*': resolve('../src/components/organisms'),
      '@layouts/*': resolve('../src/components/layouts')
    };

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
