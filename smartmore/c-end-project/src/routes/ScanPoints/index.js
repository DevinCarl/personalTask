import React, { Component } from 'react';
import { List, Button } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import request from '../../utils/http';
import './index.less';

const Item = List.Item;


class ScanPoints extends Component {
  constructor(props) {
    super(props)
    // 初始化
    this.state = {
      money: '--',
      shopId: '--',
      shopName: '--',
      useTime: '--',
      seralNum: '--',
      gainScore: '--',
      posId: '--'
    }

    const { dispatch } = this.props;
    let param = location.hash.substr(location.hash.indexOf("?z="));
    // 请求积分详情数据
    request('/member/posscancoderecord' + param, {
      method:'get'
    }).then((res) => {
      var msg = "";
      // 服务器请求返回错误
      if(res.err){
        if(res.err.response && res.err.response.status === 500){
          msg = "抱歉，服务器开小差了，请稍后再试！";
        }else{
          msg = "积分领取失败，请检查网络设置！"
        }
        dispatch(routerRedux.replace({
          pathname: '/scanPointsError',
          search: '?msg=' + encodeURI(msg)
        }));
      }else if(res.data){
        // 请求成功，返回数据
        if(res.data.status === 0){
          // {
          //     "msg": "OK",
          //     "status": 0,
          //     "data": {
          //         "shopId": 11,
          //         "shopName": "麦当劳3214",
          //         "money": 244.8,
          //         "useTime": "2018-01-05 17:41:11",
          //         "seralNum": "158622423",
          //         "gainScore": 0,
          //         "posId": "158866654"
          //     }
          // }
          // 将获取的数据赋值
          this.setState({ 
            money: res.data.data.money,
            shopId: res.data.data.shopId,
            shopName: res.data.data.shopName,
            useTime: res.data.data.useTime,
            seralNum: res.data.data.seralNum,
            gainScore: res.data.data.gainScore,
            posId: res.data.data.posId
          })
        } else{
          // 请求成功，处理返回但是小票已被领取等情况
          // if(res.data.status === 1050305 || res.data.status ===1050304){
            msg = res.data.msg;
            dispatch(routerRedux.replace({
              pathname: '/scanPointsError',
              search: '?msg=' + encodeURI(msg)
            }));
          // }
        }
      }
    })
  }
  
  getPoint() {
    var msg = '';
    const { dispatch } = this.props;
    // 立即领取，发起post请求
    request('/member/posscancoderecord',{
      method:'post',
      body:{
        money: this.state.money,
        shopId: this.state.shopId,
        useTime: this.state.useTime,
        seralNum: this.state.seralNum,
        gainScore: this.state.gainScore,
        posId: this.state.posId,
      }
    }).then(function(res){
      var msg = "";
      // 服务器错误
      if(res.err){
        if(res.err.response && res.err.response.status === 500){
          msg = "抱歉，服务器开小差了，请稍后再试！";
        }else{
          msg = "积分领取失败，请检查网络设置！"
        }
        dispatch(routerRedux.replace({
              pathname: '/scanPointsError',
              search: '?msg=' + encodeURI(msg)
            }));
      }else if(res.data){
        // 领取成功
        if(res.data.status == 0){
          dispatch(routerRedux.push('/scanPointsSuccess'));
        }else{
          // 领取失败
          // if(res.data.status === 1050305 || res.data.status === 1050306){
            msg = res.data.msg;
            dispatch(routerRedux.replace({
              pathname: '/scanPointsError',
              search: '?msg=' + encodeURI(msg)
            }));
          // }
        }
      }
    })
  }
  render() {
    document.title = '扫码积分';
    return (
      <div className="scan-content">
        <List className="point-list">
          <Item extra={this.state.money}>消费金额</Item>
          <Item extra={this.state.shopName}>小南国</Item>
          <Item extra={this.state.useTime}>消费时间</Item>
          <Item extra={this.state.seralNum}>小票流水号</Item>
          <Item extra={this.state.gainScore} className="point-count">积分值</Item>
        </List>
        <div className="scan-footer">
          <Button onClick={this.getPoint.bind(this)}>立即领取</Button>
        </div>
      </div>
    );
  }
}

export default connect()(ScanPoints);
