import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Dimensions } from 'react-native';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemsList: {
        paddingBottom: normalize(5),
    },
});
