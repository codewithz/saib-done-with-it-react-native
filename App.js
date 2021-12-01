import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {

  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <TextInput
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }}
        clearButtonMode="always"
        secureTextEntry={true}


      />
      <Text>{firstName}</Text>
    </Screen>
  );
}




