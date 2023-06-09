import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Dimensions } from 'react-native';
import GlobalStyle from '../../style/globalstyle';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: normalize(30),
    paddingBottom: normalize(30),
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    color: '#FF3A18',
  },
  labelSelected: {
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    color: '#fff',
  },
  indicator: {
    backgroundColor: '#FF3A18',
    height: 3,
  },
  tabbar: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FF3A18',
    height: 50,
  },
  firstRoute: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingBottom: normalize(139),
  },
  secondRoute: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    height: 46,
    backgroundColor: '#FF3A18',
    padding: 0,
    margin: 0,
  },
  tabBox: {
    padding: 0,
    margin: 0,
  },
  firstRouteBtn: {
    width: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    backgroundColor: '#FF3A18',
  },
  secondRouteBtn: {
    width: width / 2,
    backgroundColor: '#fff',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoppingBox: {
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
    width: normalize(300),
  },
  shoppingBtn: {
    backgroundColor: '#000',
    marginTop: normalize(20),
    marginBottom: normalize(10),
  },
  shoppingText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  itemsList: {
    paddingLeft: normalize(12),
    paddingRight: normalize(12),
    paddingBottom: normalize(5),
  },
  top: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    padding: 10,
    backgroundColor: 'black',
    borderBottomEndRadius: 4,
    borderTopLeftRadius: 4,
  },
  shopCart: {
    borderRadius: 0,
    borderBottomLeftRadius: 4,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: GlobalStyle.colorSet.orange,
  },
  viewProduct: {
    borderRadius: 0,
    borderBottomEndRadius: 4,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: GlobalStyle.colorSet.black,
  },
  stepper: {
    marginLeft: normalize(10),
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colorSet.orange,
    borderRadius: 20,
  },
  cardContainer: {
    padding: 0,
    borderRadius: 5,
    borderColor: '#000000',
  },
  cardBox: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: normalize(10),
  },
  imageBox: { flex: 1.5 },
  cardImage: { width: 91, height: 131, resizeMode: 'contain', },
  cardInfo: {
    paddingVertical: 10,
    flex: 2.5,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  carddesc: {
    fontSize: 12,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  priceBox: { flexDirection: 'row' },
  cardPrice: {
    fontSize: 16,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  closeBox: {
    flex: 0.9,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconBox: {
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 33,
    height: 26,
  },
  stepperBox1: {
    backgroundColor: '#FF3A18',
    height: normalize(72),
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
    paddingTop: normalize(18),
    paddingBottom: normalize(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    bottom: normalize(0),
  },
  cartInfo: {
    width: '70%',
  },
  cartTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  cartMsg: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  cartAction: { width: '30%' },
  cartContinue: { backgroundColor: '#000' },
  continueText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  stepIcon: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF3A18',
    backgroundColor: '#fff',
    width: 18,
    height: 18,
    position: 'absolute',
    top: normalize(-5),
    left: normalize(20),
  },
  stepImage: {
    width: 9,
    height: 5,
  },
  stepperBox2: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#FF3A18',
    height: normalize(350),
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
    paddingTop: normalize(18),
    // paddingBottom: normalize(18),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    bottom: normalize(0),
    width: '100%',
  },
  deliveyTitle: {
    fontSize: 18,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  checkboxContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  checkbox: {
    // paddingTop: normalize(15),
    paddingBottom: normalize(0),
    paddingLeft: normalize(0),
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
  deliverText: {
    color: '#000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingLeft: normalize(10),
  },
  deliveySubTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingTop: normalize(13),
  },
  siteAdd: {
    paddingTop: normalize(20),
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: normalize(10),
  },
  dateBox: {
    borderWidth: 0.5,
    borderColor: '#43464B',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  dateInput: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: normalize(10),
    paddingRight: normalize(5),
    flex: 1,
    height: normalize(30),
  },
  dateIcon: {
    width: '100%',
    backgroundColor: '#000',
    paddingTop: normalize(7),
    height: 31,
    width: 40,
  },
  timeBox: {
    borderWidth: 0.5,
    borderColor: '#43464B',
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
  },
  timeInput: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: normalize(10),
    paddingRight: normalize(5),
    flex: 1,
    height: normalize(30),
  },
  timeIcon: {
    width: '100%',
    backgroundColor: '#000',
    paddingTop: normalize(7),
    height: 31,
    width: 40,
  },
  addBox: {
    paddingTop: normalize(25),
    width: '99.5%',
  },
  addText: {
    color: '#000',
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  addInput: {
    borderWidth: 0.5,
    borderColor: '#43464B',
    backgroundColor: '#E2E3E4',
    padding: normalize(10),
    marginTop: normalize(10),
    textAlignVertical: 'top',
    fontSize: 12,
    color: '#000000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  bottomAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: normalize(20),
  },
  addressBox: {
    width: '50%',
  },
  addressTitle: {
    color: '#000',
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  address: {
    color: '#000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  step2Icon: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF3A18',
    backgroundColor: '#FF3A18',
    width: 18,
    height: 18,
    position: 'absolute',
    top: normalize(-7),
    left: normalize(18),
  },
  backBox: {
    backgroundColor: '#FF3A18',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: normalize(0),
    borderRadius: 5,
    paddingTop: normalize(8),
    paddingBottom: normalize(8),
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    zIndex: 111,
  },
  backText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: GlobalStyle.fontSet.MuseoSansRegular,
  },
  stepperBox3: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#FF3A18',
    height: normalize(375),
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
    paddingTop: normalize(18),
    // paddingBottom: normalize(0),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    bottom: normalize(0),
    width: '100%',
  },
  deliveyContent: {
    color: '#000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingTop: normalize(8),
    paddingBottom: normalize(5),
  },
  additionText: {
    color: '#43464B',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingTop: normalize(11),
    paddingBottom: normalize(5),
  },
  additionBody: {
    color: '#43464B',
    fontSize: 11,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    width: '60%',
  },
  paymentBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: normalize(12),
  },
  paymentTitle: {
    color: '#000',
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingTop: normalize(8),
    paddingRight: normalize(10),
  },
  orderAction: {
    width: '100%',
    flexDirection: 'row',
    marginTop: normalize(22),
    marginBottom: normalize(22),
    justifyContent: 'flex-end',
  },
  confirmBtn: {
    backgroundColor: '#000',
    width: 200,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: normalize(8),
  },
  itemTitleBox: {
    width: '60%',
  },
  itemQtyBox: {
    width: '20%',
  },
  itemPriceBox: {
    width: '20%',
  },
  itemPrice: {
    textAlign: 'right',
  },
  itemView: {
    color: '#000000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  backdropContainer: {
    backgroundColor: '#B2B2B2',
    opacity: 0.8,
  },
  innerOverlay: {
    backgroundColor: '#FF3A18',
    width: '95%',
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
  },
  orderTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingBottom: normalize(7),
  },
  orderSubTitle: {
    color: '#fff',
    fontSize: 13,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  orderHistoryBtn: {
    backgroundColor: '#000',
    width: 160,
    marginTop: normalize(20),
    marginBottom: normalize(20),
  },
  viewText: {
    paddingTop: normalize(6),
    textDecorationLine: 'underline',
  },
  closeOverlayOrder: {
    position: 'absolute',
    right: normalize(0),
    zIndex: 111,
  },
  historyBox: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
  },
  historyTitle: {
    fontSize: 18,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  historySubTitle: {
    fontSize: 12,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  historyBill: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(8),
  },
  billTitle: {
    fontSize: 12,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  billDownload: {
    fontSize: 12,
    color: '#FF3A18',
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold2,
    textDecorationLine: 'underline',
  },
  historySent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: normalize(8),
  },
  sentTitle: {
    fontSize: 12,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  sentDesc: {
    fontSize: 12,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
  },
  prodOrder: {
    paddingBottom: normalize(6),
  },
  historyItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: normalize(10),
  },
  historyItemView: {
    textDecorationLine: 'underline',
  },
  borderLine: {
    borderColor: '#43464B',
    borderWidth: 1,
    marginBottom: normalize(10),
    marginTop: normalize(7),
  },
  historyTotal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: normalize(10),
  },
  totalHistory: {
    fontSize: 12,
    color: '#000',
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
  },
  reorderBtn: {
    marginTop: normalize(5),
    marginBottom: normalize(10),
    paddingHorizontal: normalize(15),
    width: 'auto',
    height: normalize(30),
  },
  reorderText: {
    fontFamily: GlobalStyle.fontSet.MuseoSansBold,
    fontSize: 10,
    color: '#fff',
  },
  historyBadge: {
    backgroundColor: '#F47920',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: normalize(1),
    top: normalize(1),
    borderRadius: 3,
    paddingTop: normalize(8),
    paddingBottom: normalize(8),
    paddingLeft: normalize(15),
    paddingRight: normalize(15),
    zIndex: 111,
  },
  bagdeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: GlobalStyle.fontSet.MuseoSansBold,
  },
  reorderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  yardBox: {
    width: '99.5%',
  },
  yardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '99.5%',
  },
  yardAdd: {
    borderWidth: 0.5,
    borderColor: '#43464B',
    marginTop: normalize(10),
  },
  yardCity: {
    width: '49%',
  },
  yardPin: {
    width: '48%',
  },
  bottomConfirm: {
    marginBottom: normalize(17),
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
    opacity: 0.8,
    zIndex: 1111,
  },
});
