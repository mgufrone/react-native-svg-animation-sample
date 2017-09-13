import React from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch } from 'react-native-switch';
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
      <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Ceiling Lights</Text>
          <Switch
            value
            onValueChange={val => console.log(val)}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            backgroundActive={'#f5c735'}
            backgroundInactive={'#d8d8d8'}
            circleActiveColor={'#fff'}
            circleInActiveColor={'#fff'}
          />
        </View>
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
        <View style={{ flexDirection: 'row' }}>
          <Icon size={20} name="brightness-low" />
          <View style={{ flex: 1 }}>
            <Slider
              style={{ marginRight: 20, marginLeft: 20, flex: 1 }}
              trackStyle={{ height: 10 }}
              thumbStyle={{ width: 10, height: 20 }}
              minimumTrackTintColor={'#f5c735'}
              maximumTrackTintColor={'#D8D8D8'}
            />
          </View>
          <Icon size={20} name="brightness-high" />
        </View>
        <Text>Value: {this.state.value}</Text>
      </View>);
  }
}
