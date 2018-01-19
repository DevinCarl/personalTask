import React, { Component } from 'react';
import { connect } from 'dva';
import img1 from '../../assets/parking.png';
import img2 from '../../assets/em.png';
import logo from '../../assets/logo.png';
import './index.less';

class Order extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '我的订单',
    });
  }
  render() {
    return (
      <div className="application">
        <ul>
          <li className="application-item">
            <div className="application-title"><img src={logo} alt="" className="application-logo" />猫茂MaoMall</div>
            <p className="application-name">停车订单
              <img className="application-img" src={img1} alt="" />
            </p>
          </li>
          <li className="application-item">
            <div className="application-title"><img src={logo} alt="" className="application-logo" />猫茂MaoMall</div>
            <p className="application-name">邮局订单
              <img className="application-img" src={img2} alt="" />
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(Order);
