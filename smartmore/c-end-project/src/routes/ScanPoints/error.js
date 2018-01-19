import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';

class ScanPointsError extends Component {
  render() {
    document.title = '领取结果';
    let result = decodeURI(location.hash.substr(location.hash.indexOf('?msg=')+5));
    return (
      <div className="scan-content-error">
        <div className="tip">
          <img src={require('../../assets/point-error.png')} alt=" 失败" />
          <div className="text">{result}</div>
        </div>
        <div className="scan-overlow" />
      </div>
    );
  }
}
ScanPointsError.propTypes = {
};

export default connect()(ScanPointsError);

