import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  archieveContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: normalize(20),
    paddingBottom: normalize(25),
    paddingHorizontal: normalize(15),
  },
  latestTitle: {
    fontSize: 16,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingHorizontal: normalize(15),
  },
  archieveCard: {padding: 0, borderRadius: 5, borderColor: '#000000'},
  archievView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(10),
    width: '100%',
  },
  imageCard: {
    width: '25%',
  },
  imageView: {width: 62, height: 90},
  infoCard: {
    width: '60%',
  },
  archiveTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  archivePrice: {
    fontSize: 14,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  addCard: {
    position: 'absolute',
    right: normalize(10),
    top: normalize(10),
  },
  logoUp: {width: 48, height: 27},
  cartCard: {
    backgroundColor: '#FF3A18',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
    position: 'absolute',
    right: normalize(1),
    bottom: normalize(1),
  },
  iconCart: {
    width: 17,
    height: 16,
  },
  cartPlusCard: {
    backgroundColor: '#000',
    position: 'absolute',
    left: normalize(2),
    top: normalize(2),
    borderRadius: 4,
  },
  iconPlusCart: {
    width: 4,
    height: 4,
    margin: 4,
  },
});
