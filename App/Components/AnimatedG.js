import React from 'react';
import { Animated } from 'react-native';
import { G } from 'react-native-svg';

export class CustomG extends React.Component {
  render() {
    const { y, opacity, children } = this.props;
    return (
      <G y={y} fillOpacity={opacity} {...this.props}>
        {children}
      </G>
    );
  }
}
export const AnimatedG = Animated.createAnimatedComponent(CustomG);
