/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 14:48:42
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:33:31
 * @FilePath: \olreact_yzh\src\components\header\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import { Button, Card } from "antd";
import { MoonOutlined, ThemeOutlined, SunOutlined } from "@/components/extraIcons";
// 引入Redux
import { useSelector, useDispatch } from "react-redux";
// 从主题换肤store分库引入setDark方法
import { setDark } from "@/store/slices/theme";
import ThemeModal from "@/components/themeModal";
import { globalConfig } from "@/globalConfig";
import "./header.styl";

function Header(props) {
  // 获取redux派发钩子
  const dispatch = useDispatch();
  // 获取store中的主题配置
  const theme = useSelector((state) => state.theme);

  // 接收来自父组件的数据
  const { title, info } = props;

  // 是否显示主题色选择对话框
  const [showThemeModal, setShowThemeModal] = useState(false);

  // 如果info存在，则执行info()
  info && info();
  return (
    <Card className="M-header">
      <div className="header-wrapper">
        <div className="logo-con">Header:{title}</div>
        <div className="opt-con">
          {theme.dark ? (
            <Button
              icon={<SunOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(false));
              }}
            ></Button>
          ) : (
            <Button
              icon={<MoonOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(true));
              }}
            ></Button>
          )}

          {
            // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
            globalConfig.customColorPrimarys && globalConfig.customColorPrimarys.length > 0 && (
              <Button
                icon={<ThemeOutlined />}
                shape="circle"
                onClick={() => {
                  setShowThemeModal(true);
                }}
              ></Button>
            )
          }
        </div>
      </div>
      {
        // 显示主题色换肤对话框
        showThemeModal && (
          <ThemeModal
            onClose={() => {
              setShowThemeModal(false);
            }}
          />
        )
      }
    </Card>
  );
}

export default Header;
