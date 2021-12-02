import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

import AppButton from '../components/AppButton'

export default function WelcomeScreen(props) {

    const { navigation } = props;
    return (
        <ImageBackground blurRadius={10}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
                <AppButton title="Register" color="secondary"
                    onPress={() => navigation.navigate('Register')}

                />
            </View>


        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'

    },
    logo: {
        width: 100,
        height: 100,


    },
    logoContainer: {

        top: 60,
        position: 'absolute',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        padding: 20
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }

})
