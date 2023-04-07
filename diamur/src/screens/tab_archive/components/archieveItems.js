import React from 'react';
import {View, Text} from 'react-native';
import {Card, Image} from 'react-native-elements';
import beton from '../../../assets/images/beton.png';
import logo2 from '../../../assets/images/logo2.png';
import Cart from '../../../assets/images/cart.png';
import CartPlus from '../../../assets/images/cartPlus.png';
import {styles} from '../archive.style';

const PRICE = '€ 25,00';

export default function ArchieveItems(props) {
  return (
    <Card containerStyle={styles.archieveCard}>
      <View style={styles.archievView}>
        <View style={styles.imageCard}>
          <Image source={beton} style={styles.imageView} />
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.archiveTitle}>{props.data?.invoice_number}</Text>
          <Text style={styles.archivePrice}>{props.data?.amount}</Text>
        </View>
        <View style={styles.addCard}>
          <Image source={logo2} style={styles.logoUp} />
        </View>
        <View style={styles.cartCard}>
          <Image source={Cart} style={styles.iconCart} />
          <View style={styles.cartPlusCard}>
            <Image source={CartPlus} style={styles.iconPlusCart} />
          </View>
        </View>
      </View>
    </Card>
  );
}
