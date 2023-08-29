/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 15:20:13
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:48:05
 * @FilePath: \olreact_yzh\src\pages\entry\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/header";
import { useSelector } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { PrivateRoute } from "@/router";

import "./entry.styl";

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const { darkAlgorithm, defaultAlgorithm } = theme;
function Entry() {
  // 获取store中的主题配置
  const globalTheme = useSelector((state) => state.theme);
  // Ant Design主题变量
  let antdTheme = {
    // 亮色/暗色配置
    algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
  };
  // 应用自定义主题色
  if (globalTheme.colorPrimary) {
    antdTheme.token = {
      colorPrimary: globalTheme.colorPrimary,
    };
  }
  // 获得路由钩子
  const location = useLocation();
  return (
    <PrivateRoute>
      <ConfigProvider theme={antdTheme}>
        <div className="M-entry">
          <Header title={location.pathname} />
          <div className="main-container">
            <Outlet />
          </div>
        </div>
      </ConfigProvider>
    </PrivateRoute>
  );
}

export default Entry;
