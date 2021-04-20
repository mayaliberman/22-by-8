import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';

const DefineDay = (props) => {
  const [selectedNumOfCycles, setNumOfCycles] = useState('');

  return (
    <View style={styles.screen}>
      <Text>Define Your Productive Day</Text>

      <View>
        <Text>Choose Number of Cycles</Text>
      </View>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedNumOfCycles}
          onValueChange={(currentNum) => setNumOfCycles(currentNum)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
        </Picker>
      </View>
      <View>
        <Button
          title="Continue"
          onPress={() => {
            props.navigation.navigate({ routeName: 'ListUpdate' });
          }}
        />
      </View>
    </View>
  );
};

DefineDay.navigationOptions = {
  headerTitle: 'Define a Day',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: '40%',
    padding: 20,
    marginTop: 20,
  },
});
export default DefineDay;
