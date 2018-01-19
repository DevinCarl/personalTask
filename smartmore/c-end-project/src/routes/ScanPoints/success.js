import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'dva/router';

import './index.less';

class ScanPointsSuccess extends Component {
  render() {
    document.title = '领取结果';
    return (
      <div className="scan-content-success">
        <div className="tip">
          <img src={require('../../assets/point-success.png')} alt="成功" />
          <div className="text">领取成功</div>
        </div>
        <div className="scan-footer">
          <Link to="/">
            <Button type="ghost">返回首页</Button>
          </Link>
        </div>
        <div className="scan-overlow" />
      </div>
    );
  }
}
ScanPointsSuccess.propTypes = {
};

export default ScanPointsSuccess;

