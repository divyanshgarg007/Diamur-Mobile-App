import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, TextInput } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { ActivityIndicator } from 'react-native';
import ProductItem from './productItem';
import { Header } from './components';
import { styles } from './product.style';
import { NAVIGATION } from '../../constants';
import { ModalView } from '../../components/notAuthorized'
const productView = props => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: true });
  }, [props.navigation]);

  const productState = useSelector(state => state.rootReducers?.productState);
  const cartState = useSelector(state => state.rootReducers?.cartState);
  const authState = useSelector(state => state.rootReducers?.authState);

  const [productData, setProductData] = useState([]);

  const [visible, setVisible] = useState(false);

  ////FILTER
  const [filterData, setFilterData] = useState([])
  const [filterObj, setFilterObj] = useState({})
  //////

  ////Product list and product application list
  useEffect(() => {
    props.actions.productListAction();
  }, []);

  const onSuccessApplication = (product, obj) => { //on product application filter success
    let productData = product
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
    if (obj && obj !== undefined) {
      let filteredData = data.filter((data) => {
        if ((data['Product Name'].indexOf(obj?.search) === -1)) {
          return false;
        }

        if (obj?.category) {
          if (parseInt(data['Product Group']?.id) !== parseInt(obj?.category)) {
            return false;
          }
        }

        if (obj?.familyGroup) {
          if (data['Product Family Name'] !== obj?.familyGroup) {
            return false;
          }
        }

        if (obj?.familyChild) {
          if (data['Sub Family']?.name !== obj?.familyChild) {
            return false;
          }
        }

        return true;
      }
      )
      setFilterData(filteredData)
    } else {
      setFilterData(data)
    }
  }
  const onErrorApplication = (data) => { //on product detail error
    console.log(data)
  }
  useEffect(() => {
    // if (productState?.productList?.data?.payload) {
    //   let productData = productState?.productList?.data?.payload?.products
    //   let data = []
    //   for (const key in productData) {
    //     if (productData.hasOwnProperty(key)) {
    //       const element = productData[key]
    //       for (const key2 in element) {
    //         if (element.hasOwnProperty(key2)) {
    //           const element2 = element[key2]
    //           for (const key3 in element2) {
    //             if (element2.hasOwnProperty(key3)) {
    //               const element3 = element2[key3]
    //               data.push(element3)
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //   setProductData(data);
    //   setFilterData(data)
    // }
    if (productState?.productList?.data?.payload) {
      props.actions.productApplicationFilter(Object.keys(productState?.productList?.data?.payload?.areas)[0], onSuccessApplication, onErrorApplication);
      setFilterObj({ ...filterObj, applicationArea: parseInt(Object.keys(productState?.productList?.data?.payload?.areas)[0]) })
    }
  }, [productState.productList]);
  /////

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const renderItem = ({ item }) => {
    return <ProductItem data={item} handleProductDetail={(data) => handleProductDetail(data)} handleAddCart={handleAddCart} />
  };

  /////ADD to cart
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
  /////Product detail

  const onSuccessProduct = (product) => { //on product detail success
    if (product?.payload) {
      let productData = product?.payload?.productDetails
      for (const key in productData) {
        if (productData.hasOwnProperty(key)) {
          const element = productData[key]
          props.navigation.navigate(NAVIGATION.productDetails, { data: element, childProduct: product?.payload?.childProduct, relatedItem: product?.payload?.relatedProduct })
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
  //////

  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }

  ////FILTER Functionality

  const handleFilter = (search, applicationArea, category, familyChild, familyGroup) => {

    let obj = {
      search: search,
      applicationArea: applicationArea,
      category: category,
      familyChild: familyChild,
      familyGroup: familyGroup
    }
    if (applicationArea !== '') {
      props.actions.productApplicationFilter(applicationArea, onSuccessApplication, onErrorApplication, obj);
    } else {
      onSuccessApplication(productState?.productList?.data?.payload?.products, obj)
    }

    setFilterObj(obj)
  }
  const handleFilterClick = () => {
    //Application filter data
    let productDataArea = productState?.productList?.data?.payload?.areas
    let dataArea = []
    for (const key in productDataArea) {
      if (productDataArea.hasOwnProperty(key)) {
        const element = productDataArea[key]
        dataArea.push(element)
      }
    }
    // Category filter data
    let productDataCategory = productState?.productList?.data?.payload?.categories
    let dataCategory = []
    for (const key in productDataCategory) {
      if (productDataCategory.hasOwnProperty(key)) {
        const element = productDataCategory[key]
        dataCategory.push(element)
      }
    }
    // Product family
    let productDataFamily = productState?.productList?.data?.payload?.products
    let dataFamily = []
    for (const key in productDataFamily) {
      let obj = {
        title: key,
        data: Object.keys(productDataFamily[key])
      }
      dataFamily.push(obj)
    }
    props.navigation.navigate(NAVIGATION.productfilter,
      {
        productData: productData,
        //setFilterData: setFilterData,
        areas: dataArea,
        category: dataCategory,
        productFamily: dataFamily,
        filterObj: filterObj,

        handleFilter: handleFilter,
      })
  }
  //////
  console.log('filteredData', productState?.productList?.data?.payload?.products)
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {productState.productList?.loading || cartState?.addCart?.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
        {/* {renderFilter()} */}
        <View style={styles.container}>
          <Header handleFilterClick={handleFilterClick} />
          <FlatList
            data={filterData}
            renderItem={renderItem}
            keyExtractor={item => item['Product Id']}
          />
        </View>
      </SafeAreaView>
      <ModalView toggleOverlay={toggleOverlay} visible={visible} handleLogin={handleLogin} />
    </>

  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(productView);
