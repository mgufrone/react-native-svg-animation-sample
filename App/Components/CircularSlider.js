import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G, LinearGradient, Path, Defs, Stop } from 'react-native-svg';
import range from 'lodash.range';
import { interpolateHcl as interpolateGradient } from 'd3-interpolate';
import CircularSlider from 'react-native-circular-slider';

function calculateArcColor(index0, segments, gradientColorFrom, gradientColorTo) {
  const interpolate = interpolateGradient(gradientColorFrom, gradientColorTo);

  return {
    fromColor: interpolate(index0 / segments),
    toColor: interpolate((index0 + 1) / segments),
  };
}

function calculateArcCircle(index0, segments, radius, startAngle0 = 0, angleLength0 = 2 * Math.PI) {
  // Add 0.0001 to the possible angle so when start = stop angle, whole circle is drawn
  const startAngle = startAngle0 % (2 * Math.PI);
  const angleLength = angleLength0 % (2 * Math.PI);
  const index = index0 + 1;
  const fromAngle = (angleLength / segments) * ((index - 1) + startAngle);
  const toAngle = (angleLength / segments) * (index + startAngle);
  const fromX = radius * Math.sin(fromAngle);
  const fromY = -radius * Math.cos(fromAngle);
  const realToX = radius * Math.sin(toAngle);
  const realToY = -radius * Math.cos(toAngle);

  // add 0.005 to start drawing a little bit earlier so segments stick together
  const toX = radius * Math.sin(toAngle + 0.005);
  const toY = -radius * Math.cos(toAngle + 0.005);

  return {
    fromX,
    fromY,
    toX,
    toY,
    realToX,
    realToY,
  };
}

function getGradientId(index) {
  return `gradient${index}`;
}

export default class Slider extends CircularSlider {
  onPressIn(startAngle, angleLength) {
    this.setState({
      startAngle: startAngle - (Math.PI / 2),
      angleLength: angleLength + (Math.PI / 2),
    });
  }
  render() {
    const {
      startAngle,
      angleLength,
      segments,
      strokeWidth,
      radius,
      gradientColorFrom,
      gradientColorTo,
      bgCircleColor,
      startIcon,
      stopIcon } = this.props;

    const containerWidth = this.getContainerWidth();

    const start = calculateArcCircle(0, segments, radius, startAngle, angleLength);
    const stop = calculateArcCircle(segments - 1, segments, radius, startAngle, angleLength);

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

            {/*
              ##### Stop Icon
            */}

            <G
              fill={gradientColorTo}
              transform={{ translate: `${stop.toX}, ${stop.toY}` }}
              onPressIn={() => this.setState({ angleLength: angleLength + (Math.PI / 2) })}
              {...this._wakePanResponder.panHandlers}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
              />
              {
                stopIcon
              }
            </G>

            {/*
              ##### Start Icon
            */}

            <G
              fill={gradientColorFrom}
              transform={{ translate: `${start.fromX}, ${start.fromY}` }}
              onPressIn={() => this.onPressIn(startAngle, angleLength)}
            >
              <Circle
                r={(strokeWidth - 1) / 2}
              />
              {
                startIcon
              }
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
