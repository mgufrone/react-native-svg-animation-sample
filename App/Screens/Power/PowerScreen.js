import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { convertWattHour, interpolateColors, colorToDec } from '../../Utils/helper';
import { AnimatedPowerStats, PowerStats } from './PowerStats';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff',
  },
  descriptionText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#082e66',
  },
  bedtimeText: {
    color: '#ff9800',
    marginLeft: 3,
    fontSize: 16,
  },
  wakeText: {
    color: '#ffcf00',
    marginLeft: 3,
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  time: {
    alignItems: 'center',
    flex: 1,
  },
  timeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeValue: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
  },
  sleepTimeContainer: {
    backgroundColor: '#072859',
    borderRadius: 600,
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  redDot: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  redDotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
      maxProgress: (Math.PI * 2) * (600 / 1000),
    };
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.colors = interpolateColors(colorToDec('#56AD32'), colorToDec('#FF4900'), 100);
    this.startTimer = null;
  }
  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.highestAnimation, {
        toValue: (Math.PI * 2) * 0.75,
        duration: 2 * 1000,
      }).start();
      Animated.timing(this.state.animation, {
        toValue: (Math.PI * 2) * 0.6,
        duration: 2 * 1000,
      }).start();
    }, 1 * 1000);
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


  render() {
    const { startAngle } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.redDotContainer}>
            <View style={styles.redDot} />
          </View>
          <View>
            <Text style={styles.title}>Connecting</Text>
          </View>
        </View>
        <View>
          <AnimatedPowerStats
            textContainerStyle={styles.sleepTimeContainer}
            startAngle={startAngle}
            highestLength={this.state.highestAnimation}
            highestColor={'#425d8c'}
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
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

PowerScreen.navigationOptions = ({ navigation }) => {
  const { state, setParams } = navigation;
  return {
    title: '',
    headerRight: (<TouchableOpacity style={{ marginRight: 10 }} onPress={() => console.log('something')}>
      <Icon name="cog" size={25} color="#fff" />
    </TouchableOpacity>),
    tabBarVisible: true,
    tabBarPosition: 'bottom',
  };
};
