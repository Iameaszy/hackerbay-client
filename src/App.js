import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import SignInForm from './sign-in-form';
class App extends Component {
  submit(values) {
    console.log(values);
  }
  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return <SignInForm onSubmit={this.submit} />;
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default,
  };
}

export default connect(
  mapStateToProps,
  { defaultFunction },
)(App);
