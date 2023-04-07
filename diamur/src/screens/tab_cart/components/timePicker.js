import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from '../cart.style';

export default function TimePicker(props) {
  return (
    <>
      <TouchableOpacity style={styles.timeBox} onPress={() => props.handleTimeOpen()}>
        <TextInput
          style={styles.timeInput}
          placeholder="09:00"
          placeholderTextColor="#000000"
          value={props?.time}
        />
        <Icon
          name="clockcircleo"
          type="antdesign"
          color="#fff"
          size={18}
          style={styles.timeIcon}
        />
      </TouchableOpacity>
      <Text style={{ color: 'red', position: 'absolute', bottom: -20, right: 0 }}>{props?.error && props?.error?.time && props?.error?.time[0]}</Text>
    </>
  );
}
