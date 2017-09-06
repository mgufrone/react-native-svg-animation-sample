import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import { interpolateColors, colorToDec } from '../../Utils/helper';
import { AnimatedPowerStats } from './PowerStats';

import styles from './Styles/PowerScreenStyles';

Animatable.initializeRegistryWithDefinitions({
  fadeInOut: {
    0: {
      opacity: 1,
    },
    0.5: {
      opacity: 0,
    },
    1: {
      opacity: 1,
    },
  },
});

export default class PowerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAngle: 0,
      angleLength: (Math.PI * 2) * (100 / 1000),
      animation: new Animated.Value(0),
      highestAnimation: new Animated.Value(0),
      connectingCircle: new Animated.Value(0),
      maxProgress: (Math.PI * 2) * (600 / 1000),
    };
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.colors = interpolateColors(colorToDec('#56AD32'), colorToDec('#FF4900'), 100);
    this.startTimer = null;
  }
  componentDidMount() {
    this.animateConnectingCircle();
  }
  componentWillReceiveProps(props) {
    if (props.isConnecting !== this.props.isConnecting) {
      setTimeout(() => {
        Animated.timing(this.state.highestAnimation, {
          toValue: (Math.PI * 2) * (props.highestWattConsumption / 1000),
          duration: 0.5 * 1000,
        }).start();
        Animated.timing(this.state.animation, {
          toValue: (Math.PI * 2) * (props.wattConsumption / 1000),
          duration: 0.5 * 1000,
        }).start();
      }, 1000);
    }
  }

  animateConnectingCircle() {
    if (this.props.isConnecting) {
      Animated.timing(this.state.connectingCircle, {
        toValue: (Math.PI * 2),
        duration: 1 * 1000,
        easing: Easing.inOut(Easing.quad),
      }).start(() => {
        this.state.connectingCircle.setValue(0);
        setTimeout(() => {
          this.animateConnectingCircle();
        }, 5 * 100);
      });
    }
  }

  onTimeUpdate(fromTimeInMinutes, minutesLong) {
    this.setState({ minutesLong });
  }

  onUpdate({ startAngle, angleLength }) {
    this.setState({
      startAngle,
      angleLength,
    });
  }

  colorEnd(index) {
    return this.colors[index];
  }

  fullCircle(slice = 1) {
    return (Math.PI * 2) * slice;
  }

  getText() {
    const { isConnecting, wattConsumption } = this.props;
    if (isConnecting) {
      return 'Connecting';
    }
    switch (true) {
      case wattConsumption >= 0 && wattConsumption <= 200:
        return 'Rested State';
      default:
        return 'Your Live Energy';
    }
  }

  render() {
    const { startAngle } = this.state;

    const backgroundColor = this.state.animation.interpolate({
      inputRange: [0, this.fullCircle(0.2), this.fullCircle(0.5), this.fullCircle()],
      outputRange: ['rgb(8,46,102)', 'rgb(5,29,64)', 'rgb(8,46,102)', 'rgb(8,46,102)'],
    });
    return (
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <View style={styles.headerContainer}>
          <View style={styles.redDotContainer}>
            <Animatable.View
              animation="fadeInOut"
              iterationCount={'infinite'}
              duration={2 * 1000}
              style={styles.redDot}
            />
          </View>
          <View>
            <Text style={styles.title}>{this.getText()}</Text>
          </View>
        </View>
        <View>
          <AnimatedPowerStats
            textContainerStyle={styles.sleepTimeContainer}
            startAngle={startAngle}
            highestLength={this.state.highestAnimation}
            highestColor={'#425d8c'}
            connectingAngle={this.state.connectingCircle}
            isConnecting={this.props.isConnecting}
            onUpdate={() => {}}
            radius={120}
            strokeWidth={25}
            angleLength={this.state.animation}
            startColor="#56AD32"
            endColor={index => this.colorEnd(index)}
            bgCircleColor="#0A3678"
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>We are just connecting to your home</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Animatable.View animation="pulse" iterationCount={'infinite'} direction="alternate">
              <TouchableOpacity style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Energy Used Today</Text>
                <Icon name="chevron-down" size={15} color="#fff" />
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
      </Animated.View>
    );
  }
}
