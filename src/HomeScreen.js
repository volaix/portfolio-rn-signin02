import React from 'react'
import { View, Text, Alert, ImageBackground } from 'react-native'
import { Button, Avatar, FormLabel, FormInput } from 'react-native-elements'
import styled from 'styled-components'
import RoundedInput from './RoundedInput';
import { OFFWHITE_COLOR, SUBTITLE_COLOR } from './constants';


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
        <Text style={{ color: OFFWHITE_COLOR, fontSize: 50, fontStyle: 'italic', fontWeight: '200', marginBottom: 30 }}>TravelX</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '90%', marginBottom: 20}}>
        <Text style={{fontSize:20, color: SUBTITLE_COLOR}}>Login</Text>
        <Text style={{fontSize:20, color: SUBTITLE_COLOR}}>Signup</Text>
        </View>

        <View style={{ height: 230, width: '90%', borderRadius: 20, backgroundColor: 'rgba(34,47,58,1)', alignItems: 'center'}}>

            <View style={{alignItems: 'center', marginTop: 30, marginBottom: 20}}>
            <RoundedInput iconName='mail' placeholder='Username'/>
            <RoundedInput iconName='lock' placeholder='Password' secureTextEntry/>
            </View>
            
            <Button 
            title='LOGIN' 
            borderRadius={10} 
            containerViewStyle={{borderRadius:10}} 
            backgroundColor='rgba(147,72,79,1)' 
            buttonStyle={{width: 170}}
            color={OFFWHITE_COLOR}
            />
        </View>

        <Text style={{marginTop: 20, color: OFFWHITE_COLOR}}>Need Help ?</Text>

      </ImageBackground>
    )
  }
}

export default HomeScreen