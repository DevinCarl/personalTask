import React from 'react';
import { connect } from 'dva';
import './index.less';

function Favourlist() {
  return (
    <div className="favourlist body-bac">
      <div className="favourlist-box" />
      <div className="favourlist-box" />
      <div className="favourlist-box" />
    </div>
  );
}

Favourlist.propTypes = {
};

export default connect()(Favourlist);
