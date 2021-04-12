import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to 22:8 App</Text>
      <Calendar />
      <Button
        style={styles.button}
        title="New Productive Day"
        onPress={() => {
          props.navigation.navigate({ routeName: 'DefineDay' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#555',
  },
  calender: {
    margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
    height: 350,
  },
});
export default HomeScreen;
