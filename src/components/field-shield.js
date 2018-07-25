import React from "react";
import { connect } from "react-redux";

import "./field-shield.css";

import shieldIt from "../actions/field-shield";
export function fieldShield({ shield, dispatch }) {
  const style = shield ? { right: "0px" } : { left: "0px" };
  return (
    <div className="shadow" style={style}>
      <button
        onClick={() => {
          dispatch(shieldIt(!shield));
        }}>
        {shield && <span>Login</span>}
        {!shield && <span>Register</span>}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return { shield: state.shield };
};

export default connect(mapStateToProps)(fieldShield);
