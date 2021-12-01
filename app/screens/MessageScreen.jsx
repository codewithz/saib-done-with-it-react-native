import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Constants from 'expo-constants';

import Screen from '../components/Screen';
import ListItemSeparator from './../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';



const initialMessages = [
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

    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = (message) => {
        //Delete the message from messages
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);

    }

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
                        renderRightActions={() =>
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />}

                    />}
                ItemSeparatorComponent={ListItemSeparator}

            />
        </Screen>
    )
}

const styles = StyleSheet.create({



})
