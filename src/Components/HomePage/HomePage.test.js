import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from './HomePage';
import * as APIcalls from '../../Helpers/APIcalls';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
    APIcalls.searchFreeEbooksByGenre = jest.fn().mockImplementation(() => ['dog']);
    APIcalls.searchViaAuthorTitleISBN = jest.fn().mockImplementation(() => ['dog']);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when a user types in input field', () => {
    const input = wrapper.find('input');
    console.log(input)
  })

  describe('handleGenreSearch', () => {
    it('should call the searchByGenre API call', () => {
      const button = wrapper.find('button').first();
      
      button.simulate('click', { preventDefault: () => { }, target: {
        name: 'mystery'
      } });

      expect(APIcalls.searchFreeEbooksByGenre).toHaveBeenCalled();
    });

    it('should set state to return of searchByGenre API call', async () => {
      const expected = ['dog']
      APIcalls.searchFreeEbooksByGenre = jest.fn().mockImplementation(() => ['dog']);
      const button = wrapper.find('button').first();

      await button.simulate('click', {
        preventDefault: () => { }, target: {
          name: 'mystery'
        }
      });

      expect(wrapper.state().searchResults).toEqual(expected);
    });
  });

  describe('handleInputSearch', () => {

  });
});