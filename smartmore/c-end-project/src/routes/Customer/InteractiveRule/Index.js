import React, { Component } from 'react';
import { connect } from 'dva';
import Footer from '../../../components/Layout/Footer/Footer';
import './index.less';

class InteractiveRule extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '互动积分规则',
    });
  }
  render() {
    return (
      <div className="InteractiveRule">
        <ul className="InteractiveRule-body">
          <li className="InteractiveRule-item">
            <p className="InteractiveRule-desc">
                <span className="InteractiveRule-desc-title">互动积分：</span>
                根据会员在猫茂商场上的互动状况给予的奖励分，在商场中或是与客户端上参与越多商场互动，即可获取更高奖励。
            </p>
          </li>
          <li className="InteractiveRule-item">
            <div className="InteractiveRule-item-contaner">
              <img className="InteractiveRule-item-line" src={require('../../../assets/line.png')} />
              <span className="InteractiveRule-item-title">积分来源</span>
              <img className="InteractiveRule-item-line" src={require('../../../assets/line.png')} />
            </div>
          </li>
          <li className="InteractiveRule-item">
            <span className="InteractiveRule-num">01</span>
            <p className="InteractiveRule-desc1">反馈建议协同打造优质商场环境；</p>
          </li>
          <li className="InteractiveRule-item">
            <span className="InteractiveRule-num">02</span>
            <p className="InteractiveRule-desc1">参加线上线下商城互动游戏。</p>
          </li>
          <li className="InteractiveRule-item">
            <img className="InteractiveRule-img" src={require('../../../assets/wifi.png')} alt="" />
          </li>
        </ul>
        <Footer />
      </div>
    );
  }
}

InteractiveRule.propTypes = {
};

export default connect()(InteractiveRule);
