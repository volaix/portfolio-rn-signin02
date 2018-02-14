import React from 'react';
import { mount, render, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import HomeScreen from './HomeScreen';
import 'jest-styled-components'


it('renders correctly', () => {
  const tree = renderer.create(<HomeScreen/>).toJSON()
  expect(tree).toMatchSnapshot();
});