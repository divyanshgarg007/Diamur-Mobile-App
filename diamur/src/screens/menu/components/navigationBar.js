import React from "react"
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import BACK from '../../../assets/images/cancel.png'
import GlobalStyle from "../../../style/globalstyle"
import { HeaderLogo } from "../../../components"

export default function NavigationBar(props) {
    return (
        <View style={[styles.container, props.style]} >
            <View style={styles.content}>
                <TouchableOpacity onPress={() => props.onClose()}>
                    <Image style={{ width: 30, height: 30, tintColor: "#fff" }} source={BACK} />
                </TouchableOpacity>
                <HeaderLogo />
                <View style={{ width: 30, height: 3 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? -47 : -32,
        height: 84,
        width: '100%',
        backgroundColor: GlobalStyle.colorSet.semiblack,
        paddingHorizontal: 10,
    },
    content: {
        flexDirection: 'row',
        marginTop: 34,
        height: 48,
        //paddingHorizontal: 15,
        backgroundColor: GlobalStyle.colorSet.semiblack,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'CenturyGothic',
        fontSize: 20,
        color: "#000"
    }
})