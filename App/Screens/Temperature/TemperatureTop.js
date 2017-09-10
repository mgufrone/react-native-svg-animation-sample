import React from 'react';
import { Animated, Easing } from 'react-native';
import Svg, {
  Path,
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

const TemperatureComponent = ({ temperature }) => (
  <G>
    <Text textAnchor="middle" y="300" fill="white" font={{ fontFamily: 'Roboto-Thin', fontSize: 150 }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
      {temperature}&deg;
    </Text>
  </G>
);

export const AnimatedTemperature = Animated.createAnimatedComponent(Text);

export default class TemperatureTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      temperatureAnimation: new Animated.Value(0),
    };
  }
  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.temperatureAnimation, {
        toValue: 100,
        duration: 1 * 1000,
      }).start(() => console.log(this.state.temperatureAnimation.setValue(0)));
    }, 1000);
  }
  render() {
    return (<Svg style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} viewBox="0 0 400 550" preserveAspectRatio={'align slice'} >
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="200">
          <Stop offset="0" stopColor="rgb(255,255,255)" stopOpacity="0.1" />
          <Stop offset="0.5" stopColor="rgb(255,255,255)" stopOpacity="0.1" />
          <Stop offset="1" stopColor="rgb(255,255,255)" stopOpacity="0.05" />
        </LinearGradient>
      </Defs>
      <WaterDrop fill={'#fff'} id="WaterDrop" />
      <Path d="M0 0 H 400 V 400 H 0, M0,400 C100,450 300,450 400,400" fill="#449FF9" />
      <G x="0" y="100">
        <G x="170" y="295">
          <Use href="#WaterDrop" x={0} y={0} width={'30'} height={'30'} />
          <Text x="50" y="0" textAnchor={'middle'} font={{ fontFamily: 'Roboto-Regular' }} fontSize={'20'} fill="white">32%</Text>
        </G>
        <Circle fill="url(#grad)" cx="200" cy="200" r="190" />
        <Text x="200" y="30" textAnchor={'middle'} font={{ fontFamily: 'FontAwesome' }} fontSize={'30'} fill="white" >&#xf2dc;</Text>
        <Text textAnchor="middle" fontSize={'20'} x="200" y="80" fill="white" font={{ fontFamily: 'sans-serif' }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
              COOLING TO 21&deg;
        </Text>
        <AnimatedTemperature textAnchor="middle" x="200" y="100" fill="white" font={{ fontFamily: 'Roboto-Thin', fontSize: 150 }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
          {this.state.temperatureAnimation}
        </AnimatedTemperature>
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
