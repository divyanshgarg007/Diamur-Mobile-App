import React from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native";
//import colors from "../styles/colors";

const ModalAlert = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}

        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 25 }}>
                        {/* <Text style={styles.title}>{props.title}</Text> */}
                        <Text style={styles.message}>{props.message}</Text>
                    </View>
                    <View style={styles.bottomButtonBg}>
                        <ActionButton title={props.cancelTitle}
                            type="cancel"
                            onClick={() => props.onCancel()}
                        />

                        <ActionButton style={{ marginLeft: 24 }} title={props.okTitle}
                            type="ok"
                            onClick={() => props.onOk()}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const ActionButton = (props) => {
    var backgroundColor = props.type === "cancel" ? "#959595" : "#FE6430"
    return (
        <TouchableOpacity
            style={[styles.button, props.style, { backgroundColor: backgroundColor }]}
            onPress={() => props.onClick()}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 281,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'space-between',
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9BEF26',
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        fontFamily: 'verdana',
        fontSize: 12,
        lineHeight: 15,
        color: '#fff'
    },
    title: {
        marginTop: 25,
        fontFamily: 'SegoeUI',
        fontStyle: 'normal',
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 23,
    },
    message: {
        marginTop: 15,
        fontFamily: 'verdana',
        fontSize: 14,
        lineHeight: 19,
        color: '#404040',
        textAlign: 'center'
    },
    bottomButtonBg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 25
    },

});

export default ModalAlert;