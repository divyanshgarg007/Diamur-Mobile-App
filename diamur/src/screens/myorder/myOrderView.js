import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import HistoryItem from '../tab_cart/historyItem';
import {connect, useSelector} from 'react-redux';
import {styles} from './myOrder.style';
import {CloseButton} from '../../components';

const HISTORY = [
  {
    id: 0,
    title: 'title0',
  },
  {
    id: 1,
    title: 'title1',
  },
  {
    id: 2,
    title: 'title2',
  },
  {
    id: 3,
    title: 'title0',
  },
  {
    id: 4,
    title: 'title0',
  },
  {
    id: 5,
    title: 'title0',
  },
  {
    id: 6,
    title: 'title0',
  },
];

export default function MyOrderView(props) {
  const [orderData, setOrderData] = useState([]);
  const orderState = useSelector(state => state.rootReducers?.orderState);

  useEffect(() => {
    if (orderState.orderList?.data?.payload) {
      setOrderData(orderState.orderList?.data?.payload);
    }
  }, [orderState.orderList]);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerShown: true,
      headerRight: () => null,
      headerLeft: () => (
        <CloseButton onClick={() => props.navigation.goBack()} />
      ),
    });
  }, [props.navigation]);

  const renderHistoryItem = ({item}) => <HistoryItem data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemsList}>
        <FlatList
          data={orderData}
          renderItem={renderHistoryItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
