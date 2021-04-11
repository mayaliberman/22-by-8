import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>22:8 Cycles Home Page</Text>
      <Calendar
        current={'2021-04-11'}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
        }}
      />
      <Button style={styles.button} title="New Productive Day" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#555',
  },
  calender: {
    margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
    height: 350,
  },
});
