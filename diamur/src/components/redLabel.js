
import React from 'react';
import { StyleSheet, View } from "react-native";
import {strings} from '../localization'
import GlobalStyles from '../style/globalstyle';
import { OSB17Text } from './elements';

const BlackRedLabel = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <OSB17Text style={{ ...styles.theText }}>{strings('redLabel.the')}</OSB17Text>
            <OSB17Text style={styles.redText}>{strings('redLabel.red')}</OSB17Text>
            <OSB17Text style={styles.labelText}>{strings('redLabel.label')}</OSB17Text>
        </View>
    )
}

const WhiteRedLabel = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <OSB17Text style={{ ...styles.theText, ...{ color: '#fff', fontSize: 22 } }}>{strings('redLabel.the')} </OSB17Text>
            <OSB17Text style={{ ...styles.redText, ...{ fontSize: 22 } }}>{strings('redLabel.red')} </OSB17Text>
            <OSB17Text style={{ ...styles.labelText, ...{ color: '#fff', fontSize: 22 } }}>{strings('redLabel.label')}</OSB17Text>
        </View>
    )
}

const styles = StyleSheet.create({
    theText: {
        //color: 'yellow',
        textTransform: "uppercase",
        fontSize: 26,
        fontFamily: GlobalStyles.fontSet.OpenSansBold
    },
    redText: {
        fontSize: 26,
        fontFamily: GlobalStyles.fontSet.OpenSansBold,
        color: GlobalStyles.colorSet.orange,
        textTransform: "uppercase",
        marginLeft: 5,
        marginRight: 5
    },
    labelText: {
        fontSize: 26,
        fontFamily: GlobalStyles.fontSet.OpenSansBold,
        textTransform: "uppercase"
    }
})

export { BlackRedLabel, WhiteRedLabel }