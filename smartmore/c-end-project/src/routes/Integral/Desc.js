import React, { Component } from 'react';
import { connect } from 'dva';
import logo from '../../assets/logo.png';
import desc from '../../assets/integral/desc.png';
import './Desc.less';

class Desc extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '扫码积分说明',
    });
  }
  render() {
    return (
      <div>
        <div className="integral-desc">
          <span>01</span><h5>请将收银小票保持平整；</h5>
          <img src={desc} alt="积分说明" />
        </div>
        <div className="integral-desc">
          <span>02</span><h5 className="second">打开支付宝的扫一扫，扫描收银小票上的二维码，扫描成功即可登录此次消费积分；</h5>
        </div>
        <div className="integral-end"><img src={logo} alt="" className="explain-logo" />MaoMall猫茂商圈</div>
      </div>
    );
  }
}

Desc.propTypes = {
};

export default connect()(Desc);
