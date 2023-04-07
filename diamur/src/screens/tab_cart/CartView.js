import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Alert } from 'react-native';
import { MSB16Button } from '../../components/elements';
import { TabView, TabBar } from 'react-native-tab-view';
import { styles } from './cart.style';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings } from '../../localization';
import { ActionCreators } from '../../redux/action';
import { Header, Step1, Step2, Step3, Step4, Failure, Payment } from './components';
import ProductItem from './productItem';
import HistoryItem from './historyItem';
import { ActivityIndicator } from 'react-native';
import { NAVIGATION } from '../../constants';
import { NotAuthView } from '../../components/notAuthorizedView'

const CartView = props => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: true });
  }, [props.navigation]);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'first', title: 'Shopping cart' },
    { key: 'second', title: 'Order history' },
  ]);

  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const orderState = useSelector(state => state.rootReducers?.orderState);
  const [cartData, setCartData] = useState([]);
  const cartState = useSelector(state => state.rootReducers?.cartState);
  const authState = useSelector(state => state.rootReducers?.authState);
  const [visible, setVisible] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false)
  const [showOrderReview, setShowOrderReview] = useState(false)
  const [showThanku, setThanku] = useState(false)
  const [showFailure, setFailure] = useState(false)
  const [orderReviewData, setOrderReviewData] = useState([])

  //Add delivery detail
  const [deliveryData, setDeliveryData] = useState([]);
  const [error, setError] = useState([])

  ///order detail
  const [orderData, setOrderData] = useState([]);
  const [errorOrder, setOrderError] = useState([])

  // payment
  const [payUrl, setPaymentUrl] = useState()
  const [orderNo, setOrderNo] = useState(null)

  useEffect(() => {
    if (authState?.signIn?.data?.payload?.url?.token) {
      props.actions.orderListAction();
      props.actions.cartListAction()
      props.actions.getDeliveryListAction()
    } else {
      toggleOverlay();
    }
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }

  useEffect(() => {
    if (orderState.orderList?.data?.payload) {
      setOrderHistoryData(orderState.orderList?.data?.payload);
    }
  }, [orderState.orderList]);

  useEffect(() => {
    if (cartState.cartList?.data?.payload) {
      setCartData(cartState.cartList?.data?.payload);
    }
  }, [cartState.cartList]);

  useEffect(() => {
    if (orderState.getDeliveryList?.data?.payload) {
      setDeliveryData(orderState.getDeliveryList?.data?.payload);
    }
  }, [orderState.getDeliveryList]);

  const renderItem = ({ item }) => <ProductItem data={item}
    updateCartQuantity={updateCartQuantity}
    deleteCartItem={deleteCartItem}
  />;

  const renderHistoryItem = ({ item }) => <HistoryItem data={item} handleReorder={handleReorder} />;

  const handleContinueShopping = () => {
    props.navigation.navigate(NAVIGATION.productsNav)
  }

  const updateCartQuantity = (value, id) => { // cart qauntity update
    props.actions.cartQuantityUpdateAction(value, id)
  }

  const handleReorder = (id) => {// reorder button click
    props.actions.orderAgainAction(id)
  }

  const deleteCartItem = (id) => {//delete cart item
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this product?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deleteCartItemConfirm(id);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  }

  const deleteCartItemConfirm = (id) => {
    props.actions.deleteCartItemAction(id)
  }

  const handleDelivery = () => {
    setShowDelivery(!showDelivery)
  }

  const onSuccessOrder = (data) => { //on order detail success
    setOrderData(data)
  }

  const onErrorOrder = (data) => { //on order detail error
    setOrderError(data?.payload)
  }

  const onSuccess = (data) => { // on add delivery detail success
    setShowDelivery(false)
    if (data.payload) {
      setShowOrderReview(true)
      setOrderReviewData(data.payload)
      props.actions.orderInformationAction(data, onSuccessOrder, onErrorOrder)
    }
  }

  const onError = (data) => { // on add delivery detail error
    setError(data?.payload)
  }

  const handleDeliverySelection = (data) => {//Add delivery detail click
    setError([])
    props.actions.addDeliveryDetailAction(data, onSuccess, onError);
  }

  const onSuccessPaymentRequest = (data) => {//Payment request
    if (data.payload) {
      setPaymentUrl(data.payload.payUrl)
      setOrderNo(data.payload.merchantOrderReference)
    }
  }
  const onErrorPaymentRequest = (data) => {//Payment request
    console.log(data)
  }
  const handlePayment = (data) => { /// payment submit
    setVisible(false)
    setShowDelivery(false)
    setShowOrderReview(false)
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to redirect to payment?",
      [
        {
          text: "Yes",
          onPress: () => {
            let obj = {
              order_type: 1
            }
            props.actions.paymentRequestAction(obj, onSuccessPaymentRequest, onErrorPaymentRequest)
          },
        },
        {
          text: "No",
        },
      ]
    );
  }

  const handleBackDelivery = () => {
    setShowOrderReview(false)
    setShowDelivery(true)
  }

  const handleOrderHistory = () => { // After success redirect to order history
    props.navigation.navigate(NAVIGATION.archiveNav)
  }

  const FirstRoute = () => (
    <>
      <View style={styles.firstRoute}>
        {cartState.cartList?.loading || cartState.cartQuantityUpdate?.loading || cartState.cartDeleteItem?.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
        <View style={styles.shoppingBox}>
          <MSB16Button
            title={strings('buttons.continueShopping')}
            style={styles.shoppingBtn}
            titleStyle={styles.shoppingText}
            onPress={handleContinueShopping}
          />
        </View>
        <View style={styles.itemsList}>
          <FlatList
            data={cartData?.cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        {cartData?.cartItems?.length > 0 &&
          <Step1 totalAmount={cartData?.cart} handleDelivery={handleDelivery} />
        }

        {showDelivery &&
          <Step2 handleDelivery={handleDelivery} deliveryData={deliveryData} handleDeliverySelection={handleDeliverySelection} error={error} />
        }

        {showOrderReview &&
          <Step3 orderData={orderData?.payload}
            errorOrder={errorOrder}
            handlePayment={handlePayment}
            setShowOrderReview={setShowOrderReview}
            handleBackDelivery={handleBackDelivery}
          />}
        {showThanku && <Step4
          handleOrderHistory={handleOrderHistory}
          setThanku={setThanku} />}

        {showFailure && <Failure
          handleContinueShopping={handleContinueShopping}
          setFailure={setFailure} />}
      </View>
    </>
  );

  const SecondRoute = () => (
    <View style={styles.secondRoute}>
      {orderState.orderAgain?.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={styles.itemsList}>
        <FlatList
          data={orderHistoryData}
          renderItem={renderHistoryItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  const handleIndexChange = index => {
    setIndex(index);
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ route, focused }) => (
        <Header focused={focused} route={route} />
      )}
      contentContainerStyle={styles.tabContainer}
      tabStyle={styles.tabBox}
      style={styles.tabbar}
      activeColor={'#013F87'}
      inactiveColor={'#A7B2B7'}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  };

  return (
    <>

      {!authState?.signIn?.data?.payload?.url?.token ?
        <NotAuthView toggleOverlay={toggleOverlay} visible={visible} handleLogin={handleLogin} /> : !payUrl ?
          <SafeAreaView style={{ flex: 1 }}>
            <TabView
              style={{ marginTop: 0 }}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              onIndexChange={handleIndexChange}
            />
          </SafeAreaView> :
          <Payment
            payUrl={payUrl}
            setPaymentUrl={setPaymentUrl}
            setThanku={setThanku}
            setFailure={setFailure}
            orderNo={orderNo}
          />
      }
    </>

  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(CartView);
