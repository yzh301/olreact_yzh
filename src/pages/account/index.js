/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-08-29 15:19:27
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-08-29 16:13:22
 * @FilePath: \olreact_yzh\src\pages\account\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./account.styl";

function Account() {
  // 创建路由钩子
  const navigate = useNavigate();
  return (
    <div className="P-account">
      <h1>Account Page</h1>
      <div className="ipt-con">
        <Button
          type="primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          返回登录
        </Button>
      </div>
    </div>
  );
}

export default Account;
