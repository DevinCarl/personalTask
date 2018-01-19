import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import './index.less';

class Favourlist extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '优惠列表',
    });
  }
  render() {
    return (
      <div className="favourlist body-bac">
        <a href="alipays://platformapi/startApp?appId=20000238&target=classify&searchSrc=globalMore&cityCode=330100&longitude=120.125631&latitude=30.272183&showSwitch=YES&menus=mg_diccount^mg_all&paramsMap={'mall_id':'2016101000077010000018924940'}">
          <div className="favourlist-box">
            <div className="item"><img src={require('../../../assets/fave/yhsj.png')} alt={''} /></div>
          </div>
        </a>
        <Link to="/favourDetail">
          <div className="favourlist-box">
            <div className="item"><img src={require('../../../assets/fave/mftc.png')} alt={''} /></div>
          </div>
        </Link>
        <Link to="/favourDetail">
          <div className="favourlist-box">
            <div className="item"><img src={require('../../../assets/fave/hda.png')} alt={''} /></div>
          </div>
        </Link>
        <Link to="/favourDetail">
          <div className="favourlist-box">
            <div className="item"><img src={require('../../../assets/activityItem1.png')} alt={''} /></div>
          </div>
        </Link>
      </div>
    );
  }
}

Favourlist.propTypes = {
};

export default connect()(Favourlist);
