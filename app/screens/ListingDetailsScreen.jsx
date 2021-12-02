import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen(props) {

    const { route } = props;
    const listing = route.params;
    console.log(route)
    return (
        <View>
            <Image style={styles.image}
                source={listing.image}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText color="secondary">$ {listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/zartab.jpg')}
                        title="Zartab Nakhwa"
                        subtitle="10 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    subtitle: {
        color: colors.secondary,
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 50
    }

})
