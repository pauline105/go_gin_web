// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // 在这里你可以遍历 webpackConfig.module.rules，
        // 找到针对 scss modules 的 loader 配置并做修改
        // 例如：修改 localIdentName 格式
        webpackConfig.module.rules.forEach(rule => {
          if (Array.isArray(rule.oneOf)) {
            rule.oneOf.forEach(one => {
              if (one.test && one.test.toString().includes('module.scss')) {
                one.use.forEach(loaderConfig => {
                  if (
                    loaderConfig.loader &&
                    loaderConfig.loader.includes('css-loader') &&
                    loaderConfig.options &&
                    loaderConfig.options.modules
                  ) {
                    // 修改 css-loader modules 配置
                    loaderConfig.options.modules = {
                      localIdentName: "[name]__[local]___[hash:base64:5]"
                    };
                  }
                });
              }
            });
          }
        });
        return webpackConfig;
      }
    }
  };
  