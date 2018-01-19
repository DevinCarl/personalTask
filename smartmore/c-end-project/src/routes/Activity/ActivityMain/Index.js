import React from 'react';
import { connect } from 'dva';
import './Index.less';
import { Link } from 'dva/router';
import activityStoreActive from '../../../assets/activityStore.png';
import activityStore from '../../../assets/active-store.png';
import activityAction from '../../../assets/activityAction.png';

class ActivityMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
  }
  componentWillMount() {
    ap.setNavigationBar({
      title: '活动',
    });
  }
  render() {
    return (
      <div className="activityMain">
        <div className="activityMain-segment">
          <div className={`activityMain-segment-left ${this.state.activeTab == 1 ? 'active' : ''}`} onClick={() => { this.setState({ activeTab: 1 }) }}>
            <img src={this.state.activeTab == 1 ? activityStoreActive : activityStore} role="presentation" />
            <p>商场活动</p>
            <div className="bottom-border" />
          </div>
          <div className="activityMain-segment-vertical " />
          <div className={`activityMain-segment-left ${this.state.activeTab == 2 ? 'active' : ''}`} onClick={() => { this.setState({ activeTab: 2 }) }} >
            <img src={activityAction} role="presentation" />
            <p>互动活动</p>
            <div className="bottom-border" ></div>
          </div>
        </div>
        {this.state.activeTab == 1 && <div className="activityMain-items">
          <Link to="/activityDetail">
            <div className="activityItem item1">
              <div className="activityTag">NEW</div>
            </div>
          </Link>
          <Link to="/activityDetail">
            <div className="activityItem item2">
              <div className="activityTag">NEW</div>
            </div>
          </Link>
        </div>}
        {this.state.activeTab == 2 && <div className="activityMain-items">
        <Link to="/activityDetail">
            <div className="activityItem item1">
              <div className="activityTag">NEW</div>
            </div>
          </Link>
          <Link to="/activityDetail">
            <div className="activityItem item2">
            </div>
          </Link>
        </div>}
      </div>
    );
  }

}

ActivityMain.propTypes = {
};

export default connect()(ActivityMain);
