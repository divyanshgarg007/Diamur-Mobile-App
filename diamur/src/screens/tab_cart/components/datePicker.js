import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from '../cart.style';
import moment from 'moment'
export default function DatePickerCustom(props) {
  return (
    <>
      <TouchableOpacity style={styles.dateBox} onPress={() => props.handleDateOpen()}>
        <TextInput
          style={styles.dateInput}
          placeholder="01/01/2021"
          placeholderTextColor="#000000"
          value={moment(props?.date)?.format('DD/MM/YYYY')}
        />
        <Icon
          name="calendar-o"
          type="font-awesome"
          color="#fff"
          size={18}
          style={styles.dateIcon}
        />
      </TouchableOpacity>
      <Text style={{ color: 'red', position: 'absolute', bottom: -20 }}>{props?.error && props?.error?.time && props?.error?.date[0]}</Text>
    </>
  );
}
