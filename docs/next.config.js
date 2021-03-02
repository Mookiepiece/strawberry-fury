const path = require('path');
const workspaceRoot = path.join(__dirname, '../');

module.exports = {
  async redirects() {
    return [
      {
        source: '/components',
        destination: '/components/button',
        permanent: true,
      },
    ];
  },
  sassOptions: {
    includePaths: [workspaceRoot],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            loader: 'raw-loader',
          },
          // https://github.com/vercel/next.js/issues/4315
          {
            test: /\.(jsx?|tsx?)$/,
            include: [workspaceRoot],
            exclude: /(node_modules|^lib)/,
            use: defaultLoaders.babel,
          },
        ]),
      },
    };
  },
};
