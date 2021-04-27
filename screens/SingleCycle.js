import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const mockCycles = require('../data/mock_cycles.json');

const SingleCycle = (props) => {
  const { cycleIdStr, cyclesDayId } = props.navigation.state.params;

  return (
    <View>
      <Text>{`Hello cycle ${cycleIdStr} `}</Text>
    </View>
  );
};

SingleCycle.navigationOptions = (navigationData) => {
  const { cycleNumStr } = navigationData.navigation.state.params;

  return {
    headerTitle: `Cycle No. ${cycleNumStr}`,
    headerBackTitle: 'Back',
  };
};

const styles = StyleSheet.create({});
export default SingleCycle;
