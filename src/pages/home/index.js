/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 14:49:36
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:45:49
 * @FilePath: \olreact_yzh\src\pages\home\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { useNavigate } from "react-router-dom";
import { Button, theme, Modal } from "antd";
import { logout, goto } from "@/api";

import "./home.styl";

const { useToken } = theme;
function Home() {
  // 创建路由钩子
  // const navigate = useNavigate();

  // 获取Design Token
  const { token } = useToken();

  const [modal, contextHolder] = Modal.useModal();

  // 退出登录
  const exit = () => {
    // 把之前的Modal改为modal
    modal.confirm({
      title: "是否退出登录？",
      onOk() {
        logout();
      },
    });
  };
  return (
    <div className="P-home">
      <h1 style={{ color: token.colorText }}>Home Page</h1>
      <div className="ipt-con">
        <Button
          onClick={() => {
            goto("/login");
          }}
        >
          组件外跳转
        </Button>
      </div>
      <div className="ipt-con">
        <Button type="primary" onClick={exit}>
          返回登录
        </Button>
      </div>
      {
        // 这是最终解决Modal.method跟随换肤的关键，contextHolder在组件DOM中随便找个地方放就行
        contextHolder
      }
    </div>
  );
}

export default Home;
