import React from 'react'
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ListingButton from './listingButton'
import { NAVIGATION } from '../../../constants';
import { strings } from '../../../localization';
import { styles } from '../product.style';

export default function Header(props) {
  return (
    <View
      style={styles.listingHeader}>
      <View style={styles.listingIconBox}>
        <Icon
          name="filter"
          type="font-awesome"
          color="white"
          size={20}
          containerStyle={styles.filterIcon}
          onPress={() => props.handleFilterClick()}
        />
      </View>
      <ListingButton title={strings("buttons.yourProducts")} />
      <ListingButton title={strings("buttons.allProducts")} style={styles.prodBox} titleStyle={styles.prodLabel} />
    </View>
  )
}
