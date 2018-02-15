import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import HomeScreen from './HomeScreen';

const Button = styled.button`
  color: red;
`

test('it works', () => {
  const tree = renderer.create(<HomeScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})