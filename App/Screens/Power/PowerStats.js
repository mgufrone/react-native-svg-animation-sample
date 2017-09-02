import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { number, string, func, any } from 'prop-types';
import CircularSlider from '../../Components/CircularSlider';
import { PowerProgress } from './PowerProgress';
import { convertWattHour } from '../../Utils/helper';

export default class PowerStats extends Component {
  componentDidMount() {

  }
  render() {
    const {
      textContainerStyle,
      angleLength,
      highestLength,
      startColor,
      endColor,
      onUpdate,
      highestColor,
      strokeWidth,
      radius,
      startAngle,
    } = this.props;
    return (
      <View>
        <PowerProgress
          style={textContainerStyle}
          minutesLong={convertWattHour(angleLength)}
        />
        <CircularSlider
          startAngle={startAngle}
          angleLength={angleLength}
          highestLength={highestLength}
          highestColor={highestColor}
          onUpdate={onUpdate}
          segments={Math.floor(convertWattHour(angleLength) / 20)}
          strokeWidth={strokeWidth}
          radius={radius}
          gradientColorFrom={startColor}
          gradientColorTo={endColor(convertWattHour(angleLength) / 10)}
          bgCircleColor="#0A3678"
          stopIcon={null}
          startIcon={null}
        />
      </View>
    );
  }
}

PowerStats.propTypes = {
  angleLength: number.isRequired,
  highestLength: number.isRequired,
  startAngle: number.isRequired,
  strokeWidth: number.isRequired,
  radius: number.isRequired,
  startColor: string.isRequired,
  onUpdate: func.isRequired,
  endColor: func.isRequired,
  textContainerStyle: any,
  highestColor: string,
};

PowerStats.defaultProps = {
  textContainerStyle: null,
  highestColor: '#425d8c',
  angleLength: Math.PI * 0.1,
};

export const AnimatedPowerStats = Animated.createAnimatedComponent(PowerStats);
