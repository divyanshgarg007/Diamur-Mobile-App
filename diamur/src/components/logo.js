import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import logo from '../assets/images/logo.png'

const Logo = (props) => {
    return (
        <View style={{}}>
            <Image
                source={logo}
                style={styles.buttonBg}
                PlaceholderContent={<ActivityIndicator />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonBg: {
        marginTop: 5,
        width: 232,
        height: 83,
        resizeMode: "cover",
    },
})

export default Logo;