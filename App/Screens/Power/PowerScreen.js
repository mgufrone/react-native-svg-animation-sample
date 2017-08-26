import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

import CircularSlider from 'react-native-circular-slider';
import PowerProgress from './PowerProgress';

function calculateMinutesFromAngle(angle) {
  return Math.round(angle / (2 * Math.PI / (12 * 12))) * 5;
}

function calculateTimeFromAngle(angle) {
  const minutes = calculateMinutesFromAngle(angle);
  const h = Math.floor(minutes / 60);
  const m = minutes - h * 60;

  return { h, m };
}

function roundAngleToFives(angle) {
  const fiveMinuteAngle = 2 * Math.PI / 144;

  return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
}

function padMinutes(min) {
  if (`${min}`.length < 2) {
    return `0${min}`;
  }

  return min;
}

export default class PowerScreen extends Component {

  state = {
    startAngle: Math.PI * 10/6,
    angleLength: Math.PI * 7/6,
  }

  onTimeUpdate = (fromTimeInMinutes, minutesLong) => {
    this.setState({ minutesLong });
  }

  onUpdate = ({ startAngle, angleLength }) => {
    this.setState({
      startAngle: roundAngleToFives(startAngle),
      angleLength: roundAngleToFives(angleLength)
    });
  }

  render() {
    const { startAngle, angleLength } = this.state;
    const bedtime = calculateTimeFromAngle(startAngle);
    const waketime = calculateTimeFromAngle((startAngle + angleLength) % (2 * Math.PI));

    return (
      <View style={styles.container}>
        <View>
          <Text>Connecting</Text>
          <PowerProgress
            style={styles.sleepTimeContainer}
            minutesLong={calculateMinutesFromAngle(angleLength)}
          />
          <CircularSlider
            startAngle={0}
            angleLength={angleLength}
            onUpdate={this.onUpdate}
            segments={5}
            strokeWidth={40}
            radius={130}
            gradientColorFrom="#ff9800"
            gradientColorTo="#ffcf00"
            clockFaceColor="#072859"
            bgCircleColor="#0a3678"
            stopIcon={null}
            startIcon={null}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: "300",
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
    right: 0
  }
});
