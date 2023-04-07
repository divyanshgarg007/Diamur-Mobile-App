import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';
export const styles = StyleSheet.create({

    menuContainer: {
        paddingTop: normalize(25, 'height'),
        paddingLeft: normalize(25, 'height'),
        paddingRight: normalize(25, 'height'),
    },
    menuTitle: {
        fontSize: 24,
        color: '#000000',
        //fontWeight: '700',
        fontFamily: GlobalStyle.fontSet.OpenSansBold,
        marginBottom: normalize(18, 'height'),
    },
    subTitle: {
        fontSize: 16,
        color: '#000000',
        fontFamily: GlobalStyle.fontSet.OpenSansBold,
    },
    menuLists: {
        borderBottomColor: '#707070',
        borderBottomWidth: 1
    },
    menuItems: {
        fontSize: 16,
        color: '#000000',
        fontFamily: GlobalStyle.fontSet.OpenSansRegular,
        paddingBottom: normalize(18, 'height'),
        paddingTop: normalize(18, 'height'),
        paddingLeft: normalize(25, 'height'),
        paddingRight: normalize(25, 'height'),
    }
})
