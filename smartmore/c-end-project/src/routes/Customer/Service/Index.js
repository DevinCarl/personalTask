import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { List } from 'antd-mobile';
import './index.less';

const Item = List.Item;

const Title = (props) => {
  return (
    <div className="title">
      <img className="title_icon" src={require('../../../assets/server_icon.png')} />
      <div className="text">{props.title}</div>
    </div>
  );
};
class Service extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '咨询引导',
    });
  }
  render() {
    return (
      <div className="m-server">
        <img className="banner" src={require('../../../assets/baner.png')} />
        <Title title="服务说明" />
        <div className="module">
          <p className="f-lt moduleText">为客户提供购物中心内部的品牌信息、活动信息、服务设施及店铺电话的查询服务。</p>
        </div>
        <Title title="服务专线" />
        <a href="tel:0571-86677880">
          <Item
            className="line"
            arrow="horizontal"
            thumb={require('../../../assets/phone.jpg')}
            multipleLine
          >
            0571-86677880
          </Item>
        </a>
        <Title title="位置" />
        <Item
          className="line"
          arrow="horizontal"
          thumb={require('../../../assets/address.jpg')}
          multipleLine
        >
          F1(服务台)
        </Item>
      </div>
    );
  }
}

Service.propTypes = {
};

export default connect()(Service);
