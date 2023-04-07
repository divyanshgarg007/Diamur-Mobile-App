import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MSL14Text, OSB12Text, OSR12Text } from '../../components/elements'
import { Icon } from 'react-native-elements'
import GlobalStyles from '../../style/globalstyle';
import normalize from 'react-native-normalize';

const HEADING = "Afdichtingspasta P900"
const ORDEREDON = "Ordered on:"
const ESTIMATED = "Estimated delivery time:"
const ORDEREDATE = "22/03/2020"

export default function OrderItem(props) {

    var statusBg = props.status === "pending" ? { backgroundColor: GlobalStyles.colorSet.semiorange } : { backgroundColor: GlobalStyles.colorSet.darkgreen }

    return (
        <View style={styles.container}>
            <View style={[styles.pendingBg, statusBg]}>
                <MSL14Text style={styles.pending}>{props.title}</MSL14Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row", paddingVertical: 5 }}>
                <View style={{ flex: 2, }}>
                    <OSB12Text style={styles.paddingV}>{HEADING}</OSB12Text>
                    <OSR12Text style={styles.paddingV}>{ORDEREDON}</OSR12Text>
                    <OSR12Text style={styles.paddingV}>{ESTIMATED}</OSR12Text>
                </View>
                <View style={{ flex: 1, }}>
                    <OSB12Text style={{ color: "white", paddingVertical: 5 }}>caca</OSB12Text>
                    <OSR12Text style={styles.paddingV}>{ORDEREDATE}</OSR12Text>
                    <OSR12Text style={styles.paddingV}>{ORDEREDATE}</OSR12Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                    <Icon name='keyboard-arrow-right' type="material-icons" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderRadius: 4,
        borderWidth: 0.5,
        padding: 10,
        marginTop: normalize(10)
    },
    pendingBg: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: GlobalStyles.colorSet.semiorange,
        padding: 5,
        borderRadius: 5
    },
    pending: {
        fontFamily: GlobalStyles.fontSet.MuseoSansSemiBold,
        fontSize: 13,
        color: "white"
    },
    paddingV: {
        paddingVertical: 5
    }
})