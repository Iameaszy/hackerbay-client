import React, { Component } from 'react';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import addWebsiteRequest, { addWebsiteFailure } from '../../actions/addWebsite';
import Card from '../../components/card/card';
import '../../bootstrap-reboot.css';
import './home.css';
import loader from '../../icons/index.squiggly-text-preloader.svg';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: true, data: null };
    this.getWebsites = this.getWebsites.bind(this);
    this.renderField = this.renderField.bind(this);
    this.validation = {
      url: (value) => {
        return value &&
          (!/^(http|https):\/\/[^ "]/i.test(value) ||
            value.split('.').length !== 3)
          ? 'invalid url'
          : undefined;
      },
      required: (value) => (value ? undefined : 'Required'),
    };
  }
  getWebsites() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      return this.setState({ authenticated: false });
    }
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .get('http://localhost:3000/website/1', config)
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => {
        if (err.response.status > 400 && err.response.status < 500) {
          this.setState({ authenticated: false });
        }
        // client error handler here
      });
  }
  componentDidMount() {
    this.getWebsites();
  }

  render() {
    const authenticated = this.state.authenticated;
    if (!authenticated) {
      return <Redirect to="/registration" />;
    }
    const {
      handleSubmit,
      loading,
      loader,
      failure,
      pristine,
      submitting,
      invalid,
      dismiss,
      success,
    } = this.props;

    let data = this.state.data;
    const failureStyle = {
      top: failure ? '0rem' : '-5rem',
    };

    const dismissStyle = {
      position: 'absolute',
      right: '2rem',
      fontSize: '22px',
      cursor: 'pointer',
    };
    const homeFormContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    };
    const { required, url } = this.validation;
    return (
      <section className="Home">
        <div className="Home-form_container" style={homeFormContainerStyle}>
          <h2>Welcome Home</h2>
          <form className="Home-form" onSubmit={handleSubmit}>
            {loading && (
              <span className="Home-form_loading">
                <img src={loader} alt="loading icon" />
              </span>
            )}
            <p style={failureStyle} className="Home-form_server-error">
              {failure}
              <span
                style={dismissStyle}
                className="Home-form_failure-dismiss"
                onClick={() => dismiss()}>
                <i title="dismiss">x</i>
              </span>
            </p>
            <Field
              className="Home-form_input"
              name="name"
              component={this.renderField}
              type="text"
              label="Name"
              placeholder=""
              validate={[required]}
            />

            <Field
              className="Home-form_input"
              name="url"
              component={this.renderField}
              type="text"
              label="Url"
              placeholder="http://yourwebsite"
              validate={[required, url]}
            />

            <div className="Home-form_field">
              <div className="Home-form_control">
                <button
                  type="submit"
                  disabled={pristine || submitting || invalid}
                  className="Home-form_button Home-form_is-link">
                  Add Website
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="Home-card_container" style={homeFormContainerStyle}>
          <h2>Latest</h2>
          {data && <Card data={data.data[0]} />}
        </div>
      </section>
    );
  }
  renderField({ input, label, type, placeholder, meta: { touched, error } }) {
    return (
      <div className="Home-form_field">
        <label className="Home-form_label">{label}</label>
        <div className="Home-form_control-container">
          <input {...input} placeholder={placeholder} type={type} />
        </div>
        {touched &&
          (error && <p className="Home-form_client-error">{error}</p>)}
      </div>
    );
  }
}

Home = reduxForm({
  form: 'home',
})(Home);
const mapStatesToProps = (states) => {
  return {
    loading: states.addWebsite.loading,
    success: states.addWebsite.success,
    failure: states.addWebsite.failure,
    loader,
  };
};
const mapDispatchWithProps = (dispatch) => {
  return {
    dismiss: () => dispatch(addWebsiteFailure(false)),
    onSubmit: (values) => dispatch(addWebsiteRequest(values)),
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchWithProps,
)(Home);
