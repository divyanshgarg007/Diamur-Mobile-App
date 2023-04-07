import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CancelButton = (props) => {
    return (
        <TouchableOpacity {...props} onPress={props.onClick}>
            <Text style={styles.heading}>Cancel</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        lineHeight: 22,
        color: '#000000'
    },
})

export default CancelButton;