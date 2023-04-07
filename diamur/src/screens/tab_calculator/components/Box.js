import React from 'react'
import { OSR16Text, OSB12Text } from '../../../components/elements'
import GlobalStyles from '../../../style/globalstyle';
import { Icon, Text } from 'react-native-elements'
import { View, TouchableOpacity } from "react-native"
import { styles } from './calculators.style'

const Box = (props) => {
  return (
    <View style={styles.WhiteBox} >
      <OSB12Text style={styles.boxText}>{props.text}</OSB12Text>
      <View style={styles.boxTop}>
        <Icon name='remove' type="material-icons-sharp" size={25} color={GlobalStyles.colorSet.orange} onPress={()=>props.handleMinus(props.type)} />
        <TouchableOpacity onPress={()=>props.toggleOverlay(props.type)}><OSR16Text style={styles.boxInnerText}>{props.value} <Text style={styles.qtyText}>mm</Text></OSR16Text>
        </TouchableOpacity>
        <Icon name='add' type="material-icons-sharp" size={25} color={GlobalStyles.colorSet.orange} onPress={()=>props.handleAdd(props.type)} />
      </View>
    </View>
  )
}
export default Box
