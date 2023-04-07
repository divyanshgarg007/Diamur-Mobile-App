import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Card, Image, Icon } from 'react-native-elements';
import { strings } from '../../localization';
import I18n from 'react-native-i18n';
import { OSR16Text, OSR11Text } from '../../components/elements';
import GlobalStyles from '../../style/globalstyle';
import logo2 from '../../assets/images/logo2.png';
import diaConstruct from '../../assets/images/DIAMUR_CONSTRUCT.png'
import diaFloor from '../../assets/images/DIAMUR_FLOOR.png'
import diaTechmix from '../../assets/images/DIAMUR_TECHMIX.png'
import { QuantityInput } from '../../components';
import { connect, useSelector } from 'react-redux'
const ProductPicture = 'Products in the picture';

const ProductItem = props => {
  const authState = useSelector((state) => state.rootReducers?.authState)
  const [language, setLanguage] = useState(authState.settings.language ? authState.settings.language : 'nl');

  I18n.locale = language
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

  return (
    <Card
      containerStyle={{ padding: 0, borderRadius: 5, borderColor: '#000000' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        {props.hide && (
          <View style={styles.top}>
            <OSR11Text style={{ color: 'white' }}>{ProductPicture}</OSR11Text>
          </View>
        )}
        <View style={{ flex: 0.6 }}>
          <Image
            source={{ uri: props?.data['photo Low Resolution'][0] }}
            style={{ width: 91, height: 131, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flex: 2, marginLeft: 10 }}>
          <OSR16Text style={{ lineHeight: 20 }}>
            {props?.data['Product Name']}
          </OSR16Text>
          <View style={styles.productInfoBox}>
            <Text style={styles.productInfo}>{strings("productDetail.priceDecreaseStuck")}</Text>
            <View style={styles.quantityBox}>
              <Text style={styles.productInfo}>€ {props?.data['price_per_unit']} /stuck</Text>
              <QuantityInput
                type='perUnit'
                value={valueUnit}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
              />
            </View>
          </View>
          {props?.data['no_of_pieces_dic_packaging']?.length > 0 &&
            <View style={styles.productInfoBox}>
              <Text style={styles.productInfo}>{strings("productDetail.purchasePricePackage")} ({props?.data['no_of_pieces_dic_packaging']}/stucks)</Text>
              <View style={styles.quantityBox}>
                <Text style={styles.productInfo}>€ {props?.data['price_per_pack']} /stuck</Text>
                <QuantityInput
                  type='perPack'
                  value={valuePack}
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                />
              </View>
            </View>
          }

        </View>
        <View
          style={{
            flex: 0.5,
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={props?.data['Product Group']?.name === 'DIAMUR FLOOR' ? diaFloor : props?.data['Product Group']?.name === 'DIAMUR CONSTRUCT' ? diaConstruct : diaTechmix}
            style={{ width: 48, height: 27, marginBottom: 10 }}
          />
        </View>
      </View>
      {!props.hide ? (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 60 }}>
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
              buttonStyle={styles.shopCart}
              containerStyle={{ borderRadius: 0 }}
              title={strings('buttons.shoppingCart')}
              onPress={() => {
                props.handleAddCart(props.data, valuePack, valueUnit);
              }}
              titleStyle={{
                fontSize: 14,
                fontFamily: GlobalStyles.fontSet.MuseoSansBold,
                marginLeft: 5,
                color: 'white',
              }}
            />
          </View>
          <View style={{ flex: 40 }}>
            <Button
              onPress={() => props.handleProductDetail(props.data)}
              buttonStyle={styles.viewProduct}
              containerStyle={{ borderRadius: 0 }}
              title={strings('buttons.viewProduct')}
              titleStyle={{
                fontSize: 14,
                fontFamily: GlobalStyles.fontSet.MuseoSansBold,
                marginLeft: 5,
                color: 'white',
              }}
            />
          </View>
        </View>
      ) : (
        <View />
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: GlobalStyles.colorSet.orange,
  },
  viewProduct: {
    borderRadius: 0,
    borderBottomEndRadius: 4,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: GlobalStyles.colorSet.black,
  },
  productInfo: {
    fontSize: 14,
    lineHeight: 23,
    color: GlobalStyles.colorSet.black,
    fontFamily: GlobalStyles.fontSet.OpenSansRegular,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  productInfoBox: {
    marginTop: 10,
  }
});

export default ProductItem;
