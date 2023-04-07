import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { MSB16Button } from '../../../components/elements';
import { strings } from '../../../localization';
import { styles } from '../cart.style';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../../redux/action';

const CLICK = ' Click on the button below to view your order.';

function Step4(props) {
  const [visible, setVisible] = useState(true);
  const toggleOverlay = () => {
    setVisible(!visible);
    props.setThanku(false)
  };
  const handleOrderHistory = () => {
    props.handleOrderHistory();
    props.setThanku(false)
  };
  useEffect(() => {
    return () => {
      props.actions.orderListAction();
      props.actions.cartListAction()
    }
  }, [])
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      backdropStyle={styles.backdropContainer}
      overlayStyle={styles.innerOverlay}>
      <View>
        <Icon
          containerStyle={styles.closeOverlayOrder}
          name="close"
          color="#fff"
          type="antdesign"
          size={25}
          onPress={toggleOverlay}
        />
        <Text style={styles.orderTitle}>{strings('tabCart.thankYou')}</Text>
        <Text style={styles.orderSubTitle}>{CLICK}</Text>
        <MSB16Button
          title={strings('buttons.viewOrderHistory')}
          style={styles.orderHistoryBtn}
          titleStyle={styles.continueText}
          onPress={() => handleOrderHistory()}
        />
        <Text style={styles.orderSubTitle}>
          {strings('tabCart.interested')}
        </Text>
        <Text style={[styles.orderSubTitle, styles.viewText]}>
          {strings('tabCart.range')}
        </Text>
      </View>
    </Overlay>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(Step4);