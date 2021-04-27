import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import MainButton from '../components/MainButton';
const mockCycles = require('../data/mock_cycles.json');
const HomeScreen = (props) => {
  const cycleDates = {};
  mockCycles.map((cycle) => {
    cycleDates[cycle.date] = {
      marked: true,
      dotColor: cycle.completed ? 'green' : 'red',
      activeOpacity: 0,
      // selected: true,
    };
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to 22:8 App</Text>
      <View style={styles.calender}>
        <Calendar
          styles={{ height: '400' }}
          markedDates={cycleDates}
          onDayPress={(day) => {
            props.navigation.navigate('ProductiveList', {
              dateList: day,
            });
          }}
        />
      </View>
      <MainButton
        onPress={() => {
          props.navigation.navigate({ routeName: 'DefineDay' });
        }}
      >
        Add New Day
      </MainButton>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
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
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,

    // width: '90%',
  },
});
export default HomeScreen;
