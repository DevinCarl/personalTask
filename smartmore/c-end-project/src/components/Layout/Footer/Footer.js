import React from 'react';
import './Footer.less';

function Footer() {
  return (
    <div className="footer">
      <img className="logo" src={require('../../../assets/logo.png')} />
      <p>MaoMall猫茂商圈</p>
    </div>
  );
}

export default Footer;
