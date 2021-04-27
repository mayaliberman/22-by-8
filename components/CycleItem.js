import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ImageBackground,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProductiveListUpdate from '../screens/ProductiveListUpdate';
const CycleItem = ({ title, cycleNum, completed, onSelectCycle }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View
      style={{
        ...styles.cycleItem,
        ...{
          backgroundColor: completed
            ? Colors.confirmColor
            : Colors.nonCompletedColor,
        },
      }}
    >
      <TouchableCmp onPress={onSelectCycle}>
        <View style={styles.container}>
          <View style={styles.description}>
            <Text>Cycle #{cycleNum}</Text>
            <Text numberOfLines={3}>{title}</Text>
          </View>
          <View style={styles.button}>
            <View>
              <Ionicons
                name="arrow-forward-circle-sharp"
                size={24}
                color={Colors.primaryColor}
              />
            </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    flex: 2,
  },
  cycleItem: {
    // height: 60,
    width: '90%',
    flex: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
    padding: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default CycleItem;
