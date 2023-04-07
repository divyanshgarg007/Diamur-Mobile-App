import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({

    newsContainer: {
        flex: 1,
    },

    newsTitle: {
        fontSize: 24,
        color: '#FF3A18',
        fontFamily: GlobalStyle.fontSet.OpenSansBold,
        textAlign: 'center',
        paddingTop: normalize(25, 'height'),
        paddingBottom: normalize(15, 'height'),
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: screenWidth,
        paddingHorizontal: 18,
    },
    innerBtn: {
        width: 0,
    },
    categoriesBtn: {
        borderWidth: 1,
        borderColor: '#FF3A18',
        borderRadius: 5,
    },
    containerButton: {
        marginRight: 20,
        marginTop: 6,
    },
    btnText: {
        color: '#FF3A18',
        fontSize: 14,
        fontFamily: GlobalStyle.fontSet.OpenSansBold,
        padding:0,
    },
    selectedBtn: {
     backgroundColor: '#FF3A18',
    },
    cardBox: {
       marginTop: normalize(30, 'height'),
       marginBottom: normalize(120, 'height'),
    },
    cardsList: {
        paddingLeft:normalize(30, 'height'),
        paddingRight:normalize(30, 'height'),
    },
    cardItem: {
        marginBottom: normalize(30, 'height'),
        position: 'relative',
    },
    cardImage: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: '100%',
        height: normalize(180),
    },
    cardTitle: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: '#fff',
        backgroundColor: '#000',
        paddingTop: normalize(10, 'height'),
        paddingBottom: normalize(12, 'height'),
        paddingLeft:normalize(15, 'height'),
        paddingRight:normalize(5, 'height'),
    },
    cardCategory: {
        backgroundColor: '#FF3A18',
        color: '#fff',
        fontSize: 12,
        borderRadius: 5,
        paddingTop: normalize(6, 'height'),
        paddingBottom: normalize(6, 'height'),
        paddingLeft:normalize(12, 'height'),
        paddingRight:normalize(12, 'height'),
        position: 'absolute',
        right: 10,
        top: 10,
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
