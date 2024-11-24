const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "tatto",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "tatto",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/tatto/src/app/app.component.ts',
        // },
          // For remotes (mfe1)
      name: "tatto",
      filename: "remoteEntry.js",
      exposes: {
          './Module': './projects/tatto/src/app/tatto-web/tatto.module.ts',  // Path to your module
          './AppComponent': './projects/tatto/src/app/app.component.ts',

      },

        // For hosts (please adjust)
        // remotes: {
        //     "microFrontend": "http://localhost:4200/remoteEntry.js",
        //     "shell": "http://localhost:4200/remoteEntry.js",
        //     "mfe1": "http://localhost:4201/remoteEntry.js",
        //     "login": "http://localhost:4202/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
