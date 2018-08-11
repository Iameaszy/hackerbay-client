import SignIn, { SignInForm } from '../src/components/sign-in-form';
import React from 'react';

import { mount } from 'enzyme';
import { spy, stub, mock, fake } from 'sinon';
import * as actions from '../src/actions';

import reducers from '../src/reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
/////////////////////////////////////////
describe('ContactFormContainer', () => {
  let store;
  let handleSubmit;
  let wrapper;
  let failureSpy = spy(actions, 'failure');
  let successSpy = spy(actions, 'success');
  let loadingSpy = spy(actions, 'loading');
  let onSubmit;

  beforeAll(() => {
    store = createStore(reducers, applyMiddleware(thunk));
    onSubmit = (action, store) => {
      switch (action.type) {
        case 'fail':
          return store.dispatch(actions.failure(action.error));
        case 'load':
          return store.dispatch(actions.loading(true));
        default:
          return store.dispatch(actions.success(action.payload));
      }
    };
    handleSubmit = spy();
    const props = {
      handleSubmit,
    };
    wrapper = mount(
      <Provider store={store}>
        <SignIn {...props} />
      </Provider>,
    );
  });
  it('shows help text when first name is set to blank', () => {
    const input = wrapper.find('input').first();
    const lastInput = wrapper.find('input').last();
    input.simulate('blur');
    lastInput.simulate('blur');
    const inputHelp = wrapper.find('.error');
    expect(inputHelp.first().text()).toBe('Required');
    expect(inputHelp.last().text()).toBe(
      'password must be atleast eight (8) long',
    );
    expect(inputHelp).toHaveLength(2);
  });

  it('submit button should be disabled', () => {
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });

  it('submit button should be enabled', () => {
    const input = wrapper.find('input').first();
    const lastInput = wrapper.find('input').last();

    input.simulate('change', { target: { value: 'easyclick05@gmail.com' } });
    lastInput.simulate('change', { target: { value: 'abcdefghij' } });
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });
  it('submit button should be enabled', () => {
    const input = wrapper.find('input').first();
    const lastInput = wrapper.find('input').last();

    input.simulate('change', { target: { value: 'easyclick05@gmail.com' } });
    lastInput.simulate('change', { target: { value: 'abcdefghij' } });
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });

  it('should submit form', () => {
    wrapper = wrapper.unmount();
    handleSubmit = (val) => {
      onSubmit(
        { type: 'fail', error: 'User with this email already exist' },
        store,
      );
    };
    const props = {
      handleSubmit,
    };
    wrapper = mount(
      <Provider store={store}>
        <SignIn {...props} />
      </Provider>,
    );

    const input = wrapper.find('input').first();
    const lastInput = wrapper.find('input').last();

    input.simulate('change', { target: { value: 'easyclick05@gmail.com' } });
    lastInput.simulate('change', { target: { value: 'abcdefghij' } });

    wrapper.find('form').simulate('submit');
    const serverError = wrapper.find('.server-error');
    expect(failureSpy.callCount).toEqual(1);
    expect(serverError).toHaveLength(1);
    expect(serverError.text()).toBe('User with this email already exist');
  });

  describe('form loader >>', () => {
    beforeAll(() => {
      wrapper = wrapper.unmount();
      handleSubmit = (val) => {
        onSubmit({ type: 'load' }, store);
      };
      const props = { handleSubmit };
      wrapper = mount(
        <Provider store={store}>
          <SignIn {...props} />
        </Provider>,
      );

      const input = wrapper.find('input').first();
      const lastInput = wrapper.find('input').last();

      input.simulate('change', { target: { value: 'easyclick05@gmail.com' } });
      lastInput.simulate('change', { target: { value: 'abcdefghij' } });

      wrapper.find('form').simulate('submit');
    });

    it('should dispatch the loading action', () => {
      expect(loadingSpy.callCount).toEqual(1);
    });

    it('should display loader', () => {
      const loading = wrapper.find('.loading');
      expect(loading).toHaveLength(1);
    });
  });
});
