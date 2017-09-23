import React from 'react';
import { View,
			Text } from 'react-native';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch } from 'react-native-switch';
import SliderGradient from '../../Components/SliderGradient';
import FirstIcon from '../../Icons/FirstIcon';
import SecondIcon from '../../Icons/SecondIcon';

export default class IndicatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    const colors = [
      {color: "#4496d0", offset: 0},
			{color: "#4099c8", offset: 15.3},
			{color: "#409ac7", offset: 15.3},
			{color: "#409ac7", offset: 17.1},
			{color: "#409bc6", offset: 17.1},
			{color: "#3f9bc6", offset: 18.1},
			{color: "#3f9cc5", offset: 18.1},
			{color: "#3e9dc1", offset: 23.2},
			{color: "#3d9ec0", offset: 23.2},
			{color: "#3b9fba", offset: 28.7},
			{color: "#36a4a7", offset: 42.9},
			{color: "#36a5a6", offset: 42.9},
			{color: "#36a4a2", offset: 45.7},
			{color: "#36a5a1", offset: 45.7},
			{color: "#32ab7d", offset: 63.1},
			{color: "#43ac6e", offset: 64.9},
			{color: "#6db23b", offset: 73.9},
			{color: "#99be39", offset: 79.6},
			{color: "#a9c436", offset: 82.2},
			{color: "#b9ca35", offset: 85},
			{color: "#e8db30", offset: 94.5},
			{color: "#ddda3c", offset: 100},
    ]
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
          <FirstIcon width="100" colors={colors} />
          <SecondIcon width="120" colors={colors} />
        </View>
      </View>);
  }
}
