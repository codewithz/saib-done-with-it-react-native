import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import colors from '../config/colors';

import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem(props) {

    const { title, subtitle, image, onPress, renderRightActions, ImageComponent } = props
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image}
                        source={image}
                    />
                    }

                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {
                            subtitle && <AppText>{subtitle}</AppText>
                        }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        padding: 20
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
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
