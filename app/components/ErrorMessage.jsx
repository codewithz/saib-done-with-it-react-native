import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from './AppText'

export default function ErrorMessage(props) {

    const { error, visible } = props;

    if (!error || !visible) return null;

    return (
        <AppText style={{ color: 'red' }}>{error}</AppText>
    )
}

const styles = StyleSheet.create({})
