import React from 'react';
import { View, Text } from 'react-native';
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
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
          <FirstIcon width="100" colors={["#378acc",  "#d7d724"]} />
          <SecondIcon width="120" colors={["#378acc",  "#d7d724"]} />
        </View>
      </View>);
  }
}
