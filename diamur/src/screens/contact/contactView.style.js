import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: normalize(25),
    paddingVertical: normalize(15),
  },
  contactTitle: {
    color: '#FF3A18',
    fontSize: 24,
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold2,
    paddingBottom: normalize(15),
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
  contactInputTitle: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingBottom: normalize(6),
  },
  contactBox: {
    marginBottom: normalize(15),
  },
  messageInput: {
    borderWidth: 0.5,
    borderColor: '#43464B',
    padding: normalize(10),
    textAlignVertical: 'top',
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  sendBtn: {
    marginTop: normalize(10),
  },
  sendText: {
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },
  contactInfoBox: {
    marginTop: normalize(26),
    marginBottom: normalize(26),
  },
  contactInfoTitle: {
    color: '#FF3A18',
    fontSize: 17,
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold2,
    paddingBottom: normalize(15),
  },
  contactDetails: {
    color: '#0B0B0B',
    fontSize: 16,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingBottom: normalize(10),
  },
  contactFax: {
    paddingBottom: normalize(2),
  },
  selectItem: {
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    textAlign: 'left',
    marginLeft: normalize(3),
  },
  selectBtn: {
    backgroundColor: '#fff',
    width: '100%',
    height: 30,
  },
  dropDownBoxItem: {
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    textAlign: 'left',
    marginLeft: normalize(10),
    padding: 0,
  },
  dropDownBox: {
    height: 30,
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
    zIndex: 1111,
    opacity: 0.8
}
});
