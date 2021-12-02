import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';


import Screen from './../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from './../components/AppText';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export default function LoginScreen(props) {


    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />

            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}

            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) =>

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
                            onBlur={() => setFieldTouched("username")}

                        />
                        <ErrorMessage error={errors.username} visible={touched.username} />
                        <AppTextInput
                            icon="lock"
                            secureTextEntry={true}
                            placeholder='Password'
                            textContentType="password"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched("password")}


                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />

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
