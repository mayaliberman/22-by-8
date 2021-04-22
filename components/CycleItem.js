import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ImageBackground,
  Button,
} from 'react-native';

const CycleItem = (props) => {
  const { title, cycleNum, completed } = props;
  return (
    <View
      style={{
        ...styles.cycleItem,
        ...{ backgroundColor: completed ? '#ccc' : 'blue' },
      }}
    >
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Text>Cycle #{cycleNum}</Text>
          <Text numberOfLines={1}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cycleItem: {
    height: 100,
    width: '90%',

    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    padding: 10,
  },
  itemContainer: {
    justifyContent: 'space-between',
  },
});

export default CycleItem;
