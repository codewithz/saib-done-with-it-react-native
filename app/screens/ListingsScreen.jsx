import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import colors from '../config/colors'
import Card from '../components/Card'

const listings = [
    {
        id: 1,
        title: 'Red Jacket for Sale!!',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition!!',
        price: 1000,
        image: require('../assets/couch.jpg')
    },
]

export default function ListingsScreen(props) {

    const { navigation } = props;
    return (
        <Screen style={styles.screen}>

            <FlatList

                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={
                    ({ item }) =>
                        <Card
                            title={item.title}
                            subtitle={"$" + item.price}
                            image={item.image}
                            onPress={() => navigation.navigate('ListingDetails', item)}
                        />
                }
            />


        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        padding: 25


    }
})
