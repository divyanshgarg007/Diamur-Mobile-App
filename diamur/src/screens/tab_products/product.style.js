import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    // paddingBottom: normalize(30, 'height'),
    // marginBottom: normalize(10),
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  listingHeader: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: normalize(10, 'height'),
  },
  listingIconBox: { flex: 1, justifyContent: 'center' },
  filterIcon: {
    backgroundColor: '#000',
    borderRadius: 5,
    width: '40%',
    height: 30,
    paddingTop: normalize(6),
  },
  buttonBox: { flex: 1, flexDirection: 'row' },
  buttonAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GlobalStyle.colorSet.orange,
    marginRight: 5,
  },
  buttonLabel: {
    fontSize: 11,
    lineHeight: 23,
    color: GlobalStyle.colorSet.orange,
    textTransform: 'uppercase',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
  },
  prodBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GlobalStyle.colorSet.orange,
    backgroundColor: GlobalStyle.colorSet.orange,
    marginLeft: 5,
  },
  prodLabel: {
    fontSize: 11,
    lineHeight: 23,
    color: GlobalStyle.colorSet.white,
    textTransform: 'uppercase',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
  },
})