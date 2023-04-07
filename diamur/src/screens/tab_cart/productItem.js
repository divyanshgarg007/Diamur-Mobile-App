import React from 'react';
import { Text, View } from 'react-native';
import { Card, Image, Icon } from 'react-native-elements';
import { styles } from './cart.style';
import RNStepper from './RNStepper';

const ProductItem = props => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardBox}>
        <View style={styles.imageBox}>
          <Image source={{ uri: JSON.parse(props.data?.product_jsondata)?.product_image }} style={styles.cardImage} />
        </View>
        <View style={styles.cardInfo}>
          <View>
            <Text style={styles.cardTitle}>{JSON.parse(props.data?.product_jsondata)?.product_name}</Text>
            {/* <Text style={styles.carddesc}>{'€'} {props.data?.product_price} {'/ each'}</Text> */}
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.cardPrice}>{'€'} {props.data?.total_amount}</Text>
            <RNStepper data={props.data} updateCartQuantity={props.updateCartQuantity} />
          </View>
        </View>
        <View style={styles.closeBox}>
          <Icon
            containerStyle={styles.iconBox}
            name="close"
            color="#fff"
            size={20}
            onPress={() => props.deleteCartItem(props.data?.id)}
          />
        </View>
      </View>
    </Card>
  );
};

export default ProductItem;
