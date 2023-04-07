import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';
import UserInput from './userInput';
import {strings} from '../../../localization';
import { MSB16Button } from '../../../components/elements';
import {styles} from '../contactView.style';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const DropDownIcon = () => {
  return (
    <View>
      <Icon size={20} color="#000" name="keyboard-arrow-down" />
    </View>
  );
};

export default function ContactForm(props) {
  const [state, setState] = useState({})
  return (
    <View>
      {/* <View style={styles.contactBox}>
        <Text style={styles.contactInputTitle}>
          {strings('contact.inputFields.questions')} *
        </Text>
        <View style={styles.contactInputBox}>
          <SelectDropdown
            data={countries}
            renderDropdownIcon={() => <DropDownIcon />}
            buttonTextStyle={styles.selectItem}
            buttonStyle={styles.selectBtn}
            rowTextStyle={styles.dropDownBoxItem}
            rowStyle={styles.dropDownBox}
            defaultButtonText={strings(
              'contact.inputFields.questionsPlaceholder',
            )}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View> */}
      <UserInput
        title={strings('contact.inputFields.company')}
        placeholder={strings('contact.inputFields.companyPlaceholder')}
        //value={props.value.business}
        onChangeText={value => setState({ ...state, business: value })}
      />
      <UserInput
        title={strings('contact.inputFields.name')}
        placeholder={strings('contact.inputFields.namePlaceholder')}
        //value={props.value.name}
        onChangeText={value => setState({ ...state, name: value })}
      />
      <UserInput
        title={strings('contact.inputFields.email')}
        placeholder={strings('contact.inputFields.emailPlaceholder')}
        //value={props.value.email}
        onChangeText={value => setState({ ...state, email: value })}
      />
      <UserInput
        title={strings('contact.inputFields.street')}
        placeholder={strings('contact.inputFields.streetPlaceholder')}
        //value={props.value.street_no}
        onChangeText={value => setState({ ...state, street_no: value })}
      />
      <UserInput
        title={strings('contact.inputFields.zipCity')}
        placeholder={strings('contact.inputFields.zipCityPlaceholder')}
        //value={props.value.zip_city}
        onChangeText={value => setState({ ...state, zip_city: value })}
      />
      <UserInput
        title={strings('contact.inputFields.telephone')}
        placeholder={strings('contact.inputFields.telephonePlaceholder')}
        //value={props.value.telephone}
        onChangeText={value => setState({ ...state, telephone: value })}
      />
      <View style={styles.contactBox}>
        <Text style={styles.contactInputTitle}>
          {strings('contact.inputFields.message')}
        </Text>
        <TextInput
          style={styles.messageInput}
          placeholder={strings('contact.inputFields.messagePlaceholder')}
          placeholderTextColor="#000000"
          multiline
          numberOfLines={6}
          //value={props.value.message}
          onChangeText={value => setState({ ...state, message: value })}
        />
      </View>
      <MSB16Button
        style={styles.sendBtn}
        title={strings('buttons.send')}
        titleStyle={styles.sendText}
        onPress={()=>props.handleSubmit(state)}
      />
    </View>
  );
}
