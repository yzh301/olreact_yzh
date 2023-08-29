/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 16:18:39
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:18:58
 * @FilePath: \olreact_yzh\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from "@reduxjs/toolkit";
// 引入主题换肤store分库
import themeReducer from "@/store/slices/theme";

export const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme: themeReducer,
    // 可以根据需要在这里继续追加其他分库
  },
});
