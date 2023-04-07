import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native';

const ActionButton = (props) => {
    return (
        <TouchableOpacity disabled={props.animating} style={[styles.buttonBg, props.style]} onPress={() => props.onClick()}>
            <View style={{ width: 28, height: 24, backgroundColor: 'transparent' }} />
            <Text style={styles.buttonText}>{props.title}</Text>
            <ActivityIndicator color="#fff" animating={props.animating ? props.animating : false} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBg: {
        flexDirection: 'row',
        marginTop: 30,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8AB74',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#fff'
    }
})

export default ActionButton;