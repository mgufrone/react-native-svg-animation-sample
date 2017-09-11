import React from 'react';
import { View, Text as TextNative, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TemperatureTop from './TemperatureTop';

export default class TemperatureScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true,
      currentTemperature: 25,
    };
    this.increaseTemperature = this.increaseTemperature.bind(this);
    this.decreaseTemperature = this.decreaseTemperature.bind(this);
  }
  componentDidMount() {

  }
  increaseTemperature() {
    if (this.state.currentTemperature < 38) {
      this.setState({
        currentTemperature: this.state.currentTemperature + 1,
      });
    }
  }
  decreaseTemperature() {
    if (this.state.currentTemperature > 0) {
      this.setState({
        currentTemperature: this.state.currentTemperature - 1,
      });
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flex: 7 }}>
          <TemperatureTop currentTemperature={this.state.currentTemperature} />
        </View>
        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TextNative>HOME</TextNative>
            <View style={{ borderRadius: 60, backgroundColor: '#f5f7fa', padding: 8 }}>
              <TouchableOpacity style={{
                width: 60, alignItems: 'center', justifyContent: 'center', height: 60, padding: 10, backgroundColor: '#fff', borderRadius: 60, elevation: 5, shadowColor: 'rgba(0,0,0,0.3)', shadowOffset: { width: 0, height: 10 }, shadowRadius: 60 }}
              >
                <Icon name="home" color="#91a8b5" size={40} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <View style={{ borderRadius: 60, backgroundColor: '#f5f7fa', padding: 10 }}>
              <TouchableOpacity
                onPress={this.increaseTemperature}
                style={{
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderRadius: 60,
                  elevation: 5,
                  shadowColor: 'rgb(0,0,0)',
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 60,
                  marginBottom: 40,
                }}
              >
                <Icon name="plus" color="#91a8b5" size={40} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.decreaseTemperature}
                style={{
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderRadius: 60,
                  elevation: 5,
                  shadowColor: 'rgba(0,0,0,0.3)',
                  shadowOffset: { width: 0, height: 10 },
                  shadowRadius: 60,
                }}
              >
                <Icon name="minus" color="#91a8b5" size={40} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextNative>AWAY</TextNative>
            <View style={{ borderRadius: 60, backgroundColor: '#f5f7fa', padding: 8 }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderRadius: 60,
                  elevation: 5,
                  shadowColor: 'rgba(0,0,0,0.3)',
                  shadowOffset: { width: 0, height: 10 },
                  shadowRadius: 60 }}
              >
                <Icon name="leaf" color="#91a8b5" size={40} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
