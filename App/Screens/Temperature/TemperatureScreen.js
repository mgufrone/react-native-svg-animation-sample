import React from 'react';
import { View, Text as TextNative, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TemperatureTop from './TemperatureTop';

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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7 }}>
          <TemperatureTop />
        </View>
        <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TextNative>HOME</TextNative>
            <View style={{ borderRadius: 60, backgroundColor: 'rgba(0,0,0,0.05)', padding: 8 }}>
              <TouchableOpacity style={{
                width: 60, alignItems: 'center', justifyContent: 'center', height: 60, padding: 10, backgroundColor: '#fff', borderRadius: 60, elevation: 5, shadowColor: 'rgba(0,0,0,0.3)', shadowOffset: { width: 0, height: 10 }, shadowRadius: 60 }}
              >
                <Icon name="home" color="#91a8b5" size={40} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <View style={{ borderRadius: 60, backgroundColor: 'rgba(0,0,0,0.05)', padding: 10 }}>
              <TouchableOpacity style={{
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
                marginBottom: 40,
              }}
              >
                <Icon name="plus" color="#91a8b5" size={40} />
              </TouchableOpacity>
              <TouchableOpacity style={{
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
            <View style={{ borderRadius: 60, backgroundColor: 'rgba(0,0,0,0.05)', padding: 8 }}>
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
