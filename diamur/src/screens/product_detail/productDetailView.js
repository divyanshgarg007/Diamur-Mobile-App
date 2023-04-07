import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RelatedItem } from './components';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { SelectBoxSize } from './components';
import ProductLabel from '../../assets/images/beton.png';
import AddCart from '../../assets/images/addCart.png';
import IconList from '../../assets/images/list.png';
import IconBag from '../../assets/images/bag.png';
import IconBox from '../../assets/images/boxs.png';
import GlobalStyles from '../../style/globalstyle';
import { SliderBox } from 'react-native-image-slider-box';
import { styles } from '../product_detail/productDetail.style';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { ActivityIndicator } from 'react-native';
import { ModalView } from '../../components/notAuthorized'
import { NAVIGATION } from '../../constants';
import { QuantityInput } from '../../components';
import diaConstruct from '../../assets/images/DIAMUR_CONSTRUCT.png'
import diaFloor from '../../assets/images/DIAMUR_FLOOR.png'
import diaTechmix from '../../assets/images/DIAMUR_TECHMIX.png'
import HTMLView from 'react-native-htmlview';
import I18n from 'react-native-i18n';
import { strings } from '../../localization'
import { TouchableOpacity } from 'react-native';
const PRICE = '$25.00';
const ListItem = props => {
  return (
    <View style={styles.descriptionList}>
      <View style={styles.listIconContainer}>
        <Image source={props.image} style={styles.listIcon}></Image>
      </View>
      <Text style={styles.listTitle}>{props.title}</Text>
    </View>
  );
};
function ProductDetailView(props) {
  const [relatedData, setRelatedData] = useState([]);
  const cartState = useSelector(state => state.rootReducers?.cartState);
  const authState = useSelector(state => state.rootReducers?.authState);
  const [isSelected, setSelection] = useState(null);
  const [isSelectedName, setSelectionName] = useState(null);
  const [visible, setVisible] = useState(false);
  const [valueUnit, setValueUnit] = useState(0)
  const [valuePack, setValuePack] = useState(0)
  const handlePlus = (type) => {
    if (type === 'perUnit') {
      setValueUnit(valueUnit + 1)
    } else if (type === 'perPack') {
      setValuePack(valuePack + 1)
    }

  }
  const handleMinus = (type) => {
    if (type === 'perUnit') {
      if (valueUnit > 0) {
        setValueUnit(valueUnit - 1)
      }
    } else if (type === 'perPack') {
      if (valuePack > 0) {
        setValuePack(valuePack - 1)
      }
    }
  }
  const checkedData = (data) => {
    setSelection(data['Product Id']);
    setSelectionName(data['Product Name'])
  };
  const relatedItem = (item) => {
    return <RelatedItem data={item.source} handleReleatedCart={handleReleatedCart} />
  };
  useEffect(() => {
    let relatedData = props?.route?.params?.relatedItem
    let data = []
    for (const key in relatedData) {
      if (relatedData.hasOwnProperty(key)) {
        const element = relatedData[key]
        data.push(element)
      }
    };
    setRelatedData(data)
  }, []);
  useEffect(() => {
    return () => {
      props.actions.cleanUpAction()
    }
  }, [])
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }
  const handleAddCart = (data, pack, unit) => {
    let totalPrice = (pack * parseInt(data['no_of_pieces_dic_packaging']) + unit) >= parseInt(data['no_of_pieces_dic_packaging']) ? data['price_per_pack'] : data['price_per_unit']
    if (authState?.signIn?.data?.payload?.url?.token) {
      if (pack > 0 || unit > 0) {
        let obj = {
          productId: data["Product Id"],
          applicationArea: props.route?.params?.application_area_id,
          productTotalQty: pack * parseInt(data['no_of_pieces_dic_packaging']) + unit,
          produtPrice: totalPrice,
          withoutPaletQuantity: pack,
          withPaletQuantity: unit,
          numberOfbulk: data['no_of_pieces_dic_packaging'],
          withoutPaletPrice: data['price_per_unit'],
          withPaletPrice: data['price_per_pack'],
        }
        props.actions.addCartAction(obj);
      } else {
        alert('Please select quantity first')
      }
    } else {
      toggleOverlay();
    }
  }

  const handleReleatedCart = (data) => {
    if (authState?.signIn?.data?.payload?.url?.token) {
      let obj = {
        productId: data["Product Id"],
        applicationArea: Object.keys(data["Application Area"])[0]
      }
      props.actions.addCartAction(obj);
    } else {
      toggleOverlay();
    }
  }
  const [selectedSize, setSelectedSize] = useState()
  const handleSelectSize = (item) => {
    setSelectedSize(item["Size"])
    setSelectionName(item['Product Name'])
  }
  return (
    <ScrollView>
      {cartState?.addCart?.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={styles.productDetailContainer}>
        <View style={styles.producttitleBox}>
          <Text style={styles.productdetailsTitle}>
            {isSelectedName ? isSelectedName : props.route.params.data['Product Name']}
          </Text>
          <Image
            source={props.route.params?.data['product group']?.name === 'DIAMUR FLOOR' ? diaFloor : props.route.params?.data['product group']?.name === 'DIAMUR CONSTRUCT' ? diaConstruct : diaTechmix}
            style={styles.labelProduct} ></Image>
        </View>
        <Text style={styles.productPrice}>{PRICE}</Text>
        <View style={styles.productInfoBox}>
          <Text style={styles.productInfo}>{strings("productDetail.priceDecreaseStuck")}</Text>
          <View style={styles.quantityBox}>
            <Text style={styles.productInfo}>€ {props.route.params.data['price_per_unit']} /stuck</Text>
            <View style={{ width: '40%' }}>
              <QuantityInput
                type='perUnit'
                value={valueUnit}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
              />
            </View>
          </View>
        </View>
        {props.route.params?.data['no_of_pieces_dic_packaging']?.length > 0 &&
          <View style={styles.productInfoBox}>
            <Text style={styles.productInfo}>{strings("productDetail.purchasePricePackage")} ({props.route.params?.data['no_of_pieces_dic_packaging']}/stucks)</Text>
            <View style={styles.quantityBox}>
              <Text style={styles.productInfo}>€ {props.route.params?.data['price_per_pack']} /stuck</Text>
              <View style={{ width: '40%' }}>
                <QuantityInput
                  type='perPack'
                  value={valuePack}
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                />
              </View>
            </View>
          </View>
        }
        <Button
          buttonStyle={styles.addCartBtn}
          onPress={() => handleAddCart(props.route.params.data, valuePack, valueUnit)}
          icon={<Image source={AddCart} style={styles.cartIcon} />}
        />
        <Image
          style={styles.productInnerImage}
          source={{
            uri: props.route.params.data['photo Low Resolution'][0],
          }}></Image>
        {/* <Text style={styles.productDescription}>
          {props.route.params.data['description'].replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')}
        </Text> */}
        <HTMLView value={props.route.params.data['description']} />

        <View>
          {props?.route?.params?.childProduct?.ChildproductData[0]?.pibColorsData?.length > 0 &&
            <Text style={styles.colorTitle}>
              {strings("productDetail.colors")}:
            </Text>
          }

          <View style={styles.checkContainer} >
            {props?.route?.params?.childProduct?.ChildproductData[0]?.pibColorsData?.length > 0 && props?.route?.params?.childProduct?.ChildproductData?.map((data, index) => {
              return <TouchableOpacity style={styles.itemBox}>
                <Image source={{ uri: data?.pibColorsData[0]?.HRImage }} style={styles.selectImg} />
                <Text style={styles.colorName}>{data?.pibColorsData[0]?.Name}</Text>
                <CheckBox
                  checked={isSelected === data['Product Id']}
                  onPress={() => checkedData(data)}
                  containerStyle={styles.checkbox}
                  checkedIcon={
                    <View style={styles.uncheck}>
                      <View style={styles.check}></View>
                    </View>
                  }
                  uncheckedIcon={<View style={styles.uncheck} />}
                  checkedColor="red"
                  style={styles.check}
                />
              </TouchableOpacity>

            })

            }
          </View>
          {props?.route?.params?.childProduct?.ChildproductData[0]?.Size &&
            <SelectBoxSize
              calculatorState={props?.route?.params?.childProduct?.ChildproductData}
              handleSelect={handleSelectSize}
              selectedValue={selectedSize}
              title='SELECT SIZE'
            />
          }

        </View>
        <ListItem title="Available in Silo" image={IconList} />
        <ListItem title="Available in Bags" image={IconBag} />
        <ListItem title="Other forms of packaging on request" image={IconBox} />
        <Button
          icon={
            <Icon
              name="plus"
              color={GlobalStyles.colorSet.orange}
              backgroundColor="white"
              type="antdesign"
              size={12}
            />
          }
          onPress={() => handleAddCart(props.route.params.data, valuePack, valueUnit)}
          buttonStyle={styles.addCart}
          title={strings("productDetail.addBasket")}
          titleStyle={styles.addCartTitle}
        />
      </View>
      <ModalView toggleOverlay={toggleOverlay} visible={visible} handleLogin={handleLogin} />
      <SliderBox
        ImageComponent={(item) => relatedItem(item)}
        images={relatedData}
        sliderBoxHeight={200}
        //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#000"
        inactiveDotColor="transparent"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={styles.dotSlideBox}
        dotStyle={styles.dotSlide}
        LoaderComponent={() => null}
      />
    </ScrollView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ProductDetailView);