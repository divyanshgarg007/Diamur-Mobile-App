import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { strings } from '../../../localization';
import { styles } from '../productFilter.style';

export default function header(props) {
  return (
    <View style={styles.filterConatiner}>
      {/* <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder={strings('productFilter.searchPlaceholder')}
          placeholderTextColor="#FF3A18"
        />
        <Icon
          name="search"
          type="font-awesome"
          color="#FF3A18"
          size={12}
          style={styles.searchIcon}
        />
      </View> */}

      <Text style={styles.filterTitle}>
        {strings('productFilter.assortment')}
      </Text>
    </View>
  );
}
