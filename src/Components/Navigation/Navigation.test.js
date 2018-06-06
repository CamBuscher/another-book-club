import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  let wrapper;
   
  it('should match snapshot when given no authUser', () => {
    wrapper = shallow(<Navigation authUser={false} history={{}}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when given an authUser', () => {
    wrapper = shallow(<Navigation authUser={true} history={{}} />);

    expect(wrapper).toMatchSnapshot();
  });
});