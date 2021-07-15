import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Age Calculator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#39A2DB',
        alignItems: 'center',

    },
    text: {
        fontSize: 25,
        color: '#E8F0F2'
    }

})