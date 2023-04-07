import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Input, Icon, Overlay } from 'react-native-elements';
import { OSB17Text, MSB16Button, MSL14Text } from '../../../components/elements';
import GlobalStyles from '../../../style/globalstyle';
import { strings } from '../../../localization';
import { styles } from '../calculator.style';

export default function InputKeyboard(props) {
  const handleInputValue = (inputValue) => {
    props.handleInput(props.value + inputValue, props.type)
  };
  const handleInputRemove = () => {
    props.handleInput(props.value.slice(0, -1), props.type)
    //setValue(value.slice(0, -1));
  };
  return (
    <SafeAreaView>
      <Overlay
        fullScreen="true"
        onBackdropPress={props.toggleOverlay}
        visible={props.visible}
        overlayStyle={styles.inputOverlay}>
        <View style={styles.closeBox}>
          <View style={styles.closeInput}>
            <Icon
              name="close"
              type="antdesign"
              size={30}
              color="white"
              onPress={props.toggleOverlay}
            />
          </View>
          <OSB17Text style={styles.closeText}>
            {strings('calculator.totalSurface')}
          </OSB17Text>
          <Icon
            name="keyboard-arrow-down"
            type="material-icons"
            size={30}
            color="white"
            onPress={props.toggleOverlay}
          />
        </View>
        <View style={styles.totalTop}>
          <OSB17Text style={styles.totalArea}>
            {strings('calculator.totalArea')}
          </OSB17Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            disabled
            style={styles.inputValue}
            rightIcon={<OSB17Text style={styles.keyUnit}>m</OSB17Text>}
            // onChangeText={(value)=>props.setTotalAreaValue(value)}
            value={props.value}
          />
        </View>
        <View>
          <MSB16Button
            title="Next"
            titleStyle={styles.nextBtnTitle}
            style={styles.nextBtn}
            containerStyle={styles.nextContainer}
            onPress={props.toggleOverlay}
          />
        </View>
        <View style={styles.inputKeyBox}>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(1)}>
            1
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(2)}>
            2
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(3)}>
            3
          </MSL14Text>
        </View>
        <View style={styles.inputKeyBox}>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(4)}>
            4
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(5)}>
            5
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(6)}>
            6
          </MSL14Text>
        </View>
        <View style={styles.inputKeyBox}>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(7)}>
            7
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(8)}>
            8
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(9)}>
            9
          </MSL14Text>
        </View>
        <View style={styles.inputKeyBox}>
          <MSL14Text style={{ fontSize: 53, lineHeight: 50, color: 'white' }}>
            0
          </MSL14Text>
          <MSL14Text
            style={styles.inputKeyItem}
            onPress={() => handleInputValue(0)}>
            0
          </MSL14Text>
          <Icon
            name="backspace-outline"
            type="material-community"
            size={35}
            color={GlobalStyles.colorSet.orange}
            onPress={() => handleInputRemove()}
          />
        </View>
      </Overlay>
    </SafeAreaView>
  );
}
