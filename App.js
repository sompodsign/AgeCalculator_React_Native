import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header} from "./components/Header";
import CalcAge from "./components/CalcAge"


const App = () => {

    return (
        <View style={styles.container}>
            <Header/>
            <CalcAge />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'red',
        flex: 1,
        backgroundColor: '#393E46',
    }
})


export default App;

