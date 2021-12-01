import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Formik } from 'formik';


import Screen from './../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function LoginScreen(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={values => console.log(values)}

            >
                {({ handleChange, handleSubmit }) =>

                (
                    <React.Fragment>
                        <AppTextInput
                            icon="email"
                            keyboardType="email-address"
                            placeholder='Email'
                            textContentType="emailAddress"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={handleChange('username')}

                        />
                        <AppTextInput
                            icon="lock"
                            secureTextEntry={true}
                            placeholder='Password'
                            textContentType="password"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={handleChange('password')}


                        />

                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </React.Fragment>
                )

                }
            </Formik>



        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }

})
