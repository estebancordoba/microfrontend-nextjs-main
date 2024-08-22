import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mainApp',
        remotes: {
          reactApp: 'ReactApp@http://localhost:3001/remoteEntry.js',
          angularApp: 'angularApp@http://localhost:3002/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
