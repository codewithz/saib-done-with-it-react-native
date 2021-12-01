import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import colors from '../config/colors'

import AppText from './AppText'

export default function ListItem(props) {

    const { title, subtitle, image, onPress } = props
    return (
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={image}
                />

                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText>{subtitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 20
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: '500'
    },
    subtitle: {
        color: colors.medium
    }
})
