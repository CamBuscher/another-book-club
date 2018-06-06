import {SignInForm, INITIAL_STATE} from './SignIn';
import SignOutButton from './SignOut';
import {SignUpForm} from './SignUp';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { auth } from '../../firebase';

describe('signInForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignInForm />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with the correct initial state', () => {
    expect(wrapper.state()).toEqual(INITIAL_STATE);
  });

  it('should update state when the input field receives input', () => {
    const input = wrapper.find('input').first();

    input.simulate('change', {target: {
      value: 'hello'
    }});

    expect(wrapper.state().email).toEqual('hello');
  });

  it('should update state when the second input field receives input', () => {
    const input = wrapper.find('input').at(1);

    input.simulate('change', {
      target: {
        value: 'hello'
      }
    });

    expect(wrapper.state().password).toEqual('hello');
  });
  
//   it('should call auth.doSignIn function on submit', async () => {
//     wrapper = mount(<SignInForm />);

//     wrapper.find('input').at(1).simulate('change', {
//       target: {
//         value: ''
//       }
//     });

//     wrapper.find('input').at(0).simulate('change', {
//       target: {
//         value: 'hello'
//       }
//     });

//     wrapper.find('form').simulate('submit', {
//       preventDefault: jest.fn()
//     });

//     await expect(auth.doSignInWithEmailAndPassword).toHaveBeenCalled();
//   });

//   it('should reset initial state on submit', async () => {
//     wrapper = mount(<SignInForm />);

//     wrapper.find('input').at(1).simulate('change', {
//       target: {
//         value: ''
//       }
//     });

//     wrapper.find('input').at(0).simulate('change', {
//       target: {
//         value: 'hello'
//       }
//     });

//     wrapper.find('form').simulate('submit', {
//       preventDefault: jest.fn()
//     });

//     await expect(wrapper.state()).toEqual(INITIAL_STATE);
//   });
});

describe('Sign Out', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignOutButton />);
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call auth.doSignOut', () => {
    wrapper.simulate('click')

    const auth = {
      doSignOut: jest.fn()
    };

    expect(auth.doSignOut).toHaveBeenCalled();
  });
});

describe('Sign Up', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
});