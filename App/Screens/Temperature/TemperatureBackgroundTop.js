import React from 'react';
import {
  Animated,
} from 'react-native';
import {
  Path,
} from 'react-native-svg';

export class CustomPath extends React.Component {
  render() {
    console.log('props', this.props);
    return (<Path {...this.props} />);
  }
}

export const AnimatedCustomPath = Animated.createAnimatedComponent(CustomPath);
