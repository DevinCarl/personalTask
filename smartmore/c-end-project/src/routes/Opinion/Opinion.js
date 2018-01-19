import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { List, WingBlank, WhiteSpace} from 'antd-mobile';
import './Opinion.less';

const Item = List.Item;
const Brief = Item.Brief;

class ListComplete extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '意见反馈',
    });
  }
  render() {
    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        <span className="option-title">请选择要反馈的意见类型</span>
        <Link to="mallEquipmentProblems">
          <Item
            className="opinion-line"
            arrow="horizontal"
            // thumb={require('../../assets/device.png')}
            multipleLine
          >
            商场设备问题 <Brief>灯、洗手台等设备问题</Brief>
          </Item>
        </Link>
        <Item
          className="opinion-line"
          arrow="horizontal"
          // thumb={require('../../assets/life.png')}
          multipleLine
        >
          商场环境问题 <Brief>地上水渍、楼梯间有杂物、水电有问题水电有问题水电有问题水电有问题</Brief>
        </Item>
        <Item
          className="opinion-line"
          arrow="horizontal"
          // thumb={require('../../assets/service.png')}
          multipleLine
        >
          人员服务态度问题 <Brief>人员服务态度不佳、没耐心</Brief>
        </Item>
        <Item
          className="opinion-line"
          arrow="horizontal"
          // thumb={require('../../assets/vip.png')}
          multipleLine
        >
          服务品质问题 <Brief>餐饮不洁、按摩偷懒</Brief>
        </Item>
      </WingBlank>
    );
  }
}


ListComplete.propTypes = {
};

export default connect()(ListComplete);
