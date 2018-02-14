import React from 'react';
import { mount, render, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import 'jest-styled-components'
import HomeScreen from './HomeScreen';

describe('Button Block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HomeScreen />)
  })
})