import React from 'react'
import styled from 'styled-components/native'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount, render } from 'enzyme';
import HomeScreen from './HomeScreen';

it('Renders the Screen', () => {
  const tree = renderer.create(
    <HomeScreen />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});