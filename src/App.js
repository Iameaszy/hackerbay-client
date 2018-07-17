import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  connect
} from 'react-redux';
import SignInForm from './components/sign-in-form';
import LoginForm from './components/login';
class App extends Component {
  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
    const elem = document.querySelector('.shadow');
    elem.style.left = 0;  }
click(props){
  const btn = props.target;
    const elem = btn.parentNode;
    const style = elem.style;
    if(style && style.left){
      style.right = '0px';
      style.left = '';
      btn.textContent = "Register"
    }else{
      style.left = '0px'
      style.right = '';
      btn.textContent = "Login"
    }
}
  render() {
    return <div className="App">
    <div className="shadow">
      <button onClick={this.click}>Login</button>
    </div>
    <LoginForm/>
    <SignInForm/>
    </div>;
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(App);