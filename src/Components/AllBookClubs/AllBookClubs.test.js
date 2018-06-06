import React from 'react';
import {AllBookClubs, mapStateToProps, mapDispatchToProps } from './AllBookClubs';
import { updateBookClubs } from '../../redux/actions/actions';
import {shallow} from 'enzyme';

describe('AllBookClubs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllBookClubs 
      store={{getState: jest.fn()}}
      user={{bookClubs: {}}}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with a removeBookClub action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = updateBookClubs();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.updateBookClubs();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  
  it('should return the userId', () => {
    const mockState = {
      user: {
        bookClubs: [],
        id: 'asdasd'
      }
    };

    let expected = {bookClubs: [], id: 'asdasd'};

    const mappedProps = mapStateToProps(mockState).user;

    expect(mappedProps).toEqual(expected);
  });

  describe('renderClubs', () => {
    it('should return a bookclub div', () => {
      wrapper.state().clubs = [{clubName: 'whoo'}];
      const result = wrapper.instance().renderClubs()

      expect((result)[0].type).toEqual('div');
    });
  });
});