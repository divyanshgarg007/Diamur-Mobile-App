import React from 'react';
import { TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const BackButton = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('AppNavigator')}>
            <Feather name="arrow-left" size={30} color="#FFFFFF" />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        //position: 'absolute',
        //top: 27,
        height: 44,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 14,
        height: 24,
    },
})

export default BackButton;
