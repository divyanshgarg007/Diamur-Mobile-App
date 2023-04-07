import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Overlay } from 'react-native-elements';
import { MSB16Button } from '../../../components/elements';
import { styles } from '../profileView.style';
import I18n from 'react-native-i18n';
import { strings } from '../../../localization'

export default function ChangePassword(props) {
  return (
    <Overlay
      isVisible={props.visibleChange}
      onBackdropPress={props.toggleChangePassword}
      backdropStyle={styles.backdropContainer}
      overlayStyle={styles.innerOverlay}>
      <View>
        <Text style={styles.nameTitle}>{strings("profile.enterPassword")}</Text>
        <View style={styles.contactInputBox}>
          <TextInput
            style={styles.contactInput}
            placeholder={props.placeholder}
            placeholderTextColor="#000000"
          />
        </View>
        <View style={styles.contactInputBox}>
          <TextInput
            style={styles.contactInput}
            placeholder={props.placeholder}
            placeholderTextColor="#000000"
          />
        </View>
        <MSB16Button
          title={strings("profile.changePassword")}
          style={styles.resendLinkBtn}
          titleStyle={styles.resendText}
        />
        <MSB16Button
          title={strings("profile.cancle")}
          style={styles.cancelBtn}
          titleStyle={styles.resendText}
        />
      </View>
    </Overlay>
  );
}
