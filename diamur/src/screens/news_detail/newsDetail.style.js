import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  newsDetailContainer: {
    flex: 1,
  },
  detailMainImage: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
    height: normalize(130),
  },
  innerDetailContainer: {
    paddingRight: normalize(25, 'height'),
    paddingLeft: normalize(25, 'height'),
    position: 'relative',
  },
  detailsTitle: {
    fontSize: 14,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingTop: normalize(20),
    paddingBottom: normalize(12),
    width: '75%',
  },
  detailsdescription: {
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  detailInnerImage: {
    borderRadius: 5,
    height: normalize(175),
    marginTop: normalize(20),
    marginBottom: normalize(18),
  },
  backAction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backIcon: {
    backgroundColor: '#FF3A18',
    borderRadius: 50,
  },
  backText: {
    fontSize: 14,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingLeft: normalize(10),
  },
  otherText: {
    fontSize: 18,
    color: '#000000',
    backgroundColor: '#E2E3E4',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    marginTop: normalize(25),
    paddingTop: normalize(20),
    paddingBottom: normalize(16),
    paddingRight: normalize(25),
    paddingLeft: normalize(25),
  },
  newsOtherContainer: {
    backgroundColor: '#E2E3E4',
    paddingRight: normalize(25),
    paddingLeft: normalize(25),
    paddingBottom: normalize(10),
    flex: 1,
  },
  cardBox: {
    padding: 0,
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 5,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 6,
  },
  articleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBox: {
    width: '30%',
  },
  articleImage: {
    width: '100%',
    height: normalize(90),
    borderRadius: 5,
  },
  contentBox: {
    width: '60%',
    paddingLeft: normalize(15),
    paddingRight: normalize(5),
    // paddingTop: normalize(5),
    // paddingBottom: normalize(5),
  },
  articleTitle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  articledescription: {
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  iconBox: {
    width: '10%',
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareIcon: {
    backgroundColor: '#000',
    width: 25,
    height: 25,
    borderRadius: 5,
    paddingTop: normalize(3.5),
  },
});
