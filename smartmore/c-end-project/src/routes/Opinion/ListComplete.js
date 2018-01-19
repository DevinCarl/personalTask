import React from 'react';
import { connect } from 'dva';
import { Card, WingBlank } from 'antd-mobile';
import { Link } from 'dva/router';
import complaints from '../../assets/integral/complaints.png';
import './Opinion.less';

function ListComplete() {
  return (
    <WingBlank>
      <Link to="opinion">
        <Card className="complaints">
          <Card.Body>
            <h2>我要投诉</h2>
            <img alt="我要投诉" src={complaints} />
          </Card.Body>
        </Card>
      </Link>

      <div>
        <span className="opinion-title">反馈记录</span>
        <span className="opinion-all">查看全部＞</span>
      </div>

      <Link to="feedbackDetails">
        <Card className="opinion-item">
          <Card.Header
            title="2017.08.26 08:20:14"
            extra={<span className="opinion-coplete">处理完成</span>}
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
      </Link>
    </WingBlank>
  );
}

ListComplete.propTypes = {
};

export default connect()(ListComplete);
