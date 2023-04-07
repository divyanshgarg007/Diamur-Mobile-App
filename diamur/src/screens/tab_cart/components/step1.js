import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import CartIcon from '../../../assets/images/cartUp.png';
import { MSB16Button } from '../../../components/elements';
import { strings } from '../../../localization';
import { styles } from '../cart.style';

export default function Step1(props) {
  return (
    <View style={styles.stepperBox1}>
      <View style={styles.stepIcon}>
        <Image source={CartIcon} style={styles.stepImage} />
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cartTitle}>
          {strings('tabCart.transpotationCost')}  € {props.totalAmount?.total_transpotation_cost}
        </Text>
        <Text style={styles.cartTitle}>
          {strings('tabCart.palletCost')}                    € {props.totalAmount?.totalPaletCost}
        </Text>
        <Text style={styles.cartTitle}>
          {strings('tabCart.total')}                                 € {props.totalAmount?.total_amount}
        </Text>
        {/* <Text style={styles.cartMsg}>{strings('tabCart.exclude')}</Text> */}
      </View>
      <View style={styles.cartAction}>
        <MSB16Button
          title={strings('buttons.continue')}
          style={styles.cartContinue}
          titleStyle={styles.continueText}
          onPress={() => props.handleDelivery()}
        />
      </View>
    </View>
  );
}
