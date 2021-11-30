import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

export default function AppButton(props) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15

    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
