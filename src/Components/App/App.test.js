import React from 'react';
import ReactDOM from 'react-dom';
import App, { mapDispatchToProps } from './App';
import { setUser } from '../../redux/actions/actions';

describe('App', () => {
  it('calls dispatch with a setUser action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = setUser();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.setUser();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});