import React from 'react';
import { bool, string } from 'prop-types';
import { Text } from 'react-native';
import CircularSlider from '../../Components/CircularSlider';

export const PowerIcon = props => (<Text
  style={{ color: props.focused ? 'red' : 'black' }}
>
  <CircularSlider
    startAngle={0}
    angleLength={3.14}
    onUpdate={this.onUpdate}
    segments={1}
    strokeWidth={1}
    radius={2}
    gradientColorFrom="#DA3E00"
    gradientColorTo="#DA3E00"
  />
  {props.title}
</Text>);

PowerIcon.propTypes = {
  focused: bool.isRequired,
  title: string.isRequired,
};
export default PowerIcon;
