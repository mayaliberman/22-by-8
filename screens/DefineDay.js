import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import RNPickerSelect from 'react-native-picker-select';
const DefineDay = (props) => {
  const [selectedNumOfCycles, setNumOfCycles] = useState();
  return (
    <View style={styles.screen}>
      <Text>Define Day Screen</Text>
      {/* <Picker
        selectedValue={selectedNumOfCycles}
        onValueChange={(itemValue, itemIndex) => setNumOfCycles(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
      </Picker> */}
      {/* <RNPickerSelect
        placeholder="Choose number of cycles"
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' },
        ]}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DefineDay;
