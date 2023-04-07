import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../contactView.style';

export default function UserInput(props) {
  return (
    <View style={styles.contactBox}>
      <Text style={styles.contactInputTitle}>{props.title}*</Text>
      <View style={styles.contactInputBox}>
        <TextInput
          style={styles.contactInput}
          placeholder={props.placeholder}
          placeholderTextColor="#000000"
          //value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}
