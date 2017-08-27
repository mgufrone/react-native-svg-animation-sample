import React from 'react';
import { bool, string } from 'prop-types';
import { Text } from 'react-native';

export const PowerIcon = props => (<Text
  style={{ color: props.focused ? 'red' : 'black' }}
>
  {props.title}
</Text>);

PowerIcon.propTypes = {
  focused: bool.isRequired,
  title: string.isRequired,
};
export default PowerIcon;
