import React from 'react';
import { Animated } from 'react-native';
import Svg, { Symbol, Use, Stop, G, Defs, LinearGradient, Path, Polyline, Circle } from 'react-native-svg';
import { string, number } from 'prop-types';
import GradientDef from './GradientDef';


export class FirstIcon extends React.Component {
  render() {
    const { fill, width, x, y, id, opacity, colors } = this.props;
    return (
      <Svg width={width} height={width * 1.5} >
        <Defs>
          <GradientDef colors={colors} x1="0" y1="0" x2="120" y2="120" id="StrokeGradient"  />
        </Defs>
        <Symbol id="FirstIcon" width={"120"} height={"120"} viewBox="0 0 120 120">
          <G width="120" height="120" stroke="url(#StrokeGradient)" strokeWidth="10">
            <Circle
              fill="none"
              cx="60"
              cy="45"
              r="30"
            />
            <Path
              fill="none"
              strokeLineCap="round"
              strokeLineJoin="round"
              d="
                M10 70
                L10 90
                C 10 140, 10 140, 20 140
                L100 140
                C 110 140, 110 140, 110 110
                L110 70
              "
            />
          </G>
        </Symbol>
        <Use href="#FirstIcon" width={width} height={width} x={x} y={y} />
      </Svg>
    );
  }
}

FirstIcon.propTypes = {
  fill: string,
  id: string.isRequired,
  width: string,
  opacity: number,
};

FirstIcon.defaultProps = {
  opacity: 1,
  fill: '#fff',
  id: 'FirstIcon',
  x: 0,
  y: 0,
  width: '30',
};
export const AnimatedFirstIcon = Animated.createAnimatedComponent(FirstIcon);
export default FirstIcon;
