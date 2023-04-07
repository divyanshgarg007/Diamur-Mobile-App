import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';
export const styles = StyleSheet.create({
  feedbackContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: normalize(25),
    marginRight: normalize(25),
  },
  feedbackTitle: {
    fontSize: 24,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  inputName: {
    marginTop: normalize(20),
    fontSize: 12,
    color: '#0B0B0B',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  sendBtn: {
    marginTop: normalize(25),
  },
  backBtn: {
    backgroundColor: '#000',
    marginTop: normalize(15),
    borderRadius: 5,
  },
  backText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    textTransform: 'uppercase',
  },
  sendText: {
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },
  messageInput: {
    borderWidth: 0.5,
    borderColor: '#9A9B9F',
    padding: normalize(10),
    textAlignVertical: 'top',
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  messageBox: {
    marginTop: normalize(10),
  },
});
