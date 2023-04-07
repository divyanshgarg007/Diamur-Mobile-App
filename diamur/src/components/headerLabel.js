import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HeaderLabel = (props) => {
    return (
        <View>
            <Text style={styles.heading}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 33,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Roboto-Bold',
        lineHeight: 39,
    },
})

export default HeaderLabel;