module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 750,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: "vw",
            landscapeWidth: 568
          }),
          require("autoprefixer")({
            browsers: [
              "defaults",
              "not ie < 9",
              "last 2 versions",
              "> 1%",
              "iOS 7",
              "last 3 iOS versions"
            ]
          })
        ]
      }
    }
  }
};
