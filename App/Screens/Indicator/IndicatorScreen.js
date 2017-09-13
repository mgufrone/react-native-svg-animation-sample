import React from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import SliderGradient from '../../Components/SliderGradient';


export default class IndicatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <SliderGradient
          colors={['#f5c735', '#fff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          trackStyle={{ height: 10 }}
          thumbStyle={{ width: 10, height: 20 }}
          minimumValue={0}
          maximumValue={100}
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Slider
          trackStyle={{ height: 10 }}
          thumbStyle={{ width: 10, height: 20 }}
          minimumTrackTintColor={'#f5c735'}
          maximumTrackTintColor={'#D8D8D8'}
        />
        <Text>Value: {this.state.value}</Text>
      </View>);
  }
}
