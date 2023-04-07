import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import {MSB16Button} from '../../../components/elements';
import {strings} from '../../../localization';
import {styles} from '../profileView.style';

const DESC =
  'We have sent a link to your e-mail address to change your password.';
const DESC1 =
  'If you have not received the link, please click on the button below.';

export default function ResendLink(props) {
  const [visibleChange, setVisibleChange] = useState(false);

  const toggleChangePassword = () => {
    setVisibleChange(!visibleChange);
  };
  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.toggleOverlay}
      backdropStyle={styles.backdropContainer}
      overlayStyle={styles.innerOverlay}>
      <View>
        <Text style={styles.nameTitle}>Dear Hart</Text>
        <Text style={styles.messageBody}>{DESC}</Text>
        <Text style={styles.messageBody}>{DESC1}</Text>
        <MSB16Button
          title={strings('buttons.resend')}
          style={styles.resendLinkBtn}
          titleStyle={styles.resendText}
          onPress={toggleChangePassword}
        />
        <View style={styles.emailBox}>
          <Text style={styles.emailTitle}>
            {strings('resendLink.emailAddress')}
          </Text>
          <Text style={styles.emailBody}>hart.van.damme@groupvandamme.eu</Text>
        </View>
      </View>
    </Overlay>
  );
}
