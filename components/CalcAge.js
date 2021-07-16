/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Platform, Text, View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';


const CalcAge = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);
  const [alert, setAlert] = useState(false);

  let fieldDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setShow(false);
  };

  const calendarPressHandler = () => {
    setShow(true);
  };

  const calculateAge = () => {
      const currentYear = new Date().getFullYear()
      setAge(currentYear - date.getFullYear())

      setAlert(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Your Date Of Birth</Text>

      <TextInput
          showSoftInputOnFocus={false}
        style={styles.input}
        label="Date Of Birth"
        value={fieldDate}
        onChangeText={text => setDate(text)}
        onFocus={calendarPressHandler}
        right={
          <TextInput.Icon name="calendar" onPress={calendarPressHandler} />
        }
      />

      <Button
          color='#00ADB5'
          onPress={calculateAge}>Calculate</Button>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      {alert && (
           Alert.alert(
      "Your Age",
      `You are ${age} years old.`,
      [
        { text: "OK", onPress: () => setAlert(false) }
      ]
    )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
  },
  text: {
    alignSelf: 'center',
    color: '#EEEEEE'
  },
});
export default CalcAge;
