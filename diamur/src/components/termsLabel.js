import React from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';

const TermsLabel = (props) => {
    return (
        <Text style={styles.terms}>By signing up you agree to our <Text style={{ color: '#3CBDE3' }}>{`Terms of use\n`}</Text> and confirm bla bla bla</Text>
    )
}

const styles = StyleSheet.create({
    terms: {
        //position: 'absolute',
        //bottom: Platform.OS === 'ios' ? 20 : 0,
        //backgroundColor: 'red',
        // padding: 30,
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'verdana',
        color: '#404040'
    },
})

export default TermsLabel;