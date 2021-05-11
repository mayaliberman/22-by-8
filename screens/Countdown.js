import React, { useState } from 'react';
import { Text, View, StyleSheet, Animated, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const Countdown = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text>{remainingTime}</Animated.Text>
        )}
      </CountdownCircleTimer>
      <Button
        title="Toggle Playing"
        onPress={() => setIsPlaying((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default Countdown;
