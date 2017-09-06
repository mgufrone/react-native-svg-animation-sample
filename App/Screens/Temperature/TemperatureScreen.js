import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';

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
      <Svg style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }} viewBox="0 200 400 400" preserveAspectRatio={'meet'} >
        <Path d="M0 0 H 400 V 400 H 0, M0,400 C80,460 320,460 400,400" fill="#449FF9" />
        <Text fill="white" style={{ color: '#fff' }} x="100" y="100" fontSize="40">Something</Text>
      </Svg>
    );
  }
}
