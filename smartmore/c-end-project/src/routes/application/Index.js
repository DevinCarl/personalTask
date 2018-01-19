import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import img1 from '../../assets/application-1.png';
import img2 from '../../assets/application-2.png';
import logo from '../../assets/logo.png';
import './index.less';


class Application extends React.Component {
  componentWillMount() {
    ap.setNavigationBar({
      title: '应用',
    });
  }
  render() {
    return (
      <div className="application">
        <ul>
          <li className="application-item" >
            <Link to="/explain">
              <div className="application-title"><img src={logo} alt="" className="application-logo" />猫茂MAOMALL</div>
              <p className="application-name">极速WiFi
                <img className="application-img" src={img1} alt="" />
              </p>
            </Link>
          </li>
          <li className="application-item">
            <div className="application-title"><img src={logo} alt="" className="application-logo" />猫茂MAOMALL</div>
            <p className="application-name">门店邮局
              <img className="application-img" src={img2} alt="" />
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

Application.propTypes = {
};

export default connect()(Application);
