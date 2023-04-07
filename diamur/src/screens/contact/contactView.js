import React, {useState, useEffect} from 'react';
import { Text, ScrollView, View, ActivityIndicator,Button } from 'react-native';
import { ContactForm } from './components';
import { strings } from '../../localization';
import Toasts from '../../components/toast'
import { styles } from './contactView.style';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';

import { CloseButton } from '../../components';

const ContactView = (props) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success')
  const [show, setShow] = useState(false)
  const authState = useSelector(state => state.rootReducers?.authState);

  useEffect(() => {
    if (authState?.contactUs?.data?.payload) {
      setMessage(authState?.contactUs?.data?.message);
      setType('success')
      setShow(true)
    } else if (authState?.contactUs?.error?.payload) {
      setMessage(authState?.contactUs?.error?.message)
      setType('error')
      setShow(true)
    }
  }, [authState.contactUs]);

  const handleSubmit = (contactInput) => {
    props.actions.contactUsAction(contactInput);
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerShown: true,
      headerRight: () => (
        null
      ),
      headerLeft: () => (
        <CloseButton onClick={() => props.navigation.goBack()} />
      )
    });
  }, [props.navigation]);

  return (
    <>
    {(authState.contactUs?.loading) &&
      <View style={styles.loading}>
          <ActivityIndicator size="large" />
      </View>
  }


  <Toasts message={message} type={type} show={show} />
    <ScrollView style={styles.contactContainer}>
      
      <Text style={styles.contactTitle}>{strings('contact.contactUs')}</Text>
      <ContactForm handleSubmit={handleSubmit}/>

      <View style={styles.contactInfoBox}>
        <Text style={styles.contactInfoTitle}>
          {strings('contact.contactInformation')}
        </Text>
        <Text style={styles.contactDetails}>
          {strings('contact.contactAddress')}
        </Text>
        <Text style={[styles.contactDetails, styles.contactFax]}>
          {strings('contact.contactNumber')}
        </Text>
        <Text style={styles.contactDetails}>
          {strings('contact.contactFax')}
        </Text>
        <Text style={styles.contactDetails}>
          {strings('contact.contactEmail')}
        </Text>
      </View>
    </ScrollView>
    </>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactView);