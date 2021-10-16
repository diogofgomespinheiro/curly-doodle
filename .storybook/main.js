const prettierConfig = require('../.prettierrc.js');

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
  ]
};
