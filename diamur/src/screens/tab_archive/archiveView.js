import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ArchieveItems } from './components';
import { strings } from '../../localization';
import { styles } from './archive.style';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { NotAuthView } from '../../components/notAuthorizedView'
import { NAVIGATION } from '../../constants';

const ArchiveView = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: true });
  }, [props.navigation]);

  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const orderState = useSelector(state => state.rootReducers?.orderState);
  const authState = useSelector(state => state.rootReducers?.authState);
  const [visible, setVisible] = useState(false);
  const renderItem = ({ item }) => <ArchieveItems data={item} />;

  useEffect(() => {
    if (authState?.signIn?.data?.payload?.url?.token) {
      props.actions.orderListAction();
    } else {
      toggleOverlay();
    }
  }, []);

  useEffect(() => {
    if (orderState.orderList?.data?.payload) {
      setOrderHistoryData(orderState.orderList?.data?.payload);
    }
  }, [orderState.orderList]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }
  return (
    <View style={styles.archieveContainer}>
      {!authState?.signIn?.data?.payload?.url?.token ?
        <NotAuthView toggleOverlay={toggleOverlay} visible={visible} handleLogin={handleLogin} /> :
        <>
          <Text style={styles.latestTitle}>
            {strings('tabArchieve.latestOrders')}
          </Text>
          <View>
            <FlatList
              data={orderHistoryData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      }


    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ArchiveView);