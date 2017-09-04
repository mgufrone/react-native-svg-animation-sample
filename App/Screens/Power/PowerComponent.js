import React from 'react';
import { Animated } from 'react-native';

import PowerScreen from './PowerScreen';

const AnimatedPowerScreen = Animated.createAnimatedComponent(PowerScreen);

class PowerComponent extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      connecting: true,
      wattConsumption: 5 * 100,
      highestWattConsumption: 8 * 100,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ connecting: false });
    }, 3.5 * 1000);
  }
  render() {
    return (
      <AnimatedPowerScreen
        isConnecting={this.state.connecting}
        wattConsumption={this.state.wattConsumption}
        highestWattConsumption={this.state.highestWattConsumption}
      />
    );
  }
}

export default PowerComponent;
