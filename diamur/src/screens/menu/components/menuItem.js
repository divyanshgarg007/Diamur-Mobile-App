import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../menu.style';

export default function MenuItem(props) {
  return (
    <TouchableOpacity key={props.item.id} style={styles.menuLists} onPress={() => props.handleMenu(props.item.name)} >
      <Text style={styles.menuItems}>
        {props.item.name}
      </Text>
    </TouchableOpacity>
  )
}
