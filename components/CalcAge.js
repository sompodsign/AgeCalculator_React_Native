import React, {useState} from 'react';
import {Platform, Text, View, StyleSheet} from "react-native";
import {Button, TextInput} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const today = new Date()
const inputFieldDate = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`

const CalcAge = () => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));


    const onChange = (event, selectedDate) => {
        const currentDate = date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
    };

    const calendarPressHandler = () => {
        setShow(true)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter Your Date Of Birth</Text>

            <TextInput
                style={styles.input}
                label="Date Of Birth"
                value={inputFieldDate}
                onChangeText={text => setDate(text)}
                right={<TextInput.Icon name='calendar'
                                       onPress={calendarPressHandler}
                />}
            />
            <Button

            >Calculate</Button>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
            justifyContent
    :
        'center',
    }
,
    input: {
        margin: 10,
    }
,
    text: {
        alignSelf: 'center',
    }
}
)
export default CalcAge;