import React from "react";
import { connect } from "react-redux";
import { Header } from "../components/header/index";
import { Footer } from "../components/footer/footer";
import { Route } from "react-router-dom";
import { SharedStyle } from "../components/styles/shared";
import styled from "styled-components";
import img from "../assets/images/1.jpg";
const LayoutStyle = styled.div`
  background: white url(${img}) no-repeat center;
  position: relative;
  background-size: cover;
  padding-top: 100px;
`;
class Home extends React.PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={matchProps => (
          <LayoutStyle>
            <Header />
            <SharedStyle>
              <Component {...matchProps} />s
            </SharedStyle>
            <Footer />
          </LayoutStyle>
        )}
      />
    );
  }
}

export default connect()(Home);
