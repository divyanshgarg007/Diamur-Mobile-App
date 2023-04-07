import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  appContainerBox: {
    margin: normalize(15),
  },
  appCardBox: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 0,
  },
  dotSlide: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
  },
  dotSlideBox: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  functionImage: {
    width: '100%',
    height: normalize(500),
    borderRadius: 5,
  },
  functionTitle: {
    paddingHorizontal: normalize(47),
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    fontSize: 22,
    color: '#fff',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    bottom: '45%',
    left: normalize(0),
    right: normalize(0),
  },
});
