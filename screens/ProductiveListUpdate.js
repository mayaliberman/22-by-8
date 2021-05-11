import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ProductiveListUpdate = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Cycle #1 of 3 Cycles</Text>
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Describe the content of the cycle"
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => {
            console.log(text);
          }}
          value={''}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => props.navigation.navigate({ routeName: 'Count' })}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    margin: 15,
    // height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
});
export default ProductiveListUpdate;
