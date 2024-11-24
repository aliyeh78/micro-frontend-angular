const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes: {
    mfe1: 'http://localhost:4201/remoteEntry.js',
    login: 'http://localhost:4202/remoteEntry.js',
    tatto: 'http://localhost:4204/remoteEntry.js',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
