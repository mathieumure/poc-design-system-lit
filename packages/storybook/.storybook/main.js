/**
 * @type @storybook/core-common/StorybookConfig
 */
module.exports = {
  stories: [
    '../../components/**/*.stories.js',
    '../../components/**/*.stories.mdx',
    '../../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/web-components',
  babel: async (options) => {
    Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
      decoratorsBeforeExport: true,
      legacy: false,
    });
    return options;
  },
};
