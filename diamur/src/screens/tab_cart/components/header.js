import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../cart.style';

export default function Header(props) {
  return (
    <View style={props.focused ? styles.firstRouteBtn : styles.secondRouteBtn}>
      <Text style={props.focused ? styles.labelSelected : styles.label}>
        {props.route.title}
      </Text>
    </View>
  );
}
