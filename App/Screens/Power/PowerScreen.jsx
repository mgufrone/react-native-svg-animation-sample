import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircularSlider from '../../Components/CircularSlider';
import PowerProgress from './PowerProgress';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 20,
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
});


export default class PowerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAngle: (Math.PI * 10) / 6,
      angleLength: (Math.PI * 11) / 6,
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
    const { angleLength } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Connecting</Text>
        </View>
        <View>
          <PowerProgress
            style={styles.sleepTimeContainer}
            minutesLong={(angleLength)}
          />
          <CircularSlider
            startAngle={0}
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
        <View>
          <Text style={styles.title}>Connecting</Text>
        </View>
      </View>
    );
  }
}
