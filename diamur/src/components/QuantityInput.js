import React, { useState } from "react"
import { TouchableOpacity, View, Image } from "react-native"

import plus from '../assets/images/plus.png'
import minus from '../assets/images/minus.png'
import { OSB16Text } from "./elements"

const QuantityInput = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

      <TouchableOpacity onPress={() => props.handleMinus(props?.type)}>
        <Image
          source={minus}
          style={{ width: 26, height: 26, }}
        />
      </TouchableOpacity>

      <OSB16Text>{props?.value}</OSB16Text>


      <TouchableOpacity onPress={() => props.handlePlus(props?.type)}>
        <Image
          source={plus}
          style={{ width: 26, height: 26, }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default QuantityInput