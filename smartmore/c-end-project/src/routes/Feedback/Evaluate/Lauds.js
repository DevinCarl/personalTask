import React from 'react';
import { connect } from 'dva';
import './index.less';
import stars from '../../../assets/stars.png';
import starsO from '../../../assets/stars-o.png';

class Evaluate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      length: 5,
      laudnum: 0,
    };
  }
  render() {
    const laud = (index) => {
      this.setState({
        laudnum: index + 1,
      });
    };
    const starsList = [];
    for (let i = 0; i < this.state.length; i += 1) {
      if (this.state.laudnum > i) {
        starsList.push(<img src={stars} onClick={() => { laud(i); }} className="img" key={i} />);
      } else {
        starsList.push(<img src={starsO} onClick={() => { laud(i); }} className="img" key={i} />);
      }
    }
    return (
      <div className="lauds">
        {starsList}
      </div>
    );
  }
}
Evaluate.propTypes = {
};

export default connect()(Evaluate);
