import React from 'react';
import { View, Animated } from 'react-native';
import CircularSlider from 'react-native-circular-slider';
import Svg, { Circle, G, Path } from 'react-native-svg';
import range from 'lodash.range';
import { calculateArcCircle } from '../Utils/arc';

export default class RoundIcon extends CircularSlider {
  render() {
    const {
      startAngle,
      highestLength,
      strokeColor,
      segments,
      strokeWidth,
      radius,
    } = this.props;
    const angleLength = (Math.PI * 2) * (highestLength / 100);

    const containerWidth = this.getContainerWidth();
    return (
      <View style={{ width: containerWidth, height: containerWidth }} onLayout={this.onLayout}>
        <Svg
          height={containerWidth}
          width={containerWidth}
          ref={(circle) => { this._circle = circle; }}
        >
          <G
            transform={{ translate: `${(strokeWidth / 2) + radius + 1}, ${(strokeWidth / 2) + radius + 1}` }}
          >
            <Circle
              r={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
              stroke="transparent"
            />
            {segments > 0 &&
              range(6).map((i) => {
                const {
                  fromX,
                  fromY,
                  toX,
                  toY,
                } = calculateArcCircle(i, 6, radius, startAngle, angleLength);
                const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(2)} A ${radius} ${radius} 0 0 1 ${toX.toFixed(2)} ${toY.toFixed(2)}`;

                return (
                  <Path
                    d={d}
                    key={i}
                    strokeWidth={strokeWidth}
                    stroke={strokeColor}
                    fill="transparent"
                  />
                );
              })
            }
          </G>
        </Svg>
      </View>
    );
  }
}
