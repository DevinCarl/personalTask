import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';

const Title = (props) => {
  return (
    <div className="title">
      <img className="title_icon" src={require('../../assets/server_icon.png')} />
      <div className="text">{props.title}</div>
    </div>
  );
};
class Grasping extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '抓抓乐',
    });
  }
  render() {
    return (
      <div className="m_grasping">
        <Title title="操作流程" />
        <div className="module">
          <div className="item">
            <img className="item_icon" src={require('../../assets/one.png')} />
            <span className="text">请于娃娃机上扫描以下二维码；</span>
          </div>
          <img className="qr_code" src={require('../../assets/QRcode.png')} />
          <div className="item">
            <img className="item_icon" src={require('../../assets/two.png')} />
            <span className="text">娃娃机确认会员身份后，即可抓娃娃咯～</span>
          </div>
        </div>
        <Title title="使用规则" />
        <div className="rule">
          <p>1.XXXXXXXXXXXXXXXXXXXX</p>
          <p>2.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </div>
        <div className="footer">
          <img className="logo" src={require('../../assets/logo.png')} />
          <p>MaoMall猫茂商圈</p>
        </div>
      </div>
    );
  }
}

Grasping.propTypes = {
};

export default connect()(Grasping);
