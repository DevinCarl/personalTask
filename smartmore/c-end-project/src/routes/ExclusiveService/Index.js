import React, {Component} from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import './index.less';
import { List, Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

const Title = (props) => {
  return (
    <div className={`title ${props.class}`}>
      <img alt="" className="title_icon" src={require('../../assets/server_icon.png')} />
      <div className="text">{props.title}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div className="m_modal" style={{ display: props.visible ? 'block' : 'none'}}>
      <div className="container">
        {
          props.children
        }
      </div>
    </div>
  );
};

class ExclusiveService extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      data: ['', '', ''],
      initialHeight: 200,
    };
  }
  componentWillMount() {
    ap.setNavigationBar({
      title: '客户服务',
    });
  }
  componentDidMount() {
     // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  showModal() {
    this.setState({ isShow: true });
    setTimeout(() => {
      this.setState({ isShow: false });
    }, 3000);
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="m_exclusive_service">
        <Title title="专属服务" />
        <div className="banner">
          <div className="banner_left"></div>
          <WingBlank>
            <Carousel
              className="my-carousel"
              autoplay={true}
              infinite
              selectedIndex={1}
              swipeSpeed={35}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              <Link to="grasping" style={hProp}>
                <img
                  src={require('../../assets/zhuazhuale_bg.png')}
                  alt=""
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                      initialHeight: null,
                    });
                  }}
                />
              </Link>
              <Link to="grasping" style={hProp}>
                <img
                  src={require('../../assets/zhuazhuale_bg.png')}
                  alt=""
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                      initialHeight: null,
                    });
                  }}
                />
              </Link>
              <a onClick={() => this.showModal()} style={hProp}>
                <img
                  src={require('../../assets/zhuazhuale_bg1.png')}
                  alt=""
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                      initialHeight: null,
                    });
                  }}
                />
              </a>
            </Carousel>
          </WingBlank>
          <div className="banner_right"></div>
        </div>
        <Title title="其他服务" class="margin-top-20" />
        <div className="item_box">
          <Link to="service">
            <Item
              className="line"
              arrow="horizontal"
              thumb={require('../../assets/Integrated.png')}
              multipleLine
            >
              综合服务 <Brief>为顾客提供会员卡服务、失物认领、礼品发放</Brief>
            </Item>
          </Link>
          <Link to="service">
            <Item
              className="line"
              arrow="horizontal"
              thumb={require('../../assets/member.png')}
              multipleLine
            >
              会员服务 <Brief>为猫茂会员提供书吧、特色服务、积分积...</Brief>
            </Item>
          </Link>
          <Link to="service">
            <Item
              className="line"
              arrow="horizontal"
              thumb={require('../../assets/caring.png')}
              multipleLine
            >
              贴心服务 <Brief>为顾客提供母婴室、自动存储柜、ATM提...</Brief>
            </Item>
          </Link>
          <Link to="service">
            <Item
              className="line"
              arrow="horizontal"
              thumb={require('../../assets/convenience.png')}
              multipleLine
            >
              便民服务 <Brief>为顾客提供冷热水、急救药箱、干湿纸巾...</Brief>
            </Item>
          </Link>
        </div>
        <Modal
          visible={this.state.isShow}
          transparent
        >
          <div className="modal">
            <img onClick={() => this.setState({ isShow: false })} alt="" className="close" src={require('../../assets/close.png')} />
            <h4 className="modal_title">暂无此服务</h4>
            <p className="text">亲！要到下一个级别才可以使用这些服务哦！</p>
          </div>
        </Modal>
      </div>
    );
  }
}

ExclusiveService.propTypes = {
};

export default connect()(ExclusiveService);
