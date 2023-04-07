import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: normalize(30, 'height'),
        paddingBottom: normalize(30, 'height'),
    },
    scrollContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#aaa",
    }


})