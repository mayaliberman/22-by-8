import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CycleItem from '../components/CycleItem';
const mockCycles = require('../data/mock_cycles.json');
const ProductiveList = (props) => {
  const { dateList } = props.navigation.state.params;

  const renderCycleItem = (itemData) => {
    let items = [];

    if (itemData.item.cycles.length > 0) {
      items = itemData.item.cycles.map((cycle) => {
        return (
          <CycleItem
            title={cycle.cycle_title}
            cycleNum={cycle.cycle_num}
            cycleDate={itemData.item.date}
            onSelectCycle={() => {}}
          />
        );
      });
    }
    return <View>{items}</View>;
  };

  const displayCycles = mockCycles.filter(
    (cycle) => cycle.date === dateList.dateString
  );
  if (displayCycles.length > 0) {
    return (
      <View>
        <FlatList
          data={displayCycles}
          keyExtractor={(items, index) => items.id}
          renderItem={renderCycleItem}
          style={{ width: '100%' }}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProductiveList;
