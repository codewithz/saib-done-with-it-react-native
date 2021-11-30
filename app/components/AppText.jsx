import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

export default function AppText(props) {
    return (
        <Text style={styles.text}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'Android' ? "Roboto" : 'Avenir'
    }
})
