import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';
import header from '../product_filter/components/header';

export const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(20),
  },
  profileBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerBox: {
    width: normalize(120),
    height: normalize(120),
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#000000',
    paddingHorizontal: normalize(12),
    marginBottom: normalize(15),
  },
  innerBox: {
    position: 'absolute',
    bottom: normalize(0),
    right: normalize(0),
  },
  uploadImage: {
    width: normalize(95),
    height: normalize(100),
    marginTop: normalize(15),
  },
  uploadIcon: {
    width: normalize(25),
    height: normalize(23),
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
  changeBtn: {
    backgroundColor: '#000',
    marginTop: normalize(23),
  },
  sendBtn: {
    marginTop: normalize(15),
    marginBottom: normalize(30),
  },
  sendText: {
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },

  backdropContainer: {
    backgroundColor: '#43464B',
    opacity: 0.65,
  },
  innerOverlay: {
    backgroundColor: '#fff',
    width: '95%',
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
  },
  nameTitle: {
    color: '#000',
    fontSize: 16,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingBottom: normalize(10),
  },
  messageBody: {
    color: '#000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingBottom: normalize(20),
  },
  resendLinkBtn: {
    backgroundColor: '#FF3A18',
    width: '100%',
    marginBottom: normalize(11),
  },
  resendText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    textTransform: 'uppercase',
  },
  emailBox: {
    borderLeftWidth: 2,
    borderLeftColor: '#000',
    paddingVertical: normalize(10),
    paddingLeft: normalize(15),
    marginBottom: normalize(20),
  },
  emailTitle: {
    color: '#000',
    fontSize: 9,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingBottom: normalize(5),
  },
  emailBody: {
    color: '#000',
    fontSize: 10,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  cancelBtn: {
    backgroundColor: '#000',
  },
  contactInputBox: {
    borderWidth: 0.5,
    borderColor: '#43464B',
    marginBottom: normalize(15),
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
});
