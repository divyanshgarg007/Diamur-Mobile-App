import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import { Card, Divider, Image, Icon, Overlay } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import {
  MSB16Button,
  MSB16Text,
  OSR11Input,
  OSB12Text,
  OSR11Text,
  OSB17Text,
  OSR16Text,
} from '../../components/elements';
import GlobalStyles from '../../style/globalstyle';
import beton from '../../assets/images/beton.png';
import logo2 from '../../assets/images/logo2.png';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { ActivityIndicator } from 'react-native';
import ProductItem from './productItem';
import { styles } from './product.style';

const productView = props => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState([]);
  const [visible, setVisible] = useState(false);
  const productState = useSelector(state => state.rootReducers?.productState);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    props.actions.productListAction();
  }, []);
  useEffect(() => {
    if (productState?.productList?.data?.payload) {
      setProductData(
        productState?.productList?.data?.payload?.products?.Additifs,
      );
    }
  }, [productState.productList]);
  const SNEL = () => (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      style={{ zIndex: 100 }}>
      {/*<ScrollView style={{width: "100%"}}>*/}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          minHeight: 60,
          padding: 10,
          backgroundColor: 'black',
        }}>
        <View
          style={{ flex: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
          <MSB16Text style={{ color: 'white', textTransform: 'uppercase' }}>
            SNEL bestellen
          </MSB16Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Icon
            name="keyboard-arrow-down"
            type="material-icons"
            color="white"
            size={25}
          />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <OSR16Text
              style={{
                fontSize: 18,
                letterSpacing: -1,
                fontFamily: GlobalStyles.fontSet.OpenSansBold,
              }}>
              Product code/naam
            </OSR16Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
            <OSB12Text
              style={{
                color: GlobalStyles.colorSet.orange,
                lineHeight: 17,
                textDecorationLine: 'underline',
              }}>
              Scan de QR-code
            </OSB12Text>
          </View>
        </View>

        <View>
          <OSR11Input
            placeholder="bv: 0909202930"
            inputStyle={{ color: GlobalStyles.colorSet.orange }}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}>
            <OSR16Text
              style={{
                fontSize: 18,
                letterSpacing: -1,
                fontFamily: GlobalStyles.fontSet.OpenSansBold,
              }}>
              € 25,00 /stuk
            </OSR16Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <OSR16Text>Aantal:</OSR16Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Icon
                  name="plus"
                  type="antdesign"
                  color="white"
                  size={25}
                  style={{
                    backgroundColor: 'black',
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
                <OSR16Text>3</OSR16Text>
                <Icon
                  name="minus"
                  type="antdesign"
                  color="white"
                  size={25}
                  style={{ backgroundColor: 'black', marginLeft: 10 }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(10),
              }}>
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <OSR16Text
                  style={{ fontFamily: GlobalStyles.fontSet.OpenSansBold }}>
                  Totaal:
                </OSR16Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <OSR16Text
                  style={{ fontFamily: GlobalStyles.fontSet.OpenSansBold }}>
                  € 156,00
                </OSR16Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: normalize(20) }}>
          <MSB16Button title="Nu Bestellen" />
          <Divider
            orientation="horizontal"
            color="black"
            width={5}
            style={{ marginTop: normalize(30) }}
          />
        </View>

        <View
          style={{
            marginTop: normalize(20),
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View style={{ justifyContent: 'flex-start', width: '100%' }}>
            <OSB17Text>Laatste 5 bestellingen:</OSB17Text>
          </View>

          <Card containerStyle={{ padding: 0, borderRadius: 5, width: '100%' }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
              <View style={{ flex: 1.5 }}>
                <Image source={beton} style={{ width: 90, height: 130 }} />
              </View>
              <View style={{ flex: 2.5, marginLeft: 5 }}>
                <OSR16Text style={{ lineHeight: 20, fontSize: 16 }}>
                  C20/25 beton S3 D10
                </OSR16Text>
                <OSR16Text
                  style={{
                    lineHeight: 20,
                    marginTop: 5,
                    fontFamily: GlobalStyles.fontSet.OpenSansBold,
                  }}>
                  € 25,00
                </OSR16Text>
              </View>
              <View
                style={{
                  flex: 0.9,
                  height: '100%',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={logo2}
                  style={{ width: 48, height: 27, marginBottom: 10 }}
                />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: GlobalStyles.colorSet.orange,
                borderRadius: 5,
                padding: 5,
              }}>
              <Icon name="add-shopping-cart" type="material-icons" size={30} />
            </View>
          </Card>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: normalize(20),
              marginBottom: normalize(20),
            }}>
            <Icon name="circle" type="material-icons" />
            <Icon name="circle" type="material-icons" />
            <Icon name="circle-thin" type="font-awesome" />
          </View>
        </View>
      </View>
    </Overlay>
  );

  const HEADER = () => {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: 'row',
          paddingVertical: normalize(10, 'height'),
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Icon
            name="filter"
            type="font-awesome"
            color="white"
            size={25}
            style={{ backgroundColor: 'black', borderRadius: 5, width: '30%' }}
          />
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: GlobalStyles.colorSet.orange,
              marginRight: 5,
            }}>
            <OSR11Text
              style={{
                fontSize: 11,
                lineHeight: 23,
                color: GlobalStyles.colorSet.orange,
                textTransform: 'uppercase',
              }}>
              YOUR PRODUCTS
            </OSR11Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: GlobalStyles.colorSet.orange,
              backgroundColor: GlobalStyles.colorSet.orange,
              marginLeft: 5,
            }}>
            <OSR11Text
              style={{
                fontSize: 11,
                lineHeight: 23,
                color: GlobalStyles.colorSet.white,
                textTransform: 'uppercase',
              }}>
              ALL PRODUCTS
            </OSR11Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => <ProductItem title={item.title} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {productState.productList?.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={styles.container}>
        <HEADER />

        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <SNEL />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(productView);
