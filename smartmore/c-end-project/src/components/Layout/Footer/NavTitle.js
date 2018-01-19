import React from 'react';
import './NavTitle.less';

function NavTitle({ props }) {
  return (
    <div className="navTitle">
        <div className="ber"></div>
        <h3>{props.title}</h3>
    </div>
  );
}

export default NavTitle;
