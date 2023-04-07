import React from 'react';
import { StyleSheet, View } from "react-native";
import { Card, Image, } from 'react-native-elements'
import { OSR11Text } from '../../components/elements'
import topimage from '../../assets/images/landing.png'
import { WhiteRedLabel } from '../../components';

const DESC = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"

export default function Header() {
    return (
        <Card containerStyle={styles.container}>
            <View style={styles.bg}>
                <View style={styles.twothird}>
                    <WhiteRedLabel />
                    <OSR11Text style={{ marginBottom: 10, color: "white" }}>{DESC}</OSR11Text>
                </View>
                <View style={styles.onethird}>
                    <Image
                        source={topimage}
                        style={{ width: 90, height: 130, }}
                    />
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#000'
    },
    bg: {
        flex: 1,
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center"
    },
    onethird: {
        flex: 1,
        alignItems: "flex-end",
    },
    twothird: {
        flex: 2,
        alignItems: "flex-start"
    }
})