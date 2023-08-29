/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 16:53:30
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:53:52
 * @FilePath: \olreact_yzh\src\setupProxy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 反向代理配置
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    // 开发环境API路径匹配规则
    "^/api",
    createProxyMiddleware({
      // 要代理的真实接口API域名
      target: "http://xxxx",
      changeOrigin: true,
    })
  );
};
