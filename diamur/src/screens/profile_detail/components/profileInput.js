import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../profileDetail.style';

export default function ProfileInput(props) {
  return (
    <View style={[styles.detailsBox, props.style]}>
      <View style={styles.contactInputBox}>
        <TextInput
          style={styles.contactInput}
          placeholder={props.placeholder}
          placeholderTextColor="#000000"
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}
