import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Profiles from '../../assets/images/profiles.png';
import Upload from '../../assets/images/upload.png';
import { Image } from 'react-native-elements';
import { MSB16Button } from '../../components/elements';
import { styles } from './profileView.style';
import { strings } from '../../localization';
import { useSelector } from 'react-redux';
import { ResendLink } from './components';
import { NAVIGATION } from '../../constants';
import { NotAuthView } from '../../components/notAuthorizedView'

export default function ProfileView(props) {
  const [visible, setVisible] = useState(false);
  const [profileData, setProfileData] = useState({});
  const authState = useSelector(state => state.rootReducers?.authState);
  const [visibleAuth, setVisibleAuth] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (authState.signIn?.data?.payload) {
      setProfileData(authState.signIn?.data?.payload?.url);
    } else {
      setVisibleAuth(true)
    }
  }, [authState.signIn]);

  const toggleOverlayAuth = () => {
    setVisibleAuth(!visible);
  };
  function handleLogin() {
    props.navigation.navigate(NAVIGATION.login);
  }
  useEffect(() => {
    if (authState?.updateProfile?.data?.payload) {
      setProfileData(authState?.updateProfile?.data?.payload);
    }
  }, [authState?.updateProfile]);

  const handleProfileChange = () => {
    props.navigation.navigate(NAVIGATION.profiledetail, { profileData });
  };

  return (
    <ScrollView style={styles.profileContainer}>
      {!authState?.signIn?.data?.payload?.url?.token ?
        <NotAuthView toggleOverlay={toggleOverlay} visible={visible} handleLogin={handleLogin} /> :
        <>
          <View style={styles.profileBox}>
            <View style={styles.outerBox}>
              <Image source={Profiles} style={styles.uploadImage} />
              <View style={styles.innerBox}>
                <Image source={Upload} style={styles.uploadIcon} />
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileTitle}>{profileData.name}</Text>
              <Text style={styles.profileDesc}>
                {strings('profile.yourDetails')}
              </Text>
            </View>
          </View>

          <Row
            title={strings('contact.inputFields.company')}
            value={profileData.company}
          />
          <Row
            title={strings('profile.accountNumber')}
            value={profileData.btw_number}
          />
          <Text style={styles.profileLabel}>{strings('profile.profile')}</Text>

          <Row
            title={strings('contact.inputFields.name')}
            value={profileData.name}
          />
          <Row
            title={strings('contact.inputFields.email')}
            value={profileData.email}
          />

          <Text style={styles.profileLabel}>
            {strings('profile.registredOffice')}
          </Text>

          <Row
            title={strings('profile.street')}
            value={profileData?.address?.address}
          />
          <Row
            title={strings('profile.township')}
            value={profileData?.address?.township}
          />
          <Row
            title={strings('tabCart.zipCode')}
            value={profileData?.address?.postcode}
          />

          <MSB16Button
            style={styles.changeBtn}
            title={strings('buttons.changeInformation')}
            titleStyle={styles.sendText}
            onPress={handleProfileChange}
          />
          <MSB16Button
            style={styles.sendBtn}
            title={strings('buttons.changePassword')}
            titleStyle={styles.sendText}
            onPress={toggleOverlay}
          />
          <ResendLink toggleOverlay={toggleOverlay} visible={visible} />
        </>
      }

    </ScrollView>
  );
}

const Row = props => {
  return (
    <View style={styles.profileContent}>
      <Text style={styles.heading}>{props.title}:</Text>
      <Text style={styles.content}>{props.value}</Text>
    </View>
  );
};
