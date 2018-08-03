import React from "react";
import { connect } from "react-redux";

import "./field-shield.css";

import shieldIt from "../actions/field-shield";
export function fieldShield({ shield, onClick }) {
  const style = shield ? { right: "0px" } : { left: "0px" };
  return (
    <div className="shadow" style={style}>
      <button
        onClick={() => {
          onClick(!shield);
        }}>
        {shield && <span>Register</span>}
        {!shield && <span>Login</span>}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { shield: state.shield };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (prop) => {
      dispatch(shieldIt(prop));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(fieldShield);
