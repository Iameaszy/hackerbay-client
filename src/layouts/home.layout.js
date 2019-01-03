import React from "react";
import { connect } from "react-redux";
import { Header } from "../components/header/index";
import { Footer } from "../components/footer/footer";
import { Route } from "react-router-dom";
import { SharedStyle } from "../components/styles/shared";
import styled from "styled-components";
class Home extends React.PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={matchProps => (
          <React.Fragment>
            <Header />
            <SharedStyle>
              <Component {...matchProps} />s
            </SharedStyle>
          </React.Fragment>
        )}
      />
    );
  }
}

export default connect()(Home);
