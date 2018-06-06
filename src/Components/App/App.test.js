import React from 'react';
import ReactDOM from 'react-dom';
import App, { mapDispatchToProps } from './App';
import {shallow} from 'enzyme';
import { setUser } from '../../redux/actions/actions';

describe('App', () => {
  it('should match snapshot', () => {
    let store = {subscribe: jest.fn(), getState: jest.fn(), dispatch: jest.fn()};
    let wrapper = shallow(<App store={store}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with a setUser action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = setUser();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.setUser();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});