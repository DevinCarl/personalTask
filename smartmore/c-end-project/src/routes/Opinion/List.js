import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, WingBlank, Icon } from 'antd-mobile';
import { Link } from 'dva/router';
import complaints from '../../assets/integral/complaints.png';
import './Opinion.less';


class ListProcessing extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '意见反馈',
    });
  }
  render() {
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
        </div>

        <Link to="feedbackDetails">
          <Card className="opinion-item">
            <Card.Header
              title="2017-08-26 08:20:14"
              extra={<span className="opinion-processing">处理中</span>}
            />
            <Card.Body className="opinion-item-body">
              <div className="opinion-item-left">
                <span className="opinion-item-title">商场设备问题</span>
                <p>
                  我想要反映在商场二楼洗漱间内，洗…
                </p>
              </div>
              <Icon type="right" className="opinion-item-icon" />
            </Card.Body>
          </Card>
        </Link>
        <Link to="feedbackEvaluate">
          <Card className="opinion-item">
            <Card.Header
              title="2017-08-26 08:20:14"
              extra={<span className="opinion-coplete">处理完成</span>}
            />
            <Card.Body className="opinion-item-body">
              <div className="opinion-item-left">
                <span className="opinion-item-title">商场设备问题</span>
                <p>
                  我想要反映在商场二楼洗漱间内，洗…
                </p>
              </div>
              <Icon type="right" className="opinion-item-icon" />
            </Card.Body>
          </Card>
        </Link>
      </WingBlank>
    );
  }
}

ListProcessing.propTypes = {
};

export default connect()(ListProcessing);
