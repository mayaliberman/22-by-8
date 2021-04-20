import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ImageBackground,
} from 'react-native';

const CycleItem = (props) => {
  const { title, cycleNum, cycleDate } = props;
  return (
    <View style={styles.cycleItem}>
      <TouchableOpacity>
        <View>
          <Text>{props.title}</Text>
          <Text>{cycleNum}</Text>
          <Text>{cycleDate}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cycleItem: {
    height: 100,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
});

export default CycleItem;
