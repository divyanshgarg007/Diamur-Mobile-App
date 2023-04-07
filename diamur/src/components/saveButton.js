import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native';

const SaveButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonBg} onPress={() => props.onClick()}>
            {
                props.animating ?
                    <ActivityIndicator color="#fff" animating={true} />
                    :
                    <Text style={styles.buttonText}>{props.title}</Text>
            }


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBg: {
        flexDirection: 'row',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8AB74',
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#fff'
    }
})

export default SaveButton;