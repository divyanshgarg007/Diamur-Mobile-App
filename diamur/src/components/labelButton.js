import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const LabelButton = (props) => {
    return (
        <TouchableOpacity>
            <Text style={styles.heading}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 22,
        marginBottom: 11,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'verdana',
        lineHeight: 15,
        color: '#91C4FB'
    },
})

export default LabelButton;