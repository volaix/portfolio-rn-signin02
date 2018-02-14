import React from 'react'
import { View, Text, Alert, ImageBackground } from 'react-native'
import { Button, Avatar, FormLabel, FormInput } from 'react-native-elements'
import styled from 'styled-components'
import { OFFWHITE_COLOR, SUBTITLE_COLOR } from './constants';
import LoginModule from './components/LoginModule';

const HeaderText = styled.Text`
  color: ${OFFWHITE_COLOR};
  font-size: 50; 
  font-style: italic;
  font-weight: 200;
  margin-bottom: 30;
`


const imageBackgroundStyle = {
  flex: 1,
  width: '100%',
  height: undefined,
  backgroundColor: 'rgba(0,0,0,0)',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
}


class HomeScreen extends React.Component {
  onPressGetData = () => {
    console.log('you have press onpressgetdata')
  }

  render() {
    return (
      <ImageBackground
        source={require('./imgs/diego-ph-222506.jpg')}
        style={imageBackgroundStyle}
      >

        <HeaderText>TravelX</HeaderText>

        <LoginModule />

        <Text style={{ marginTop: 20, color: OFFWHITE_COLOR }}>Need Help ?</Text>

      </ImageBackground>
    )
  }
}

export default HomeScreen