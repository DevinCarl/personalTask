import React, {Component} from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs, Button, List } from 'antd-mobile';
import './PointsDetail.less';
import p1 from '../../assets/point.png';

const Item = List.Item;


const TabPane = Tabs.TabPane;

class PointsDetail extends Component {
  scan = () => {
    const { dispatch } = this.props;
    // console.log('scaning');
    ap.scan(function (res) {
      // var res = {
      //   code: "http://crmdemo.smartmore.cn:8001/mobile1210/#/scanPoints?z=18A9AF30B0DB326C%7COiSJqE%7CL%7C1588666542%7C402%7CElqMLn9e%7C1586224342%7C%7C%7C"
      // }
      var codeStr = res.code.substr(res.code.indexOf("?z="));
      dispatch(routerRedux.push({
        pathname: '/ScanPoints',
        search: codeStr
      }));
    });
  }
  render(){
    document.title= "积分详情";
    const { PersonalCenter } = this.props;

    let tab=1;
    try{
      let url = window.location.search;
      if(!url) {
          url = this.props.location.search;
      }
      let reg = new RegExp("(^|&)tab=([^&]*)(&|$)", "i");
      let r = url.substr(1).match(reg);
      tab = unescape(r[2]);
      console.log(tab);
    }catch(err){}

    let xfScore = {
      score:100
    };
    let hdScore = {
      score:100
    };
    if(PersonalCenter.score.data){
      xfScore = PersonalCenter.score.data[0];
      hdScore = PersonalCenter.score.data[1];
    };

    return (
      <div className="points_detail">
        <span className="dividers">|</span>
        <Tabs className="tag_container" initialPage="2" page="2" swipeable={false} useOnPan={false}>
          <TabPane className="tag_title" tab="消费积分" key="1">
            {/* <div className="_control _control_fix">
              <div className="points_detail_container">
                <div className="points_circle_container">
                  <div className="points_circle_img">
                    <div className="points_detail_title">消费积分</div>
                    <div className="points_detail_number">{xfScore.score}</div>
                  </div>
                  <div className="points_detail_buttons">
                    <div className="points_detail_button">
                      <a href="https://render.alipay.com/p/h5/code-strategy-mall/www/consumer-recording.html?mallId=2017070600077010000034639246">
                        <Button className="points_rule_button">自动积分</Button>
                      </a>
                      <div className="points_button_desc">自动帮你累加每笔支付宝消费</div>
                    </div>
                    <div className="points_detail_button">
                      <Button className="points_rule_button">扫码积分</Button>
                      <div className="points_button_desc">扫码小票也可以积分</div>
                    </div>
                  </div>
                </div>
              </div>

              <List renderHeader={() => '11-8'} className="detail_list">
                <Item extra={'100分'}>抓猫猫</Item>
                <Item extra={'150分'}>爱的铁拳</Item>
              </List>
            </div> */}

            <div className="_control">
              <div className="image_logo">
                <img src={p1} alt="" />
              </div>
              <div className="image_tip">
                亲~ 马上开始记录你的积分吧！体验专属的会员服务！
              </div>
            </div>
            <div className="btn_group">
              <div className="btn_item_container">
                <a href="https://render.alipay.com/p/h5/code-strategy-mall/www/consumer-recording.html?mallId=2017070600077010000034639246">
                  <Button className="btn_item">自动积分</Button>
                </a>
                <div className="btn_description">自动帮你累加每笔支付宝消费</div>
              </div>
              <div className="btn_item_container">
                {/* <Link to="/scanPoints"> */}
                <Button id="J_btn_scanQR" className="btn_item" onClick={this.scan.bind(this)}>扫码积分</Button>
                {/* </Link> */}
                <div className="btn_description">扫码小票也可以积分</div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="互动积分" key="2">
            {/* <div className="_control _control_fix">
              <div className="points_detail_container">
                <div className="points_circle_container">
                  <div className="points_circle_img">
                    <div className="points_detail_title">互动积分</div>
                    <div className="points_detail_number">{hdScore.score}</div>
                  </div>
                  <div className="points_detail_buttons">
                    <div className="points_detail_button">
                      <Link to="InteractiveRule">
                        <Button className="points_rule_button">积分规则</Button>
                      </Link>
                      <div className="points_button_desc">了解如何获取互动积分</div>
                    </div>
                    <div className="points_detail_button">
                      <Button className="points_rule_button">我要积分</Button>
                      <div className="points_button_desc">查看可参加的互动活动</div>
                    </div>
                  </div>
                </div>
              </div>

              <List renderHeader={() => '11-8'} className="detail_list">
                <Item extra={'100分'}>德克士炸鸡（猫贸店）</Item>
                <Item extra={'125分'}>耐克运动用品（猫贸店）</Item>
              </List>
              <List renderHeader={() => '11-6'} className="detail_list">
                <Item extra={'100分'}>德克士炸鸡（猫贸店）</Item>
                <Item extra={'125分'}>耐克运动用品（猫贸店）</Item>
              </List>
            </div> */}

            <div className="_control">
              <div className="image_logo">
                <img src={p1} alt="" />
              </div>
              <div className="image_tip">
                亲~ 马上开始记录你的积分吧！体验专属的会员服务！
              </div>
            </div>
            <div className="btn_group">
              <div className="btn_item_container">
                <Link to="InteractiveRule">
                  <Button className="btn_item">积分规则</Button>
                </Link>
                <div className="btn_description">了解如何获取互动积分</div>
              </div>
              <div className="btn_item_container">
                <Button className="btn_item">我要积分</Button>
                <div className="btn_description">查看可参加的互动活动</div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
};

PointsDetail.propTypes = {
};
function mapStateToProps({PersonalCenter}) {
  return {PersonalCenter};
}
export default connect(mapStateToProps)(PointsDetail);
