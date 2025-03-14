// @craco/craco 的配置文件
const path = require("path");
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定: 使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
          plugins: [
            [
              "postcss-px-to-viewport-8-plugin",
              {
                viewportWidth: 1920, // 设计稿的视口宽度
              },
            ],
          ],
        },
      },
    },
  },
};