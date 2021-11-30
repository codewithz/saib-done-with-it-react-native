import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText';

export default function Card(props) {

    const { title, subtitle, image } = props;
    return (
        <View style={styles.card}>
            <Image style={styles.image}
                source={image} />
            <View style={styles.detailsContainer}>
                <AppText>{title}</AppText>
                <AppText color="secondary" style={styles.subtitle}>{subtitle}</AppText>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    detailsContainer: {
        padding: 20
    },
    subtitle: {
        fontWeight: 'bold'
    }

})
