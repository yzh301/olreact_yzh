/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 14:09:54
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:51:23
 * @FilePath: \olreact_yzh\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
// import App from '../App'
import { RouterProvider } from "react-router-dom";
import { globalRouters } from "./router";
import { ConfigProvider } from "antd";
import { store } from "@/store";
import { Provider } from "react-redux";
import "./mock";
// 引入Ant Design中文语言包
import zhCN from "antd/locale/zh_CN";
// 全局样式
import "@/common/styles/frame.styl";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  </Provider>
);

