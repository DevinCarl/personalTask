import React from 'react';
import { connect } from 'dva';
import { Badge } from 'antd-mobile';
import { Link } from 'dva/router';
import './Index.less';
import tag from '../../../assets/tag.png';

function ActivityItem() {
  return (
    <Link to="/activityDetail">
      <div className="activityItem">
        <div className="activityTag">NEW</div>
      </div>
    </Link>
  );
}

ActivityItem.propTypes = {
};

export default connect()(ActivityItem);
