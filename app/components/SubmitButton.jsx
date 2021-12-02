import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik';

import AppButton from './AppButton'

export default function SubmitButton(props) {

    const { handleSubmit } = useFormikContext();

    const { title } = props;
    return (
        <AppButton
            title={title}
            onPress={handleSubmit}
        />
    )
}


