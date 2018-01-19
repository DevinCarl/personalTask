import React from 'react';
import { connect } from 'dva';
import img from '../../assets/explain-img.png';
import logo from '../../assets/logo.png';
import './index.less';


class Explain extends React.Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '极速WIFI',
    });
  }
  render() {
    return (
      <div>
        <ul className="explain-body">
          <li className="explain-item">
            <span className="explain-num">01</span>
            <p className="explain-desc1">打开系统设置/WIFI,于WiFi清单中选取MaoMall；</p>
            <img className="explain-img" src={img} alt="" />
          </li>
          <li className="explain-item">
            <span className="explain-num">02</span>
            <p className="explain-desc">输入手机及验证码；</p>
          </li>
          <li className="explain-item">
            <span className="explain-num">03</span>
            <p className="explain-desc">开始使用WiFi服务。</p>
          </li>
        </ul>
        <div className="explain-end"><img src={logo} alt="" className="explain-logo" />MaoMall猫茂商圈</div>
      </div>
    );
  }
}

Explain.propTypes = {
};

export default connect()(Explain);
