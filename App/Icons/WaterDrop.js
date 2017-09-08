import React from 'react';
import { Symbol, Path } from 'react-native-svg';
import { string, number } from 'prop-types';


export const WaterDrop = ({ fill, width, id }) => (
  <Symbol id={id} width={width} height={width} viewBox="0 0 128 128" preserveAspectRatio={'align slice'}>
    <Path
      fill={fill}
      d="M67.5,3.2c-0.4-3.1-5.4-2.7-7,0c-9.8,16.9-37,65.1-37,83.4c0,22.3,18.1,40.5,40.5,40.5  c22.3,0,40.5-18.1,40.5-40.5C104.5,68.2,73.4,45.6,67.5,3.2z M64,115.3c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5  c12.8,0,23.3-10.5,23.3-23.3c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5C92.4,102.6,79.6,115.3,64,115.3z"
    />
  </Symbol>
);

WaterDrop.propTypes = {
  fill: string,
  id: string.isRequired,
  width: string,
};

WaterDrop.defaultProps = {
  fill: '#fff',
  id: 'waterDrop',
  x: 0,
  y: 0,
  width: '30',
};

export default WaterDrop;
