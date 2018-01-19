import React from 'react';
import { connect } from 'dva';
import { Flex, Button } from 'antd-mobile';
import Lauds from './Lauds.js';
import './index.less';
import ImgList from '../../../assets/imgList.png';


class Evaluate extends React.Component {

  render() {
    return (
      <div className="evaluateinfo">
        <div className="stateTime">
          <span>2017-08-26 08:20:14</span>
          <span style={{ color: '#4FC2B9' }}>处理完成</span>
        </div>
        <div className="problem">
          <span>商场设备问题</span>
          <p>我想要反映在商场二楼洗漱间内，洗手池出水出故障，请尽快处理！！！</p>
          <Flex justify="between">
            <Flex.Item className="right"><img src={ImgList} /></Flex.Item>
            <Flex.Item><img src={ImgList} /></Flex.Item>
          </Flex>
        </div>
        <div className="result">
          <span>处理结果</span>
          <p>感谢您的意见，商场已派专人处理完成，再次感谢您对猫贸的支持！</p>
        </div>
        <div className="problem">
          <span>请对本次处理进行评价</span>
          <Lauds />
        </div>
        <div className="btn">
          <Button type="primary" style={{ backgroundColor: '#FE6900', borderColor: '#FE6900' }}>提交</Button>
        </div>
      </div>
    );
  }
}
Evaluate.propTypes = {
};

export default connect()(Evaluate);
