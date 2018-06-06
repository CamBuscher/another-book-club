import React from 'react';
import { shallow } from 'enzyme';
import { Wysiwyg, mapStateToProps, mapDispatchToProps } from './Wysiwyg';
import { addCommentToClub } from '../../redux/actions/actions';

describe('wysiwyg', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Wysiwyg addComment={jest.fn()} currentClub={{comments: []}}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with a addCommentToClub action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = addCommentToClub();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.addComment();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the currentClub', () => {
    const mockState = {
      user: {
        bookClubs: [],
        id: 'asdasd'
      },
      currentClub: {}
    };

    let expected = { bookClubs: [], id: 'asdasd' };

    const mappedProps = mapStateToProps(mockState).user;

    expect(mappedProps).toEqual(expected);
  });
});