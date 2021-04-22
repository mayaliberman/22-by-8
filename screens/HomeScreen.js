import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const mockCycles = require('../data/mock_cycles.json');
const HomeScreen = (props) => {
  const dates = {};
  const markedDays = mockCycles.text();
  console.log(markedDays);
  // const markedDays = JSON.parse(mockCycles).map((cycle) => {
  //   if (cycle.completed) {
  //     dates[cycle.date] = {
  //       marked: true,
  //       dotColor: 'green',
  //       activeOpacity: 0,
  //       // selected: true,
  //     };
  //   } else {
  //     dates[cycle.date] = {
  //       marked: true,
  //       dotColor: 'red',
  //       activeOpacity: 0,
  //       // selected: true,
  //     };
  //   }
  // });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to 22:8 App</Text>
      <Calendar
        style={styles.calender}
        // markedDates={
        //   markedDays
        // dates
        //   {
        //   '2021-04-20': { selected: true, marked: true, selectedColor: 'blue' },
        //   '2021-04-217': { marked: true },
        //   '2021-04-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
        //   '2021-04-19': { disabled: true, disableTouchEvent: true },
        // }
        // }
        onDayPress={(day) => {
          props.navigation.navigate('ProductiveList', {
            dateList: day,
          });
        }}
      />
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
    // margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
    // height: 400,
    width: '100%',
  },
});
export default HomeScreen;
