import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';
import header from '../product_filter/components/header';

export const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#fff',
    flex: 1,
    // paddingHorizontal: normalize(25),
    // paddingVertical: normalize(20),
  },
  profileBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUser: {
    width: normalize(120),
    height: normalize(120),
    borderRadius: 5,
    marginTop: normalize(10),
    marginBottom: normalize(15),
  },

  profileTitle: {
    color: '#000000',
    fontSize: 24,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  profileDesc: {
    color: '#000000',
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    textAlign: 'center',
  },
  profileContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  heading: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  content: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingLeft: normalize(10),
  },
  profileLabel: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingBottom: normalize(7),
    paddingTop: normalize(15),
  },
  profileInfo: {
    marginBottom: normalize(25),
  },

  contactInputBox: {
    borderWidth: 0.5,
    borderColor: '#43464B',
  },
  contactInput: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: normalize(10),
    paddingRight: normalize(10),
    height: normalize(30),
  },
  detailsBox: {
    width: '100%',
    marginBottom: normalize(12),
  },
  headingInput: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    textAlign: 'left',
    paddingBottom: normalize(8),
    paddingTop: normalize(12),
    alignSelf: 'flex-start',
  },
  bottomInputs: {
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  saveBtn: {
    backgroundColor: '#FF3A18',
    width: '75%',
    marginTop: normalize(20),
    marginBottom: normalize(40),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    textTransform: 'uppercase',
  },
  lastInputs: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  box1: {width: '60%'},
  box2: {width: '35%'},
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    zIndex: 1111,
    opacity: 0.7,
  },
});
