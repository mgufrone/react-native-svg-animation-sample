import React from 'react';
import { View, Animated } from 'react-native';
import Svg, { Circle, G, LinearGradient, Path, Defs, Stop } from 'react-native-svg';
import range from 'lodash.range';
import CircularSlider from 'react-native-circular-slider';
import { calculateArcColor, calculateArcCircle } from '../Utils/arc';

function getGradientId(index) {
  return `gradient${index}`;
}
const AnimatedG = Animated.createAnimatedComponent(G);

export default class Slider extends CircularSlider {
  onPressIn(startAngle, angleLength) {
    this.setState({
      startAngle: startAngle - (Math.PI / 2),
      angleLength: angleLength + (Math.PI / 2),
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      isConnecting: props.isConnecting,
      opacity: new Animated.Value(props.isConnecting ? 100 : 0),
    };
  }
  componentWillReceiveProps(props) {
    if (props.isConnecting !== this.state.isConnecting) {
      Animated.timing(this.state.opacity, {
        toValue: props.isConnecting ? 100 : 0,
        duration: 250,
      }).start(() => {
        this.setState({ isConnecting: props.isConnecting });
      });
    }
  }
  render() {
    const {
      startAngle,
      angleLength,
      connectingAngle,
      highestLength,
      highestColor,
      segments,
      strokeWidth,
      radius,
      gradientColorFrom,
      gradientColorTo,
      bgCircleColor,
      startIcon,
      stopIcon } = this.props;
    const { isConnecting } = this.state;

    const containerWidth = this.getContainerWidth();

    const start = calculateArcCircle(0, segments, radius, startAngle, angleLength);
    const stop = calculateArcCircle(segments - 1, segments, radius, startAngle, angleLength);
    const circulate = calculateArcCircle(
      0, segments || 1, radius, startAngle || 0, connectingAngle);
    const highestStop = calculateArcCircle(
      segments - 1, segments, radius, startAngle, highestLength);
    const opacityInterpolate = this.state.opacity.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });

    return (
      <View style={{ width: containerWidth, height: containerWidth }} onLayout={this.onLayout}>
        <Svg
          height={containerWidth}
          width={containerWidth}
          ref={(circle) => { this._circle = circle; }}
        >
          <Defs>
            {
              range(segments).map((i) => {
                const {
                  fromX,
                  fromY,
                  toX,
                  toY,
                } = calculateArcCircle(i, segments, radius, startAngle, angleLength);
                const {
                  fromColor,
                  toColor,
                } = calculateArcColor(i, segments, gradientColorFrom, gradientColorTo);
                return (
                  <LinearGradient
                    key={i}
                    id={getGradientId(i)}
                    x1={fromX.toFixed(2)}
                    y1={fromY.toFixed(2)}
                    x2={toX.toFixed(2)}
                    y2={toY.toFixed(2)}
                  >
                    <Stop offset="0%" stopColor={fromColor} />
                    <Stop offset="1" stopColor={toColor} />
                  </LinearGradient>
                );
              })
            }
          </Defs>

          {/*
            ##### Circle
          */}

          <G
            transform={{ translate: `${(strokeWidth / 2) + radius + 1}, ${(strokeWidth / 2) + radius + 1}` }}
          >
            <Circle
              r={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
              stroke={bgCircleColor}
            />
            {segments > 0 &&
              range(6).map((i) => {
                const {
                  fromX,
                  fromY,
                  toX,
                  toY,
                } = calculateArcCircle(i, 6, radius, startAngle, highestLength);
                const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(2)} A ${radius} ${radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;

                return (
                  <Path
                    d={d}
                    key={i}
                    strokeWidth={strokeWidth}
                    stroke={highestColor}
                    fill="transparent"
                  />
                );
              })
            }
            {/*
              ##### Stop Icon
            */}

            {segments > 0 && <G
              fill={highestColor}
              transform={{ translate: `${highestStop.toX}, ${highestStop.toY}` }}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
              />
              {
                stopIcon
              }
            </G>}
            {
              range(segments).map((i) => {
                const {
                  fromX,
                  fromY,
                  toX,
                  toY,
                } = calculateArcCircle(i, segments, radius, startAngle, angleLength);
                const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(2)} A ${radius} ${radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;

                return (
                  <Path
                    d={d}
                    key={i}
                    strokeWidth={strokeWidth}
                    stroke={`url(#${getGradientId(i)})`}
                    fill="transparent"
                  />
                );
              })
            }

            {segments > 0 && <G
              fill={gradientColorTo}
              transform={{ translate: `${stop.toX}, ${stop.toY}` }}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
              />
              {
                stopIcon
              }
            </G>}

            {/*
              ##### Start Icon
            */}

            {segments > 0 && <G
              fill={gradientColorFrom}
              transform={{ translate: `${start.fromX}, ${start.fromY}` }}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
              />
              {
                startIcon
              }
            </G>}
            {isConnecting && <AnimatedG
              fill={'rgb(255,255,255)'}
              fillOpacity={opacityInterpolate}
              transform={{ translate: `${circulate.toX}, ${circulate.toY}` }}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
              />
              {
                startIcon
              }
            </AnimatedG>}
          </G>
        </Svg>
      </View>
    );
  }
}
