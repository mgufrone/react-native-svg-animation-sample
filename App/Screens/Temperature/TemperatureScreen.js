import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {
  Path,
  Text,
  Defs,
  Circle,
  TSpan,
  LinearGradient,
  Stop,
  G,
} from 'react-native-svg';

export default class TemperatureScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true,
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <Svg style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} viewBox="0 100 400 400" preserveAspectRatio={'meet'} >
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="200">
            <Stop offset="0" stopColor="rgb(255,255,255)" stopOpacity="0.1" />
            <Stop offset="0.5" stopColor="rgb(255,255,255)" stopOpacity="0.1" />
            <Stop offset="1" stopColor="rgb(255,255,255)" stopOpacity="0.05" />
          </LinearGradient>
        </Defs>
        <Path d="M0 0 H 400 V 400 H 0, M0,400 C100,450 300,450 400,400" fill="#449FF9" />
        <G y="80">
          <Circle fill="url(#grad)" cx="200" cy="200" r="190" />
          <Text x="200" y="150" textAnchor={'middle'} font={{ fontFamily: 'FontAwesome' }} fontSize={'20'} fill="white" >&#xf2dc;</Text>
          <Text textAnchor="middle" fontSize={'20'} x="200" y="180" fill="white" font={{ fontFamily: 'sans-serif' }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
            Cooling to 21&deg;
          </Text>
          <Text textAnchor="middle" y="320" fill="white" font={{ fontFamily: 'sans-serif-thin' }} style={{ color: '#fff', fontFamily: 'Roboto' }}>
            <TSpan textAnchor="middle" fontSize="150" x="200">23&deg;</TSpan>
          </Text>
        </G>
      </Svg>
    );
  }
}
