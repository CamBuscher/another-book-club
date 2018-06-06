import React from 'react';
import {shallow} from 'enzyme';
import BookClubPage, { mapStateToProps, mapDispatchToProps } from './BookClubPage';
import {removeBookClub, setCurrentClub} from '../../redux/actions/actions';

describe('BookClubPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BookClubPage />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with a removeBookClub action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = removeBookClub();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.removeBookClub();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a setCurrentClub action', () => {
    const dispatch = jest.fn();

    const actionToDispatch = setCurrentClub();

    const mappedProps = mapDispatchToProps(dispatch);

    mappedProps.setCurrentClub();

    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should return the userClubs array', () => {
    const mockState = {
      user: {
        bookClubs: [],
        id: 'asdasd'
      }
    };

    let expected = [];

    const mappedProps = mapStateToProps(mockState).userClubs;

    expect(mappedProps).toEqual(expected);
  });
  
  it('should return the userId', () => {
    const mockState = {
      user: {
        bookClubs: [],
        id: 'asdasd'
      }
    };

    let expected = 'asdasd';

    const mappedProps = mapStateToProps(mockState).userId;

    expect(mappedProps).toEqual(expected);
  });
});
