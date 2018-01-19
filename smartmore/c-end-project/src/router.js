import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Explain from './routes/explain/Index';
import Application from './routes/application/Index';
import ActivityDetail from './routes/Activity/ActivityDetail/Index';
import ActivityMain from './routes/Activity/ActivityMain/Index';
import Favourlist from './routes/Favour/Favourlist/Index';
import FavourDetail from './routes/Favour/FavourDetail/Index';
import PersonalCenter from './routes/personalCenter/PersonalCenter';
import IntegralDesc from './routes/Integral/Desc';
import OpinionList from './routes/Opinion/List';
import Opinion from './routes/Opinion/Opinion';
import FeedbackDetails from './routes/Feedback/Details/Index';
import FeedbackEvaluate from './routes/Feedback/Evaluate/Index';
import Order from './routes/Order/Index';
import NoPointDetail from './routes/PointsDetail/NoPointsDetail';
import PointsDetail from './routes/PointsDetail/PointsDetail';
import Service from './routes/Customer/Service/Index';
import CouponPackage from './routes/Spiron/CouponPackage';
import MallEquipmentProblems from './routes/Spiron/MallEquipmentProblems';
import Grasping from './routes/Grasping/Index';
import ExclusiveService from './routes/ExclusiveService/Index';
import Message from './routes/Message/Index';
import InteractiveRule from './routes/Customer/InteractiveRule/Index';
import ScanPoints from './routes/ScanPoints';
import ScanPointSuccess from './routes/ScanPoints/success';
import ScanPointsError from './routes/ScanPoints/error';


import '../src/routes/global.less';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/explain" exact component={Explain} />
        <Route path="/application" exact component={Application} />
        <Route path="/favourlist" component={Favourlist} />
        <Route path="/favourDetail" component={FavourDetail} />
        <Route path="/activityDetail" component={ActivityDetail} />
        <Route path="/activityMain" component={ActivityMain} />
        <Route path="/personalCenter" component={PersonalCenter} />
        <Route path="/desc" exact component={IntegralDesc} />
        <Route path="/opinionList" exact component={OpinionList} />
        <Route path="/feedbackDetails" component={FeedbackDetails} />
        <Route path="/feedbackEvaluate" component={FeedbackEvaluate} />
        <Route path="/noPointsDetail" component={NoPointDetail} />
        <Route path="/pointsDetail" component={PointsDetail} />
        <Route path="/service" component={Service} />
        <Route path="/couponPackage" component={CouponPackage} />
        <Route path="/mallEquipmentProblems" component={MallEquipmentProblems} />
        <Route path="/order" component={Order} />
        <Route path="/grasping" component={Grasping} />
        <Route path="/exclusiveService" component={ExclusiveService} />
        <Route path="/opinion" component={Opinion} />
        <Route path="/message" component={Message} />
        <Route path="/InteractiveRule" component={InteractiveRule} />
        <Route path="/scanPoints" component={ScanPoints} />
        <Route path="/scanPointsSuccess" component={ScanPointSuccess} />
        <Route path="/scanPointsError" component={ScanPointsError} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
