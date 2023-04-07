import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: normalize(30, 'height'),
        paddingBottom: normalize(30, 'height'),
        paddingLeft: "15%",
        paddingRight: "15%",
        justifyContent: "center",
        alignItems: "center"
    },
})