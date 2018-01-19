import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import './Index.less';
import logo from '../../../assets/logo-white.png';
import round from '../../../assets/round-small.png';

class ActivityDetail extends React.Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '***活动',
    });
  }
  render() {
    return (
      <div className="activityDetail">
        <div className="activityDetail-header">
          <img src={logo} className="activityDetail-header-logo" role="presentation" />
        </div>
        <div className="activityDetail-imgInfo" />
        <div className="activityDetail-detail-title">
          <img className="activityDetail-detail-img" src={round} alt="" />
          <span className="activityDetail-detail-span">活动时间:</span>
        </div>
        <div className="activityDetail-detail-timeInfo">2017.11.07 ~ 2017.12.31</div>
        <div className="activityDetail-detail-title">
          <img className="activityDetail-detail-img" src={round} role="presentation" />
          <span className="activityDetail-detail-span">活动规则:</span>
        </div>
        <div className="activityDetail-detail-info">
          活动期间，凡是订单超过200元均可参与此活动，进入优惠详情页领取下方优惠券，优惠券可在“我的”→“卡券包”中查看。
        </div>
      </div>
    );
  }
}

ActivityDetail.propTypes = {
};

export default connect()(ActivityDetail);
