module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        appId: "com.example.app",
        win: {
          target: "portable",
          icon: "src/assets/icon.png"
        },
        mac: {
          target: "dmg",
          icon: "src/assets/icon.png"
        },
        extraResources: [
          {
            from: "./resources/config",
            to: "config/",
            filter: ["**/*"]
          }
        ]
      }
    }
  },
  devServer: {
    port: 3000,
    disableHostCheck: true
  }
};
