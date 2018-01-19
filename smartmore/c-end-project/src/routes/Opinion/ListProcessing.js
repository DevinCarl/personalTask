import React from 'react';
import { connect } from 'dva';
import { Card, WingBlank } from 'antd-mobile';
import complaints from '../../assets/integral/complaints.png';
import './Opinion.less';

function ListProcessing() {
  return (
    <WingBlank>
      <Card className="complaints">
        <Card.Body>
          <h2>我要投诉</h2>
          <img alt="我要投诉" src={complaints} />
        </Card.Body>
      </Card>

      <div>
        <span className="opinion-title">反馈记录</span>
      </div>

      <Card className="opinion-item">
        <Card.Header
          title="2017.08.26 08:20:14"
          extra={<span className="opinion-processing">处理中</span>}
        />
        <Card.Body className="opinion-item-body">
          <div className="opinion-item-left">
            <span className="opinion-item-title">商场设备问题</span>
            <p>
              我想要反映在商场二楼洗漱间内，洗…
            </p>
          </div>
          <div className="opinion-item-right">></div>
        </Card.Body>
      </Card>
    </WingBlank>
  );
}

ListProcessing.propTypes = {
};

export default connect()(ListProcessing);
