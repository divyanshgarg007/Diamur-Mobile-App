import React, { useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import logo from '../../assets/images/logo.png';
import { OSB17Text, MSB16Button, OSR16Text } from '../../components/elements';
import { BlackRedLabel } from '../../components';
import Accordian from '../../components/accordion';
import ModalSelector from 'react-native-modal-selector';
import { Logo } from '../../components';

import GlobalStyles from '../../style/globalstyle';
import { styles } from './intro.style';
import I18n from 'react-native-i18n';
import { strings } from '../../localization';

import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';

import { NAVIGATION } from '../../constants';
import NavigationUtil from '../../utilities/navitationUtil';

const InroView = props => {
  var langRef = useRef();
  var index = 0;
  const data = [
    { key: index++, section: true, label: 'Select Language' },
    { key: index++, label: 'NL' },
    // { key: index++, label: 'EN' },
    { key: index++, label: "FR" },
  ];

  const authState = useSelector(state => state.rootReducers?.authState);
  const [language, setLanguage] = useState(
    authState.settings.language ? authState.settings.language : 'nl',
  );

  I18n.locale = language;

  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }

  function handleRegister() {
    props.navigation.navigate(NAVIGATION.register);
  }

  function handleNoLogin() {
    const navUtil = new NavigationUtil
    navUtil.resetNavToHome(props);
  }

  const onClickLanguage = () => {
    langRef.open();
  };

  const onChangeLanguage = option => {
    var lang = '';
    if (option.key) {
      if (option.key == 1) {
        lang = 'nl';
      } else {
        lang = 'fr';
      }

      I18n.locale = lang;
      setLanguage(lang);
      props.actions.setUserLanguage(lang);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <ModalSelector
            animationType="fade"
            overlayStyle={{
              flex: 1,
              padding: '5%',
              justifyContent: 'flex-end',
              backgroundColor: 'rgba(0,0,0,0.7)',
            }}
            ref={selector => {
              langRef = selector;
            }}
            data={data}
            onModalClose={option => {
              onChangeLanguage(option);
            }}
            customSelector={
              <Accordian
                title={language.toUpperCase()}
                //data="EN"
                onClick={onClickLanguage}
              />
            }
          />
          <Logo />
        </View>
        <View style={{ marginTop: normalize(23), alignItems: 'center' }}>
          <BlackRedLabel />
          <OSR16Text
            style={{ marginTop: 10, textTransform: 'uppercase', lineHeight: 25 }}>
            {strings('home.quality')}
          </OSR16Text>
          <OSR16Text style={{ textTransform: 'uppercase', lineHeight: 25 }}>
            {strings('home.service')}
          </OSR16Text>
          <OSR16Text style={{ textTransform: 'uppercase', lineHeight: 25 }}>
            {strings('home.belgian')}
          </OSR16Text>

          <MSB16Button
            title={strings('home.login')}
            style={{ width: 232, marginTop: normalize(20), height: 45 }}
            titleStyle={{ fontSize: 16 }}
            onPress={() => handleLogin()}
          />
          <MSB16Button
            title={strings('home.register')}
            type="outline"
            style={{
              width: 232,
              marginTop: normalize(15),
              height: 45,
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 2,
            }}
            titleStyle={{ color: 'black', fontSize: 16 }}
            onPress={() => handleRegister()}
          />
          <MSB16Button
            title={strings('home.continue')}
            style={{
              width: 232,
              marginTop: normalize(10),
              height: 32,
              backgroundColor: 'black',
            }}
            titleStyle={{ color: 'white', fontSize: 12 }}
            onPress={() => handleNoLogin()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(InroView);
