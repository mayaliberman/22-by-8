import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const CountDown = (props) => {
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        {...props.timerProps}
        duration={props.duration}
        colors={[
          ['#7E2E84', 0.4],
          ['#D14081', 0.4],
          ['#A30000', 0.2],
        ]}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;

          return (
            <Animated.Text style={styles.timeWrapper}>{`${minutes}:${
              seconds < 10 ? '0' + seconds : seconds
            }`}</Animated.Text>
          );
        }}
      </CountdownCircleTimer>
    </View>
  );
};

const styles = StyleSheet.create({
  timeWrapper: {
    fontSize: 48,
    color: '#7E2E84',
  },
});

export default CountDown;
