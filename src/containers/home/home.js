import React, { Component } from 'react';
import axios from 'axios';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { addWebsiteRequest, addWebsiteFailure } from '../../actions';
import { listWebsiteRequest } from '../../actions';
import Card from '../../components/card/card';
import '../../bootstrap-reboot.css';
import './home.css';
import loader from '../../icons/index.messenger-typing-preloader.svg';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: true, data: null };
    this.getWebsites = this.getWebsites.bind(this);
    this.renderField = this.renderField.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.timer = null;
    this.validation = {
      url: (value) => {
        return value &&
          (!/^(http|https):\/\/[^ "]/i.test(value) ||
            value.split('.').length !== 3)
          ? 'invalid url'
          : undefined;
      },
      required: (value) => (value ? undefined : 'Required'),
      maxLength15: (value) =>
        value && value.length <= 15
          ? undefined
          : 'name should not be longer than 15 character in length',
    };
    this.requestCounter = 0;
  }
  handleLogout() {
    localStorage.removeItem('token');
    this.props.dispatch(push('/registration'));
  }
  getWebsites() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      return this.setState({ authenticated: false });
    }
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .get('http://localhost:3000/website', config)
      .then((data) => {
        this.setState({ data });
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status > 400 &&
          err.response.status < 500
        ) {
          this.setState({ authenticated: false });
        } else {
          console.log(err);
        }
      });
  }
  componentDidMount() {
    this.getWebsites();
    this.props.dispatch(listWebsiteRequest(this.requestCounter));
    this.requestCounter += 12;
    this.handleScroll();
  }
  componentDidUpdate() {
    if (this.props.failure) {
      this.refs.serverError.scrollIntoView();
    }
  }
  handleScroll() {
    const that = this;
    window.addEventListener('scroll', (e) => {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        if (
          window.pageYOffset >=
          document.documentElement.offsetHeight - window.innerHeight
        ) {
          const { websitesContainer, dispatch } = that.props;
          if (websitesContainer && websitesContainer.fetched >= 12) {
            dispatch(listWebsiteRequest(that.requestCounter));
            that.requestCounter += 12;
          }
        }
      }, 250);
    });
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
      websitesContainer,
      websiteLoading,
    } = this.props;
    let data = this.state.data;
    const failureStyle = {
      top: failure ? '0rem' : '-5rem',
    };

    const { required, url, maxLength15 } = this.validation;
    return (
      <section className="Home-container">
        <div className="Home_nav">
          <h1 className="Home-title">Welcome Home</h1>
          <div className="Home-logout">
            <button
              type="button"
              onClick={this.handleLogout}
              className="Home-logout_button">
              Log out
            </button>
          </div>
        </div>
        <div className="Home">
          <div className="Home-form_container">
            <form className="Home-form" onSubmit={handleSubmit}>
              {loading && (
                <span className="Home-form_loading">
                  <img src={loader} alt="loading icon" />
                </span>
              )}
              <p
                style={failureStyle}
                className="Home-form_server-error"
                ref="serverError">
                {failure}
                <span
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
                validate={[required, maxLength15]}
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
          <div className="Home-card_container">
            <h2 className="Home-card-container_title">Latest</h2>
            {data && <Card data={data.data[0]} width={'65%'} />}
          </div>
        </div>
        <div className="Home-websites">
          {websitesContainer &&
            websitesContainer.websites.map((website, ind) => {
              return <Card data={website} key={ind} />;
            })}
        </div>
        <div>
          {websiteLoading && (
            <p>
              <img src={loader} alt="loading-icon" />
            </p>
          )}
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
    websitesContainer: states.listWebsites.success,
    websiteFailure: states.listWebsites.failure,
    websiteLoading: states.listWebsites.loading,
    loader,
  };
};
const mapDispatchWithProps = (dispatch) => {
  return {
    dismiss: () => {
      dispatch(addWebsiteFailure(false));
    },
    onSubmit: (values) => {
      dispatch(addWebsiteFailure(false));
      dispatch(addWebsiteRequest(values));
    },
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchWithProps,
)(Home);
