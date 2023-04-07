import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { ActivityIndicator } from 'react-native';
import ProductItem from '../tab_products/productItem';
import Header from './header';
import { NAVIGATION } from '../../constants';
import { strings } from '../../localization'
import { MSB16Button, OSB17Text } from '../../components/elements'
import normalize from 'react-native-normalize';
import { ModalView } from '../../components/notAuthorized'
const HomeView = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: true });
  }, [props.navigation]);

  const onClickAll = () => {
    props.navigation.navigate(NAVIGATION.productsNav)
  }
  const [productData, setProductData] = useState([]);
  const productState = useSelector(state => state.rootReducers?.productState);
  const cartState = useSelector(state => state.rootReducers?.cartState);
  const authState = useSelector(state => state.rootReducers?.authState);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    props.actions.productListAction();
  }, []);

  useEffect(() => {
    if (productState?.productList?.data?.payload) {
      let productData = productState?.productList?.data?.payload?.products
      let data = []
      for (const key in productData) {
        if (productData.hasOwnProperty(key)) {
          const element = productData[key]
          for (const key2 in element) {
            if (element.hasOwnProperty(key2)) {
              const element2 = element[key2]
              for (const key3 in element2) {
                if (element2.hasOwnProperty(key3)) {
                  const element3 = element2[key3]
                  data.push(element3)
                }
              }
            }
          }
        }
      };
      setProductData(data);
    }
  }, [productState.productList]);

  const renderItem = ({ item }) => {
    return <ProductItem data={item} handleProductDetail={(data) => handleProductDetail(data)} handleAddCart={handleAddCart} />
  };
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
          applicationArea: Object.keys(data["Application Area"])[0],
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
  const onSuccessProduct = (product) => { //on product detail success
    if (product?.payload) {
      let productData = product?.payload?.productDetails
      let data = []
      for (const key in productData) {
        if (productData.hasOwnProperty(key)) {
          const element = productData[key]
          props.navigation.navigate(NAVIGATION.productDetails, { data: element, relatedItem: product?.payload?.relatedProduct })
        }
      };
    }
  }
  const onErrorProduct = (data) => { //on product detail error
    console.log(data)
  }
  const handleProductDetail = (data) => {
    props.actions.productDetailAction(data["Product Id"], onSuccessProduct, onErrorProduct);
  }
  return (

    <View style={styles.container}>
      {productState.productList?.loading || cartState?.addCart?.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {/* <ProductCard hide={false} />
                <ProductCard hide={true} /> */}
      <FlatList
        ListHeaderComponent={<Header />}
        data={productData.slice(0, 2)}
        renderItem={renderItem}
        keyExtractor={item => item['Product Id']}
        ListFooterComponent={<View style={{ paddingHorizontal: 15, marginTop: normalize(20), marginBottom: normalize(20) }}>
          <MSB16Button style={{ height: 67 }} titleStyle={{ textTransform: "uppercase" }} title={strings("buttons.viewAllProducts")} onPress={onClickAll} />

        </View>}
      />

      <ModalView toggleOverlay={toggleOverlay} visible={visible} handleLogin={handleLogin} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,

  },
  onethird: {
    flex: 1,
    alignItems: "flex-end",
  },
  twothird: {
    flex: 2,
    alignItems: "flex-start"
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
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(HomeView);