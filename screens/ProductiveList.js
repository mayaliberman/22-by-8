import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CycleItem from '../components/CycleItem';
const mockCycles = require('../data/mock_cycles.json');
const ProductiveList = (props) => {
  const { dateList } = props.navigation.state.params;
  const displayCycles = JSON.parse(mockCycles).filter(
    (cycle) => cycle.date === dateList.dateString
  );
  const filteredCycle = displayCycles[0]?.cycles ? displayCycles[0].cycles : [];

  const renderCycleItem = (itemData) => {
    return (
      <CycleItem
        title={itemData.item.cycle_title}
        cycleNum={itemData.item.cycle_num}
        onSelectCycle={() => {}}
        completed={itemData.item.cycle_completed}
      />
    );
  };

  if (filteredCycle.length > 0) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={filteredCycle}
          renderItem={renderCycleItem}
          style={{ width: '100%' }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>No items</Text>
      </View>
    );
  }
};

ProductiveList.navigationOptions = (navigationData) => {
  const { dateList } = navigationData.navigation.state.params;
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  var selectedMonthName = months[[dateList.month - 1]];
  return {
    headerTitle: `${selectedMonthName} ${dateList.day}, ${dateList.year}`,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProductiveList;
