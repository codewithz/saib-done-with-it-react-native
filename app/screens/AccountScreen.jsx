import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'

import colors from '../config/colors'
import Icon from '../components/Icon'

const menuItems = [

    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    },


]


export default function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View>
                <ListItem
                    title='Zartab Nakhwa'
                    subtitle='zartab@codewithz.com'
                    image={require('../assets/zartab.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />

                    }
                />
            </View>
            <ListItem
                title="Logout"
                ImageComponent={
                    <Icon
                        name='logout'
                        backgroundColor='#ffe66d'
                    />
                }

            />



        </Screen>
    )
}

const styles = StyleSheet.create({

    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginTop: 20,
        marginBottom: 30
    }
})
