import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  connect
} from 'react-redux';
import SignInForm from './sign-in-form';
class App extends Component {
  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  render() {
    return <SignInForm/>;
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(App);