import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';


export default function AppFormField(props) {

    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
    const { name, ...otherProps } = props;
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    )
}


