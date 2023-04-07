import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import AppFunction from '../../../assets/images/app-function.png';
import {styles} from '../appFunctionality.style';

const BANNERTITLE = 'What functionalities does the app contain?';

export default function AppItems(props) {
  return (
    <View style={styles.appContainerBox}>
      <Card containerStyle={styles.appCardBox}>
        <Image
          style={styles.functionImage}
          resizeMode="cover"
          source={AppFunction}
        />
        <Text style={styles.functionTitle}>{BANNERTITLE}</Text>
      </Card>
    </View>
  );
}
