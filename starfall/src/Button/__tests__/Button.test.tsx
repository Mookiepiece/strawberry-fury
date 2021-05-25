import { shallow } from 'enzyme';
import React from 'react';
import Button from '..';

describe('<Button>', () => {
  it('simulates click events', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toBeCalledTimes(1);
  });
});
