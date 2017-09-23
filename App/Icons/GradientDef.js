import React from 'react'
import {LinearGradient, Stop} from 'react-native-svg'

const GradientDef = ({colors, id, ...props}) =>  (
  <LinearGradient id={id} {...props}>
    {colors.map((color, key) => <Stop key={key} offset={`${color.offset}%`} stopColor={color.color} />)}
  </LinearGradient>
);

GradientDef.defaultProps = {
  id: "StrokeGradient"
}

export default GradientDef;
