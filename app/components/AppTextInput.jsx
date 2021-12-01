import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

export default function AppTextInput(props) {
    const { icon, ...otherProps } = props;
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                name={icon}
                color={colors.medium}
                size={20}
                style={styles.icon} />}
            <TextInput {...otherProps} />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        backgroundColor: colors.light,
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.dark
    }

})
