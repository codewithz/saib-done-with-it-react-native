import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Switch, Button } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails', { id: 1, name: 'Second Tweet' })}
    />
  )
}


const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const Account = () => (
  <Screen>
    <Text>Accounts</Text>

  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets"
    screenOptions={{
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerShown: true
    }}

  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
        headerTintColor: 'white',
        headerShown: true
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)


export default function App() {


  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}




