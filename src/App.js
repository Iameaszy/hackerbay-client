import React, { Component } from 'react';
import './App.css';
import fav1 from './images/fav1.jpeg';
import fav4 from './images/fav3.jpeg';
import { connect } from 'react-redux';
import SignInForm from './containers/signup-form/sign-in-form';
import LoginForm from './containers/login-form/login';
import Shield from './components/shield/field-shield';

const style = {
  display: 'none',
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={fav1} style={style} alt="" />
        <img src={fav4} style={style} alt="" />
        <Shield />
        <LoginForm />
        <SignInForm />
      </div>
    );
  }
}

export default connect()(App);
