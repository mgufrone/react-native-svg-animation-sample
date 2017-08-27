import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'; import Icon from 'react-native-vector-icons/FontAwesome';

import CircularSlider from '../../Components/CircularSlider';
import { PowerProgress } from './PowerProgress';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff',
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
      angleLength: Math.PI * 1,
    };
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
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

  render() {
    const { angleLength, startAngle } = this.state;
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
          <PowerProgress
            style={styles.sleepTimeContainer}
            minutesLong={(angleLength)}
          />
          <CircularSlider
            startAngle={startAngle}
            angleLength={angleLength}
            onUpdate={this.onUpdate}
            segments={5}
            strokeWidth={40}
            radius={130}
            gradientColorFrom="#509E2F"
            gradientColorTo="#DA3E00"
            bgCircleColor="#0a3678"
            stopIcon={null}
            startIcon={null}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>We are just connecting to your home</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>We are just connecting to your home</Text>
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
  };
};
