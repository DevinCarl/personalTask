import React, { PropTypes, Component } from 'react';
import { Grid, Badge, Progress, Toast } from 'antd-mobile';
import { connect } from 'dva';
import { Link } from 'dva/router';
import './PersonalCenter.less';

const data = [
  {
    icon: require('../../assets/personalCenter/integral.png'),
    text: '积分详情',
    path: 'pointsDetail',
  },
  {
    icon: require('../../assets/personalCenter/service.png'),
    text: '客户服务',
    path: 'exclusiveService',
  },
  {
    icon: require('../../assets/personalCenter/order.png'),
    text: '我的订单',
    path: 'order',
  },
  {
    icon: require('../../assets/personalCenter/pocket.png'),
    text: '卡券包',
    path: 'couponPackage',
  },
  {
    icon: require('../../assets/personalCenter/reservation.png'),
    text: '预约排号',
    path: '',
  },
  {
    icon: require('../../assets/personalCenter/feedback.png'),
    text: '意见反馈',
    path: 'opinionList',
  },
];
class User extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '我的',
    });
  }
  link = (path) => {
    const { history } = this.props;
    history.push(path, '');
  }
  render() {
    const { dispatch, history, PersonalCenter } = this.props;
    let userInfo = {
      avatar: '',
      userId: 'mallcoo',
      levleName: '铜卡',
      currentScore: 435,
      currentPercent: 43.5,
      totalScore: 1000
    };
    let rate = 1;
    if (PersonalCenter.list && PersonalCenter.list.data) {
      userInfo = PersonalCenter.list.data;
      rate = 100 / userInfo.totalScore;
    }
    return (
      <div className="personalCenter-body">
        <div className="personalCenter-above-info">
          <div className="personalCenter-info">
            <div className="msg">
              <Link to="/message">
                <div className="msg-icon">
                  <span className="msg-new"></span>
                </div>
              </Link>
            </div>
            <div className="photo">
              <div className="img">
                {/* <img src={userInfo.avatar} /> */}
                <img src={require('../../assets/personalCenter/person-head-girl.png')} />
              </div>
            </div>
            <div className="info">
              <div className="info-content">
                <div className="nickname">{userInfo.name}Shery</div>
                <div className="gender-male"></div>
                <span className="level">{userInfo.levelName}黄金卡</span>
              </div>
            </div>

            <div className="score">
              <div className="score-content">
                <div className="process-container">
                  <Progress
                    percent={userInfo.currentPercent * rate}
                    position="normal"
                    unfilled={false}
                    appearTransition
                  />
                </div>
                <div className="info-box">
                  <div className="integral">积分</div>
                  <div className="integral-process"><span className="integral-process-current">{userInfo.currentScore}/</span><span>{userInfo.totalScore}</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="personalCenter-function-div">
          <Grid
            data={data}
            hasLine={false}
            columnNum={3}
            activeClassName="grad-active"
            onClick={_el => this.link(_el.path)}
            renderItem={(item, index) => (<div className="am-grid-item-inner-content column-num-3">
              <div className="img-box"><img src={item.icon} className={`img${index}`} alt="" /></div>
              <div className="text-box">
                <span className="am-grid-text">{item.text}</span>
              </div>
            </div>)
            }
          />
        </div>

        <div className="foot-icon">
          <img src={require('../../assets/personalCenter/logo.png')} />
          <span className="text-label">MaoMall猫茂天地</span>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ PersonalCenter }) {
  return { PersonalCenter };
}

User.propTypes = {
  dispatch: PropTypes.func,
  PersonalCenter: PropTypes.object,
};

export default connect(mapStateToProps)(User);
