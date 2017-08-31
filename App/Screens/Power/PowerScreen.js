import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import CircularSlider from '../../Components/CircularSlider';
import { PowerProgress } from './PowerProgress';

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

function convertWattHour(length) {
  return (length * 1000) / (Math.PI * 2);
}

function toColor(dec) {
  return `#${(dec).toString(16)}`;
}

function colorToDec(hex) {
  return parseInt(hex.replace('#', '0x'), 0);
}
function interpolate(begin, end, step, max) {
  if (begin < end) {
    return ((end - begin) * (step / max)) + begin;
  }
  return ((begin - end) * (1 - (step / max))) + end;
}
function toRgb(hex) {
  return {
    r: (hex & 0xff0000) >> 16,
    g: (hex & 0x00ff00) >> 8,
    b: (hex & 0x0000ff) >> 0,
  };
}
function interpolateColors(begin, end, steps) {
  const { r: r1, g: g1, b: b1 } = toRgb(begin);
  const { r: r2, g: g2, b: b2 } = toRgb(end);
  return new Array(steps).fill().map((_, step) => {
    const newR = Math.ceil(interpolate(r1, r2, step, steps));
    const newG = Math.ceil(interpolate(g1, g2, step, steps));
    const newB = Math.ceil(interpolate(b1, b2, step, steps));
    return `rgb(${newR}, ${newG}, ${newB})`;
  });
}

export default class PowerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAngle: 0,
      angleLength: (Math.PI * 2) * (100 / 1000),
    };
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.colors = interpolateColors(colorToDec('#56AD32'), colorToDec('#FF4900'), 100);
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

  colorEnd() {
    return this.colors[Math.floor(convertWattHour(this.state.angleLength) / 10)];
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
            minutesLong={convertWattHour(angleLength)}
          />
          <CircularSlider
            startAngle={startAngle}
            angleLength={angleLength}
            onUpdate={this.onUpdate}
            segments={Math.floor(convertWattHour(this.state.angleLength) / 10)}
            strokeWidth={25}
            radius={120}
            gradientColorFrom="#56AD32"
            gradientColorTo={this.colorEnd()}
            bgCircleColor="#0A3678"
            stopIcon={null}
            startIcon={null}
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
