import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SubTitleLabel = (props) => {
    return (
        <View {...props}>
            <Text style={styles.heading}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        lineHeight: 17,
    },
})

export default SubTitleLabel;