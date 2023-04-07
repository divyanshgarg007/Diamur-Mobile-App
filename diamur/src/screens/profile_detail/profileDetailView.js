import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, ActivityIndicator} from 'react-native';
import ProfileUser from '../../assets/images/profileUser.png';
import {Image} from 'react-native-elements';
import {MSB16Button} from '../../components/elements';
import {styles} from './profileDetail.style';
import {strings} from '../../localization';
import {ProfileInput} from './components';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../redux/action';
import {CloseButton} from '../../components';
import {NAVIGATION} from '../../constants';

const ProfileDetailView = props => {
  const [inputValue, setInputValue] = useState(props.route.params.profileData);
  const authState = useSelector(state => state.rootReducers?.authState);

  useEffect(() => {
    if (authState?.updateProfile?.data?.payload) {
      setInputValue(authState?.updateProfile?.data?.payload);
    }
  }, []);

  const handleSave = () => {
    props.actions.updateProfileAction(inputValue);
  };

  const handleAdrress = value => {
    var addressData = (inputValue.address.address = value);
    var finalAddress = {...inputValue, addressData};
    setInputValue(finalAddress);
  };
  const handleTownship = value => {
    var townshipData = (inputValue.address.township = value);
    var finalTownship = {...inputValue, townshipData};
    setInputValue(finalTownship);
  };
  const handlePostcode = value => {
    var postData = (inputValue.address.postcode = value);
    var finalPost = {...inputValue, postData};
    setInputValue(finalPost);
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerShown: true,
      headerRight: () => null,
      headerLeft: () => (
        <CloseButton onClick={() => props.navigation.goBack()} />
      ),
    });
  }, [props.navigation]);

  return (
    <ScrollView style={styles.profileContainer}>
      {authState?.updateProfile?.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={styles.profileBox}>
        <Image source={ProfileUser} style={styles.imageUser} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileTitle}>
            {props.route.params.profileData.name}
          </Text>
          <Text style={styles.profileDesc}>
            {strings('profile.yourDetails')}
          </Text>
        </View>
      </View>
      <View style={styles.bottomInputs}>
        <ProfileInput
          placeholder={strings('contact.inputFields.company')}
          value={inputValue.company}
          onChangeText={value => setInputValue({...inputValue, company: value})}
        />
        <ProfileInput
          placeholder={strings('profile.accountNumber')}
          value={inputValue.btw_number}
          onChangeText={value =>
            setInputValue({...inputValue, btw_number: value})
          }
        />
        <ProfileInput
          placeholder={strings('contact.inputFields.name')}
          value={inputValue.name}
          onChangeText={value => setInputValue({...inputValue, name: value})}
        />
        <ProfileInput
          placeholder={strings('contact.inputFields.email')}
          value={inputValue.email}
          onChangeText={value => setInputValue({...inputValue, email: value})}
        />
        <Text style={styles.headingInput}>
          {strings('profile.registredOffice')}
        </Text>
        <ProfileInput
          placeholder={strings('profile.street')}
          value={inputValue?.address?.address}
          onChangeText={value => handleAdrress(value)}
        />
        <View style={styles.lastInputs}>
          <ProfileInput
            placeholder={strings('profile.township')}
            value={inputValue?.address?.township}
            onChangeText={value => handleTownship(value)}
            style={styles.box1}
          />
          <ProfileInput
            placeholder={strings('tabCart.zipCode')}
            value={inputValue?.address?.postcode}
            onChangeText={value => handlePostcode(value)}
            style={styles.box2}
          />
        </View>
      </View>
      <MSB16Button
        style={styles.saveBtn}
        title={strings('buttons.save')}
        titleStyle={styles.saveText}
        onPress={handleSave}
      />
    </ScrollView>
  );
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ProfileDetailView);
