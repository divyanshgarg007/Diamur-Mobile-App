import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import GlobalStyle from '../../style/globalstyle';

export const styles = StyleSheet.create({
  filterBox: {
    backgroundColor: '#fff',
    flex: 1,
  },
  filterConatiner: {
    paddingVertical: normalize(15)
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#FF3A18',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10)
  },
  searchInput: {
    color: '#FF3A18',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: normalize(25),
    paddingRight: normalize(5),
    flex: 1,
  },
  searchIcon: {
    width: '100%',
    marginRight: normalize(30),
  },
  filterTitle: {
    paddingLeft: normalize(25),
    paddingRight: normalize(25),

    color: '#000000',
    fontSize: 24,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  innerFilterContainer: {
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#707070',
    borderTopWidth: 1,
    paddingVertical: normalize(10),
  },
  checkwrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkbox: {
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    paddingLeft: normalize(15),
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
  },
  uncheck: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#43464B',
    borderRadius: 2,
  },
  check: {
    width: 9,
    height: 9,
    backgroundColor: '#43464B',
    margin: 1,
    borderRadius: 2,
  },
  filterLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.MuseoSansRegular,
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
  },
  parentFilterLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.MuseoSansRegular,
    // paddingLeft: normalize(25),
    paddingRight: normalize(25),
  },
  shiftLabel: {
    paddingLeft: normalize(30),
  },
  openShiftLabel: {
    paddingLeft: normalize(30),
  },
  filterLabelOpen: {
    marginLeft: 8,
    fontSize: 20,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    paddingLeft: normalize(22),
    paddingRight: normalize(25),
    paddingBottom: normalize(15),
  },
  parentFilterLabelOpen: {
    marginLeft: 8,
    fontSize: 20,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    paddingTop: normalize(10),
    // paddingLeft: normalize(22),
    paddingRight: normalize(25),
    paddingBottom: normalize(10),
  },
  childCheckboxContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: normalize(20)
  },
  childCheckboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childFilterLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.MuseoSansRegular,
    paddingLeft: normalize(22),
  },
  childUncheck: {
    marginLeft: 1,
    width: 13,
    height: 13,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#43464B',
    borderRadius: 2,
  },
  childCheck: {
    width: 7,
    height: 7,
    backgroundColor: '#43464B',
    margin: 1,
    borderRadius: 2,
  },
  childCheckbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    paddingTop: normalize(0),
    paddingBottom: normalize(15),
    paddingLeft: normalize(15),
  },
  parentCheckbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    paddingTop: normalize(10),
    paddingBottom: normalize(15),
    paddingLeft: normalize(15),
  },
  shiftCheckbox: {
    paddingLeft: normalize(30),
  },

  childSearchIcon: {
    width: '100%',
    marginRight: normalize(40),
  },
  searchBtn: {
    marginBottom: normalize(30),
    marginLeft: normalize(25),
    width: '87%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchText: {
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
  },
  closeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: normalize(10)
    // position: 'absolute',
    // right: normalize(-15, 'height'),
    // zIndex: 111,
    // top: normalize(0, 'height'),
  },
  backdropContainer: {
    // backgroundColor: '#43464B',
    // opacity: 0.65,
    // padding: 0,
    // margin: 0,
  },
  innerOverlay: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
    // paddingLeft: normalize(20),
    // paddingRight: normalize(20),
    // paddingTop: normalize(15),
    // paddingBottom: normalize(15),
    padding: 0,
    margin: 0,
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
});
