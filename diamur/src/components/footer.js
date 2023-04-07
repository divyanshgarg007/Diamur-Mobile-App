import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';
import {Image, Icon, Badge} from 'react-native-elements';
import home from '../assets/home.svg';
import cart from '../assets/cart.svg';
import calculator from '../assets/calculator.svg';
import search from '../assets/search.svg';
import trolley from '../assets/trolley.svg';
import GlobalStyles from '../style/globalstyle';

const Comp = props => {
  const navigation = useNavigation();
  const orange = GlobalStyles.colorSet.orange;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: 50,
        backgroundColor: 'black',
      }}>
      <Icon
        name="house-user"
        type="font-awesome-5"
        color={props.index === 1 ? orange : 'white'}
      />

      <Icon
        name="search1"
        type="antdesign"
        color={props.index === 2 ? orange : 'white'}
      />

      <Icon
        name="add-shopping-cart"
        type="material"
        color={props.index === 3 ? orange : 'white'}
      />

      <Icon
        name="calculator"
        type="entypo"
        color={props.index === 4 ? orange : 'white'}
      />

      <Icon
        name="shoppingcart"
        type="antdesign"
        color={props.index === 5 ? orange : 'white'}
      />
      <Badge value="99+" status="error" />
    </View>
  );
};

const styles = StyleSheet.create({
  footerIcon: {
    color: '#393939',
    fontSize: normalize(30),
    borderRadius: 50,
    marginLeft: normalize(10),
  },
});

export default Comp;
