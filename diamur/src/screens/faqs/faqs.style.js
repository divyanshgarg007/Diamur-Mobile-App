import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';
export const styles = StyleSheet.create({

    faqsContainer: {
        marginTop:normalize(25),
        marginLeft:normalize(25),
        marginRight:normalize(25),
    },
    faqsTitle: {
        fontSize: 24,
        color: '#FF3A18',
        fontFamily: GlobalStyle.fontSet.OpenSansBold,
        textAlign: 'center',
    },
    faqsBtn: {
        marginTop: normalize(25),
        marginBottom: normalize(25),
    },
    askText: {
        fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
        fontSize: 16,
        color: '#fff',
    },
    accordionBox: {
        backgroundColor: '#000000',
        marginTop: normalize(10),
        marginBottom: normalize(10),
        borderRadius: 5,
    },
    faqTitle: {
        color: '#fff',
        fontSize: 12,
        fontFamily: GlobalStyle.fontSet.OpenSansRegular,
        marginBottom: normalize(0),
    },
    faqdescription: {
        color: '#000',
        fontSize: 12,
        fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    },
    faqbody: {
        marginTop: normalize(-15),
        paddingTop: 0,
        paddingBottom: 0,
        width: '100%',
    },
    accordionBoxOpen: {
        backgroundColor: 'transparent',
        marginTop: normalize(10),
        marginBottom: normalize(10),
        borderRadius: 5,
    },
    faqTitleOpen: {
        color: '#FF3A18',
        fontSize: 14,
        fontFamily: GlobalStyle.fontSet.OpenSansBold,
        marginBottom: normalize(0),
    },
})
