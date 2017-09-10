import React from 'react';
import { Animated } from 'react-native';
import Svg, {
  Use,
  Text,
  Defs,
  Circle,
  LinearGradient,
  Stop,
  G,
} from 'react-native-svg';
import { number } from 'prop-types';
import { WaterDrop } from '../../Icons/WaterDrop';
import { AnimatedTemperatureComponent } from './TemperatureComponent';
import { AnimatedCustomPath } from './TemperatureBackgroundTop';
import { Snowflake } from '../../Icons/Snowflake';
import Flame from '../../Icons/Flame';


export default class TemperatureTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      temperatureAnimation: new Animated.Value(props.currentTemperature),
      opacityAnimation: new Animated.Value(0),
      colorAnimation: new Animated.Value(0),
    };
    this.interval = null;
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTemperature !== this.props.currentTemperature) {
      this.changeTemperature(nextProps.currentTemperature);
    }
  }
  getColor(temperature) {
    return temperature < 25 ? 'rgb(69,157,245)' : 'rgb(247,163,67)';
  }
  changeTemperature(temperature) {
    if (this.interval) {
      clearTimeout(this.interval);
    }
    this.interval = setTimeout(() => {
      const parallels = [
        Animated.timing(this.state.temperatureAnimation, {
          toValue: parseInt(temperature, 0),
          duration: 1 * 1000,
        }),
        Animated.timing(this.state.colorAnimation, {
          toValue: temperature > 25 ? 100 : 0,
          duration: 1 * 1000,
        }),
      ];
      Animated.parallel(parallels).start();
    }, 500);
  }
  labelState() {
    return (this.props.currentTemperature > this.state.temperatureAnimation._value ? 'Heating to ' : 'Cooling to').toUpperCase();
  }
  render() {
    const color = this.state.colorAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgb(69,157,245)', 'rgb(247,163,67)'],
    });
    return (<Svg style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} viewBox="0 0 400 550" preserveAspectRatio={'align slice'} >
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="200">
          <Stop offset="0" stopColor="rgb(255,255,255)" stopOpacity="0.1" />
          <Stop offset="0.5" stopColor="rgb(255,255,255)" stopOpacity="0.1" />
          <Stop offset="1" stopColor="rgb(255,255,255)" stopOpacity="0.05" />
        </LinearGradient>
      </Defs>
      <WaterDrop fill={'#fff'} id="WaterDrop" />
      <Flame fill={'#fff'} id="Flame" />
      <Snowflake fill={'#fff'} id="Snowflake" />
      <AnimatedCustomPath
        d="M0 0 H 400 V 400 H 0, M0,400 C100,450 300,450 400,400"
        fill={color}
      />
      <G x="0" y="100">
        <G x="170" y="295">
          <Use href="#WaterDrop" x={0} y={15} width={'20'} height={'20'} />
          <Text x="40" y="0" textAnchor={'middle'} font={{ fontFamily: 'Roboto-Regular' }} fontSize={'20'} fill="white">32%</Text>
        </G>
        <G x="190" y="15">
          <Use href="#Snowflake" x="-5" width={'10'} height={'10'} />
          <Use href="#Snowflake" width={'30'} height={'30'} />
          <Use href="#Snowflake" x="30" y="10" width={'10'} height={'10'} />
        </G>
        <Circle fill="url(#grad)" cx="200" cy="200" r="190" />
        <Text textAnchor="middle" fontSize={'20'} x="200" y="80" fill="white" font={{ fontFamily: 'sans-serif' }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
          {this.labelState()} {this.props.currentTemperature}&deg;
        </Text>
        <AnimatedTemperatureComponent temperature={this.state.temperatureAnimation} textAnchor="middle" x="200" y="100" fill="white" font={{ fontFamily: 'Roboto-Thin', fontSize: 150 }} style={{ color: '#fff', fontFamily: 'Roboto' }} />
      </G>
    </Svg>
    );
  }
}

TemperatureTop.propTypes = {
  currentTemperature: number.isRequired,
};

TemperatureTop.defaultProps = {
  currentTemperature: 0,
};
