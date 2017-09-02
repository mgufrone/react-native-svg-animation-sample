import React from 'react';
import Svg, { Circle, G, LinearGradient, Path, Defs, Stop } from 'react-native-svg';

export default ({ containerWidth, strokeWidth, radius, bgCircleColor }) => (
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
        stroke={bgCircleColor}
      />
    </G>
  </Svg>
);
