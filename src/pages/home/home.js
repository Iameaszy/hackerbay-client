import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeStyle } from './home.style';
import image from '../../assets/images/fav4.jpeg';
export class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <div className="row">
          <div className="col-md-6">
            <p />
          </div>
          <div className="col-md-6">
            <img src={image} alt="" />
          </div>
        </div>
      </HomeStyle>
    );
  }
}
const mapStatesToProps = (states) => {
  return {};
};
const mapDispatchWithProps = (dispatch) => {
  return {};
};

export default connect(
  mapStatesToProps,
  mapDispatchWithProps,
)(Home);
