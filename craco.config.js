const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 確保 `__dirname` 指向當前目錄
    },
  },
};
