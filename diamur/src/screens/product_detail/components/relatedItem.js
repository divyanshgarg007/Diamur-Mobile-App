import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import AddCart from '../../../assets/images/addCart.png';
import Beton from '../../../assets/images/beton.png';
import ProductLabel from '../../../assets/images/productInfo.png';
import { strings } from '../../../localization';
import { styles } from '../productDetail.style';

const PRICE = '€ 25,00';

export default function RelatedItem(props) {
  return (
    <View style={styles.productRelatedContainer}>
      <Text style={styles.relatedText}>
        {strings('newsDetail.otherProducts')}
      </Text>
      <Card containerStyle={styles.cardBox}>
        <View style={styles.moreBox}>
          <View style={styles.imageBox}>
            <Image style={styles.prodImage} resizeMode="contain" source={{
              uri: props.data['photo Low Resolution'][0],
            }} />
          </View>
          <View style={styles.contentBox}>
            <Text style={styles.prodTitle}>{props.data["Product Name"]}</Text>
            <Text style={styles.prodPrice}>{PRICE}</Text>
          </View>
          <View style={styles.iconBox}>
            <Image
              style={styles.prodLabel}
              resizeMode="cover"
              source={ProductLabel}
            />
            <Image
              style={styles.prodCart}
              resizeMode="cover"
              source={AddCart}
              onPress={() => props.handleReleatedCart(props.data)}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}
