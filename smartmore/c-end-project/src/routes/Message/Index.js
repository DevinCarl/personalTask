import React, { Component } from 'react';
import { connect } from 'dva';
import { List, WingBlank, WhiteSpace} from 'antd-mobile';
import './index.less';

const Item = List.Item;
const Brief = Item.Brief;
class Message extends Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '消息通知列表',
    });
  }
  render() {
    return (
      <div>
        <WhiteSpace className="message-list-item" size="lg" />
        <List className="message-list">
          <Item
            extra="10:30"
            align="top"
            thumb={require('../../assets/red.png')}
          >
            <span>
              标题标题标题
            </span>
            <Brief>提示类容提示类容提示类容提示类容提示类容提示类容提示类容提示类容</Brief>
          </Item>
          <Item
            extra="10:30"
            align="top"
            thumb={require('../../assets/red.png')}
          >
            标题标题标题<Brief>提示类容提示类容提示类容提示类容提示类容提示类容提示类容提示类容</Brief>
          </Item>
          <Item
            extra="11/08"
            align="top"
            thumb={require('../../assets/gray.png')}
          >
            标题标题标题<Brief>提示类容提示类容提示类容提示类容提示类容提示类容提示类容提示类容</Brief>
          </Item>
          <Item
            extra="11/06"
            align="top"
            thumb={require('../../assets/gray.png')}
          >
            标题标题标题<Brief>提示类容提示类容提示类容提示类容提示类容提示类容提示类容提示类容</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

Message.propTypes = {
};

export default connect()(Message);
