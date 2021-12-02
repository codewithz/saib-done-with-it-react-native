import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from './AppText'

export default function ErrorMessage(props) {

    const { error } = props;

    if (!error) return null;

    return (
        <AppText style={{ color: 'red' }}>{error}</AppText>
    )
}

const styles = StyleSheet.create({})
