import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  wattContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  time: {
    color: 'white',
    fontSize: 35,
    fontWeight: '300',
  },
  span: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5,
  },
});

export default () => {
  const { minutesLong, ...rest } = this.props;

  const hours = minutesLong.toFixed(2);

  return (
    <View {...rest}>
      <View style={styles.timerContainer}>
        <Text style={styles.time}>£{hours}</Text>
        <Text style={styles.text}>/hr</Text>
      </View>
      <View style={styles.wattContainer}>
        <Text style={[styles.text, styles.span]}>0.03 kW</Text>
      </View>
    </View>
  );
};
