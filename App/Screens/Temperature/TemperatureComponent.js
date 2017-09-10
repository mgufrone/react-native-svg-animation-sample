import React from 'react';
import { Animated } from 'react-native';
import {
  Text,
} from 'react-native-svg';

export class TemperatureComponent extends React.Component {
  render() {
    const { temperature, ...props } = this.props;
    return (
      <Text {...this.props} textAnchor="middle" fill="white" font={{ fontFamily: 'Roboto-Thin', fontSize: 150 }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
        {parseInt(temperature)}&deg;
      </Text>
    );
  }
}
export const AnimatedTemperatureComponent = Animated.createAnimatedComponent(TemperatureComponent);
