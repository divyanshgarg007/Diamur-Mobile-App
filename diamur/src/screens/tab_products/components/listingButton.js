import React from 'react'
import {View, Text} from 'react-native';
import { styles } from '../product.style';

export default function ListingButton(props) {
  return (
    <View style={styles.buttonBox}>
    <View
      style={[styles.buttonAction, props.style]}>
      <Text
        style={[styles.buttonLabel, props.titleStyle]}>
        {props.title}
      </Text>
    </View>
  </View>
  )
}
