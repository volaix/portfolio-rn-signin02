import React from 'react'
import { Text, View, Image, ImageBackground, TextInput } from 'react-native'
import styled from 'styled-components/native';
import { SUBTITLE_COLOR, OFFWHITE_COLOR, LESSTHANOFFWHITE_COLOR } from './constants';
import { Icon } from 'react-native-elements';

const inputStyle = {
  borderStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomColor: SUBTITLE_COLOR, 
  height: 40,
  width: '75%',
  alignItems: 'center',
  marginBottom: 10,
  flexDirection: 'row',
}

const RoundedInput = (props) => {
  return (
    <View style={inputStyle}>

    <Icon
     name={props.iconName} 
     color={LESSTHANOFFWHITE_COLOR} 
     type='evilicons'
     iconStyle={{marginLeft: 10}}
     />
      <TextInput
      style={{width: 180, color: LESSTHANOFFWHITE_COLOR, marginLeft: 10, borderBottomColor: 'red', fontSize: 18 }}
    placeholder={props.placeholder}
    placeholderTextColor={SUBTITLE_COLOR}
    secureTextEntry={props.secureTextEntry}
      />

    </View>
  )
}

export default RoundedInput