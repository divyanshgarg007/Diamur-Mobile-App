import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const TitleLabel = (props) => {
    return (
        <View {...props}>
            <Text style={styles.heading}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        lineHeight: 30,
        fontFamily: 'OpenSans-Regular'
    },
})

export default TitleLabel;