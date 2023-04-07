import React, { useState } from "react"
import { TouchableOpacity, View, Image } from "react-native"

import plus from '../../assets/images/plus.png'
import minus from '../../assets/images/minus.png'
import { OSB16Text } from "../../components/elements"

const RNStepper = (props) => {

  const onClickPlus = (value, id) => {
    props.updateCartQuantity(value + 1, id)
  }

  const onClickMinus = (value, id) => {
    if (value > 1) {
      props.updateCartQuantity(value - 1, id)
    }

  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 30, justifyContent: 'space-around' }}>

      <TouchableOpacity onPress={()=>onClickMinus(props.data?.quantity, props.data?.id)}>
        <Image
          source={minus}
          style={{ width: 26, height: 26, }}
        />
      </TouchableOpacity>

      <OSB16Text>{props.data?.quantity}</OSB16Text>


      <TouchableOpacity onPress={()=>onClickPlus(props.data?.quantity, props.data?.id)}>
        <Image
          source={plus}
          style={{ width: 26, height: 26, }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default RNStepper