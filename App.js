import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Switch } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { NavigationContainer } from '@react-navigation/native';
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



const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);


export default function App() {


  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}




