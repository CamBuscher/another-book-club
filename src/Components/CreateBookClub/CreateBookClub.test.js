import React from 'react';
import {updateBookClubs} from '../../redux/actions/actions';
import {CreateBookClub, mapDispatchToProps, mapStateToProps} from './CreateBookClub';
import {shallow} from 'enzyme';

describe('CreateBookClub', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CreateBookClub updateBookClubs={jest.fn()}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with a updateBookClubs action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = updateBookClubs();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.updateBookClubs();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the user', () => {
    const mockState = {
      user: {
        bookClubs: [],
        id: 'asdasd'
      }
    };

    let expected = { bookClubs: [], id: 'asdasd' };

    const mappedProps = mapStateToProps(mockState).user;

    expect(mappedProps).toEqual(expected);
  });

  it('should update state when passed correct propKey', () => {
    wrapper.instance().byPropKey('description', 'hello');
    expect((wrapper.state()).description).toEqual('');
  });
});