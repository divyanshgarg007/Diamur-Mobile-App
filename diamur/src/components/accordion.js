import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import normalize from 'react-native-normalize';
import GlobalStyles from '../style/globalstyle';


const Accordian = (props) => {

    toggleExpand = () => {
        props.onClick()
    }

    return (
        <View style={{ width: 232 }}>
            <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
                <Text style={styles.title}>{props.title}</Text>
                <Icon name={'keyboard-arrow-down'} size={20} color={GlobalStyles.colorSet.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: normalize(11),
        fontFamily: GlobalStyles.fontSet.OpenSansSemiBold,
        color: GlobalStyles.colorSet.white,
    },
    row: {

        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 5,
        backgroundColor: GlobalStyles.colorSet.black,
        borderRadius: 2,
        marginTop: normalize(25, 'height'),
        width: 39,
        height: 24
    },
});

export default Accordian