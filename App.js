import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header} from "./components/Header";
import CalcAge from "./components/CalcAge"


const App = () => {

    return (
        <View>
            <Header/>
            <CalcAge />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        color: 'red',
        flex: 1,
    }
})


export default App;

