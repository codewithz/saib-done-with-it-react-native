import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Constants from 'expo-constants';

import Screen from '../components/Screen';
import ListItemSeparator from './../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';



const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/zartab.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/zartab.jpg')
    },

]


export default function MessageScreen() {

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Item Pressed', item)}
                        renderRightActions={() => <ListItemDeleteAction />}

                    />}
                ItemSeparatorComponent={ListItemSeparator}

            />
        </Screen>
    )
}

const styles = StyleSheet.create({



})
