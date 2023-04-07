import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Toasts(props) {
  const showToast = () => {
    Toast.show({
      type: props.type,
      text1: props.message,
    });
  }

  return (
    <View>{props.show && showToast()}</View>
    
  )
}