import React from 'react';
import { connect } from 'dva';
import { WingBlank, Flex } from 'antd-mobile';
import './index.less';
import ImgList from '../../../assets/imgList.png';


class Evaluate extends React.Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '意见反馈',
    });
  }
  render() {
    return (
      <div className="evaluateinfo-detail">
        <WingBlank>
          <div className="stateTime">
            <span>2017-08-26 08:20:14</span>
            <span style={{ color: '#008CFF' }}>处理中</span>
          </div>
          <div className="problems">
            <span>商场设备问题</span>
            <p>我想要反映在商场二楼洗漱间内，洗手池出水出故障，请尽快处理！！！</p>
            <Flex justify="between">
              <Flex.Item className="right"><img src={ImgList} /></Flex.Item>
              <Flex.Item><img src={ImgList} /></Flex.Item>
            </Flex>
            <Flex justify="between">
              <Flex.Item className="right"><img src={ImgList} /></Flex.Item>
              <Flex.Item><img src={ImgList} /></Flex.Item>
            </Flex>
            <Flex justify="between">
              <Flex.Item><img src={ImgList} /></Flex.Item>
            </Flex>
          </div>

        </WingBlank>
      </div>
    );
  }
}
Evaluate.propTypes = {
};

export default connect()(Evaluate);
