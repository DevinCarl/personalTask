import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Icon } from 'antd-mobile';
import { Link } from 'dva/router';
import './IndexPage.less';

// const img_0 = require('../assets/Group.png');
const Merchants = require('../assets/Merchants.png');
const reservation = require('../assets/reservation.png');
const Discount = require('../assets/Discount.png');
const activity = require('../assets/activity.png');
const application = require('../assets/application.png');

const GroupLeft = require('../assets/GroupLeft.png');
const GroupRight = require('../assets/GroupRight.png');

const salad = require('../assets/salad.png');
const hotDrink = require('../assets/hot-drink.png');
const tickets = require('../assets/tickets.png');
const Indoor_navigation = require('../assets/Indoor_navigation.png');
const Wisdom_parking = require('../assets/Wisdom_parking.png');
const go = require('../assets/go.png');

let activitys;
let shops;
let list;
let member = {};

class Home extends Component {
    componentWillMount() {
        ap.setNavigationBar({
            title: 'MaoMall 猫茂天地',
        });
    }
    componentDidMount() {
        // simulate img loading
        let url = window.location.search;
        if (!url) {
            url = this.props.location.search;
        }
        if(url){
            let reg = new RegExp("(^|&)AccessToken=([^&]*)(&|$)", "i");
            let r = url.substr(1).match(reg);
            let AccessToken = unescape(r[2]);
            window.sessionStorage.setItem('AccessToken', AccessToken);
        }
        
    }

    render() {
        const { IndexPage } = this.props;
        if(IndexPage.member){
            if(IndexPage.member.data){
                member = IndexPage.member.data;
            }
        }
        if (IndexPage.list) {
            if (IndexPage.list.data) {
                console.log(IndexPage.list.data)
                activitys = IndexPage.list.data.activitys;//活动数据
                shops = IndexPage.list.data.shops;//推荐商家
            } else {
                activitys = [{
                    id: 1,
                    name: "测试数据"
                }];
                shops = [{
                    shopId: 1,
                    shopType: "好吃的",
                    name: "这是一家店",
                    url: "https://ds.alipay.com/?from=mobileweb"
                }, {
                    shopId: 1,
                    shopType: "好吃的",
                    name: "这是一家店",
                    url: "https://ds.alipay.com/?from=mobileweb"
                }, {
                    shopId: 1,
                    shopType: "好吃的",
                    name: "这是一家店",
                    url: "https://ds.alipay.com/?from=mobileweb"
                }]
            }
        }

        function toActivityDetail(id) {
            this.props.dispatch(routerRedux.push({
                pathname: '/activityDetail',
                query: id
            }));
        }

        list = activitys.map(function (item) {
            let path = {
                pathname: '/activityDetail',
                state: item.id
            }
            return <div className="ber_content_box" key={item.id}>
                <div className="content"
                    onClick={() => { toActivityDetail(item.id) }}>
                    {item.name}
                </div>
            </div>
        })

        return (
            <div className="content">
                <div className="header">
                    <Link to="/personalCenter">
                        <div className={member.gender == 'M' ? 'headerBox male' : 'headerBox female'}>
                            <div className="name">Hello Noel!</div>
                            <div className="welcome">猫茂天地欢迎您!</div>
                            <div className="go">进入我的<div></div></div>
                        </div>
                    </Link>
                </div>

                <div className="nav_lan">
                    <nav className="nav_box clearfix">
                        <a href="alipays://platformapi/startApp?appId=20000238&target=classify&searchSrc=globalMore&cityCode=330100&longitude=120.125631&latitude=30.272183&showSwitch=YES&menus=mg_diccount^mg_all&paramsMap={'mall_id':'2016101000077010000018924940'}" className="p_b10"><img className="nav_box_img1" src={Merchants} alt="" /><div className="nav_title">商户</div></a>
                        <a href="alipays://platformapi/startApp?appId=20000238&amp;target=classify&amp;menus=mg_category^2015112000101686|mg_filter^mi_ding&amp;paramsMap={'mall_id':'2016081500077010000018056968'}" className="p_b10"><img className="nav_box_img1" src={reservation} alt="" /><div className="nav_title">预约</div></a>
                        <Link to="/favourlist" className="p_b10"><img className="nav_box_img3" src={Discount} alt="" /><div className="nav_title">优惠</div></Link>
                        <Link to="/activityMain" className="p_b10"><img className="nav_box_img3" src={activity} alt="" /><div className="nav_title">活动</div></Link>
                        <Link to="/application" className="p_b10"><img className="nav_box_img3" src={application} alt="" /><div className="nav_title">应用</div></Link>
                    </nav>
                </div>

                <div className="navTitle">
                    <div className="ber"></div>
                    <h3>智慧应用</h3>
                </div>
                <div className="navBox">
                    <div className="app">
                        <div className="box-item box-item-left">
                            <a href="#">

                                {/* <img src={Indoor_navigation} alt="" className="bj_img"/> */}
                                <div className="text">室内导航</div>
                            </a>
                        </div>
                        <div className="box-item box-item-right">
                            <a href="http://apmobile.ibosplus.com/?campusId=100001">
                                {/* <img src={Wisdom_parking} alt=""  className="bj_img_r"/> */}
                                <div className="text">智慧停车</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navTitle">
                    <div className="ber"></div>
                    <div className="navTitleBox">
                        <h3>猫茂推荐</h3>
                        <a href="alipays://platformapi/startApp?appId=20000238&target=classify&searchSrc=globalMore&cityCode=330100&longitude=120.125631&latitude=30.272183&showSwitch=YES&menus=mg_diccount^mg_all&paramsMap={'mall_id':'2016101000077010000018924940”}" className="right">
                            <div className="all_mall">全部商户</div>
                            <div className="all_mall_icon"><Icon type="right" /></div>
                        </a>
                    </div>
                </div>
                <div className="navBox">
                    <div className="recmond">
                        <div className="box-item box-item-left">
                            <a href={shops[0].url} key={shops[0].shopId}>
                                <div className="text">
                                    <div className="topsetTEXT">{shops[0].shopType}</div>
                                    <div className="textBox">

                                        {/* <div>{shops[0].name}</div> */}
                                        <div className="title">外婆家</div>
                                        <span>Delicious</span>

                                    </div>
                                </div>
                                <div className="salad">
                                    <img src={require('../assets/salad.png')} />
                                </div>
                            </a>
                        </div>

                        <div className="box-item box-item-right">
                            <div className="box-item-right-top">
                                <a href={shops[1].url} key={shops[1].shopId}>
                                    <div className="text">
                                        <div className="textBox">

                                            <div className="title">{shops[1].name}</div>
                                            <span>Drink</span>

                                        </div>
                                        <div className="topsetTEXT">{shops[1].shopType}</div>
                                    </div>
                                    <div className="img-box">
                                        <img src={require('../assets/hot-drink@2x.png')} />
                                    </div>
                                </a>
                            </div>
                            <div className="box-item-right-bottom">
                                <a href={shops[2].url} key={shops[2].shopId}>
                                    <div className="text">
                                        <div className="textBox">

                                            {/* <div>{shops[0].name}</div> */}
                                            <div className="title">{shops[2].name}</div>
                                            <span>Playful</span>

                                        </div>
                                        <div className="topsetTEXT">{shops[2].shopType}</div>
                                    </div>
                                    <div className="img-box2">
                                        <img src={require('../assets/Group@2x.png')} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navTitle">
                    <div className="ber"></div>
                    <h3>猫茂活动</h3>
                </div>
                {list}
            </div>
        );
    }
}

function mapStateToProps({ IndexPage }) {
    return { IndexPage };
}

Home.propTypes = {
    dispatch: PropTypes.func,
    IndexPage: PropTypes.object,
};

export default connect(mapStateToProps)(Home);
