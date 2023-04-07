import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Overlay, Button } from 'react-native-elements';
import normalize from 'react-native-normalize';
import GlobalStyle from '../style/globalstyle';
import { MSB16Button } from './elements';
export const ModalView = (props) => (
  <Overlay
    isVisible={props.visible}
    onBackdropPress={props.toggleOverlay}
    backdropStyle={styles.backdropContainer}
    overlayStyle={styles.innerOverlay}>
    <View>
      <View style={styles.closeToggle}>
        <Icon
          name="close"
          type="antdesign"
          size={20}
          color="#43464B"
          onPress={props.toggleOverlay}
        />
      </View>
      <View style={styles.modalBody}>
        <Text style={styles.modalTitle}>Please login first</Text>
        <MSB16Button
          title="Go to login"
          style={styles.resendLinkBtn}
          titleStyle={styles.resendText}
          onPress={() => props.handleLogin()}
        />

      </View>
    </View>
  </Overlay>
);

const styles = StyleSheet.create({
  backdropContainer: {
    backgroundColor: '#43464B',
    opacity: 0.65,
  },
  closeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    right: normalize(-15, 'height'),
    zIndex: 111,
    top: normalize(0, 'height'),
  },
  innerOverlay: {
    backgroundColor: '#fff',
    marginLeft: normalize(21),
    marginRight: normalize(21),
    paddingLeft: normalize(25),
    paddingRight: normalize(25),
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    width: '90%',
  },
  modalTitle: {
    color: '#000',
    fontSize: 16,
    fontFamily: GlobalStyle.fontSet.OpenSansBold,
    paddingBottom: normalize(10),
  },
  messageBody: {
    color: '#000',
    fontSize: 12,
    fontFamily: GlobalStyle.fontSet.OpenSansRegular,
    paddingBottom: normalize(20),
  },
  resendLinkBtn: {
    backgroundColor: '#FF3A18',
    width: '100%',
    marginBottom: normalize(11),
  },
  resendText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.MuseoSansExtraBold,
    textTransform: 'uppercase',
  },

});