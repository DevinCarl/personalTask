import React from 'react';
import { connect } from 'dva';
import './index.less';
// import logo from '../../../assets/logo-gray.png';

import activeFav from '../../../assets/fav-active.png';
import inActiveFav from '../../../assets/fav-inactive.png';

class FavourDetail extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      hasGet: false,
      get: false
    }
  }
  componentWillMount() {
    ap.setNavigationBar({
      title: '消费抵停车费',
    });
  }
  showModal() {
    this.setState({ hasGet: true, get: true });
    setTimeout(() => {
      this.setState({ hasGet: false });
    }, 3000);
  }

  render() {
    const html = "<p style='margin: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; font-size: 16px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;'>                  <span style='margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 13px;'>双十一又双叒叕来了</span></p>";
    return (
      <div className="favourDetail">
        <div className="favourDetail-banner">
          {/* <img src={logo} className="favourDetail-banner-logo" alt="" />
          <div className="favourDetail-header">
            来店
          </div>
          <div className="favourDetail-header">
            免费停车
          </div> */}
          <img src={require('../../../assets/favourDetail-banner.png')} alt="" />
        </div>
        <div className="favourDetail-list">
            <div className="favour-content"
                dangerouslySetInnerHTML={{
                    __html: "<p style='margin: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; font-size: 16px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;'>                  <span style='margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 13px;'>双十一又双叒叕来了</span></p>"
                }}>
            </div>
            <div className="favour-content"
                dangerouslySetInnerHTML={{
                    __html: "<p style='margin: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; font-size: 16px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;'>                  <span style='margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 13px;'>双十一又双叒叕来了</span></p>"
                }}>
            </div>
            <div className="favour-content"
                dangerouslySetInnerHTML={{
                    __html: "<p style='margin: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; font-size: 16px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;'><span style='margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 13px;'><img src='http://i1.mallcoo.cn//mc/53v6c143-77b9-49ea-a663-4ce86cc87eb9_800x1_3_0_0.gif' alt=''><br></span></p>"
                }}>
            </div>
        </div>
        <div className="favourDetail-list">
          <div className="favourDetail-round" />
          <div className="favourDetail-span">
            <span className="favourDetail-title">优惠时间:</span>
            <div className="favourDetail-timeInfo">2017.11.07 至 2017.12.31</div>
          </div>
        </div>
        <div className="favourDetail-list">
          <div className="favourDetail-round" />
          <div className="favourDetail-span">
            <span className="favourDetail-title">优惠规则:</span>
            <div className="favourDetail-content">活动期间，凡是订单超过200元均可参与此活动，进入优惠详情页领取下方优惠券，优惠券可在“我的”→“卡券包”中查看。</div>
          </div>
        </div>
        <div className="favourDetail-favour" onClick={() => { this.showModal() }}>
          <div className="item">
            <img src={this.state.get ? inActiveFav : activeFav} alt="" />
            <div className="info">
              <div className={this.state.get ? "info-header inactive" : "info-header active"}>猫茂停车场</div>
              <div className={this.state.get ? "info-body inactive" : "info-body active"}>3小时免费停车券</div>
              <div className={this.state.get ? "info-footer inactive" : "info-footer active"}>使用期限：2017.11.07 至 2017.12.31</div>
            </div>
            <div className={this.state.get ? "info-right inactive" : "info-right active"}>立即领取</div>
          </div>
        </div>
        <div className="favourDetail-favour" onClick={() => { this.showModal() }}>
          <div className="item">
            <img src={this.state.get ? inActiveFav : activeFav} alt="" />
            <div className="info">
              <div className={this.state.get ? "info-header inactive" : "info-header active"}>猫茂停车场</div>
              <div className={this.state.get ? "info-body inactive" : "info-body active"}>2小时免费停车券</div>
              <div className={this.state.get ? "info-footer inactive" : "info-footer active"}>使用期限：2017.11.07 至 2017.12.31</div>
            </div>
            <div className={this.state.get ? "info-right inactive" : "info-right active"}>立即领取</div>
          </div>
        </div>
        <div className="favourDetail-favour" onClick={() => { this.showModal() }}>
          <div className="item">
            <img src={this.state.get ? inActiveFav : activeFav} alt="" />
            <div className="info">
              <div className={this.state.get ? "info-header inactive" : "info-header active"}>猫茂停车场</div>
              <div className={this.state.get ? "info-body inactive" : "info-body active"}>1小时免费停车券</div>
              <div className={this.state.get ? "info-footer inactive" : "info-footer active"}>使用期限：2017.11.07 至 2017.12.31</div>
            </div>
            <div className={this.state.get ? "info-right inactive" : "info-right active"}>立即领取</div>
          </div>
        </div>

        <div className={this.state.get ? 'favourDetail-button favour-has-get' : 'favourDetail-button'} onClick={() => { this.showModal() }}>

          { this.state.get ? '已全部领取' : '领取全部优惠券' }
        </div>
        {this.state.hasGet && <div className="favourDetail-pop">
          <img src={require('../../../assets/favourDetail-round.png')} alt="" />
          <div className="favourDetail-pop-success">领取成功！</div>
          <div className="favourDetail-pop-info">您已成功领取优惠券，可在<span>“我的-卡券包”</span>中查看</div>
        </div>}
      </div>
    );
  }

}

FavourDetail.propTypes = {
};

export default connect()(FavourDetail);
