import React from 'react';
import { bool, string } from 'prop-types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PowerIcon = (props) => {
  const color = props.focused ? '#d93d00' : '#333';
  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
      {props.iconComponent && <props.iconComponent color={color} />}
      <Text style={{ color, fontSize: 12 }}>{props.tabBarLabel}</Text>
    </View>
  );
};

PowerIcon.propTypes = {
  focused: bool.isRequired,
  iconName: string,
  title: string.isRequired,
  tabBarLabel: string.isRequired,
};
PowerIcon.defaultProps = {
  iconName: 'circle',
};
export default PowerIcon;
