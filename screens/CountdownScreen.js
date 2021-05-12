import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';
import CountDown from '../components/CountDown';
const CountdownScreen = (props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const timerProps = {
    size: 240,
    strokeWidth: 12,
    isPlaying: isPlaying,
  };
  return (
    <View style={styles.container}>
      <CountDown duration={1320} timerProps={timerProps} />
      <MainButton
        style={{ marginTop: 15, backgroundColor: 'blue' }}
        title="Stop"
        onPress={() => setIsPlaying((prev) => !prev)}
      >
        Stop
      </MainButton>
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
  timeWrapper: {
    fontSize: 48,
    color: '#7E2E84',
  },
});

export default CountdownScreen;
