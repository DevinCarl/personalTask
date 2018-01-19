import React from 'react';
import { Tabs, Button } from 'antd-mobile';
import { Link } from 'dva/router';
import './PointsDetail.less';
import p1 from '../../assets/point.png';


const TabPane = Tabs.TabPane;

const PointsDetail = () => {
  return (
    <div className="points_detail">
      <span className="dividers">|</span>
      <Tabs className="tag_container" initialPage={1} animated useOnPan={false}>
        <TabPane className="tag_title" tab="消费积分" key="1">
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
              <Button className="btn_item">自动积分</Button>
              <div className="btn_description">自动帮你累加每笔支付宝消费</div>
            </div>
            <div className="btn_item_container">
              <Link to="/scanPoints">
                <Button className="btn_item">扫码积分</Button>
              </Link>
              <div className="btn_description">扫码小票也可以积分</div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="互动积分" key="2">
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
              <Button className="btn_item">积分规则</Button>
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
};

PointsDetail.propTypes = {
};

export default PointsDetail;
