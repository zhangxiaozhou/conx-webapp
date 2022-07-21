const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#99A522',
              "@layout-header-background": '#666666',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};