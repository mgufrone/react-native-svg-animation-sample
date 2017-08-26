import React from 'react'
import {View, Text} from 'react-native'

export default (props) => {
  return (<Text
    style={{color: props.focused ? 'red' : 'black'}}
  >{props.title}
  </Text>)
};