import React from 'react'
import { OSR16Text, OSB16Text } from '../../../components/elements'
import { View } from "react-native"
import { styles } from './calculators.style'

 const RedBox = (props) => {
  return (
    <View style={styles.RedBox}>
    <View style={styles.redBoxTop}>
        <OSB16Text style={styles.boxRedText}>{props.text}</OSB16Text>
    </View>
    <View style={styles.redBoxTop}>
        <OSR16Text style={styles.redInnerText}>{props.value} kg</OSR16Text>
    </View>
</View>
  )
}
export default RedBox

