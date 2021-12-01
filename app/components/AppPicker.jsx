import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Platform, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';

export default function AppPicker(props) {
    const { icon, placeholder, ...otherProps } = props;
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        color={defaultStyles.colors.medium}
                        size={20}
                        style={styles.icon} />}
                    <AppText style={styles.text}>{placeholder}</AppText>

                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />

                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title='Close'
                        onPress={() => setModalVisible(false)}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }

})
