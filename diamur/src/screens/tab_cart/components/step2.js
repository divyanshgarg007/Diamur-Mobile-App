import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { DatePickerCustom, TimePicker } from './index';
import { MSB16Button } from '../../../components/elements';
import { strings } from '../../../localization';
import { styles } from '../cart.style';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
const ADDRESS = 'Zwarteweg 47 - Kade 367 2030 Antwerpen';

export default function Step2(props) {
  const [billing, setBilling] = useState(true);
  const [shipping, setShipping] = useState();
  const [isSelected, setSelection] = useState(false);
  const [yard, setYard] = useState(false);
  const [height, setHeight] = useState(normalize(330));
  const billingAddress = props.deliveryData?.billing
  const shippinAddress = props.deliveryData?.shipping
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [openTime, setOpenTime] = useState(false)
  const [state, setState] = useState({})
  const otherAddress = () => {
    setBilling(false)
    if (!isSelected) {
      setSelection(!isSelected);
      setHeight(normalize(440));
    } else {
      setSelection(!isSelected);
      setHeight(normalize(330));
    }
  };
  const yardAddress = () => {
    setShipping()
    if (!yard) {
      setYard(!yard);
      setHeight('99%');
    } else {
      setYard(!yard);
      setHeight(normalize(440));
    }
  };
  const shippingAddress = (id) => {
    setShipping(id)
    setYard(false)
  }

  const handleBillingAddress = () => {
    setSelection(false)
    setBilling(!billing)
    setYard(false)
    setShipping('')

  }
  const handleDateOpen = () => {
    setOpenDate(true)
  }
  const handleTimeOpen = () => {
    setOpenTime(true)
  }
  const handleDeliverySelection = () => {
    let obj = {
      billing: billing ? 1 : 0,
      date: moment(date).format('DD-MM-YYYY'),
      time: time,
      shipping_address: shipping ? shipping : '',
      address: state.addressInput ? state.addressInput : '',
      township: state.city ? state.city : '',
      postcode: state.zipCode ? state.zipCode : '',
      comment: state.comment ? state.comment : '',
      save_address: yard ? 1 : 0
    }
    props.handleDeliverySelection(obj)
  }
  return (
    <View style={[styles.stepperBox2, { height: height }]}>
      <View style={styles.backBox}>
        <Icon
          name="keyboard-arrow-left"
          color="#fff"
          size={15}
          onPress={() => props.handleDelivery()}
        />
        <Text style={styles.backText}>{strings('tabCart.back')}</Text>
      </View>
      <Icon
        containerStyle={styles.step2Icon}
        name="keyboard-arrow-down"
        color="#fff"
        size={15}
        onPress={() => props.handleDelivery()}
      />
      <ScrollView>
        <Text style={styles.deliveyTitle}>
          {strings('tabCart.deliveryInformation')}
        </Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={billing}
            onPress={() => handleBillingAddress()}
            containerStyle={styles.checkbox}
            checkedIcon={
              <View style={styles.uncheck}>
                <View style={styles.check}></View>
              </View>
            }
            uncheckedIcon={<View style={styles.uncheck} />}
            checkedColor="red"
            style={styles.check}
            title={
              <Text style={styles.deliverText}>
                {strings('tabCart.billingAddress')}
              </Text>
            }
          />
          <CheckBox
            checked={isSelected}
            onPress={() => otherAddress()}
            containerStyle={styles.checkbox}
            checkedIcon={
              <View style={styles.uncheck}>
                <View style={styles.check}></View>
              </View>
            }
            uncheckedIcon={<View style={styles.uncheck} />}
            checkedColor="red"
            style={styles.check}
            title={
              <Text style={styles.deliverText}>
                {strings('tabCart.otherAddress')}
              </Text>
            }
          />
        </View>
        <Text style={styles.deliveySubTitle}>
          {strings('tabCart.deliveryFrom')}
        </Text>
        <DatePicker
          modal
          open={openDate}
          date={date}
          onConfirm={(date) => {
            setOpenDate(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpenDate(false)
          }}
          mode='date'
        />
        <DatePicker
          modal
          open={openTime}
          date={date}
          onConfirm={(date) => {
            setOpenTime(false)
            let newTime = moment(date).format('HH:mm')
            setTime(newTime)
          }}
          onCancel={() => {
            setOpenTime(false)
          }}
          mode='time'
        />
        <View style={styles.dateTimeContainer}>
          <DatePickerCustom handleDateOpen={handleDateOpen} date={date} />
          <TimePicker handleTimeOpen={handleTimeOpen} time={time} error={props.error} />
        </View>
        {isSelected && (
          <View>
            <Text style={[styles.deliveySubTitle, styles.siteAdd]}>
              {strings('tabCart.siteAddresses')}
            </Text>
            <View style={styles.checkboxContainer}>
              {shippinAddress.map((data, index) => {
                return <CheckBox
                  key={index}
                  checked={shipping === data.id}
                  onPress={() => shippingAddress(data.id)}
                  containerStyle={styles.checkbox}
                  checkedIcon={
                    <View style={styles.uncheck}>
                      <View style={styles.check}></View>
                    </View>
                  }
                  uncheckedIcon={<View style={styles.uncheck} />}
                  checkedColor="red"
                  style={styles.check}
                  title={
                    <Text style={styles.deliverText}>
                      {data.address + "+" + data.number + "+" + data.postcode + "+" + data.township}
                    </Text>
                  }
                />
              })}

              <CheckBox
                checked={yard}
                onPress={() => yardAddress()}
                containerStyle={styles.checkbox}
                checkedIcon={
                  <View style={styles.uncheck}>
                    <View style={styles.check}></View>
                  </View>
                }
                uncheckedIcon={<View style={styles.uncheck} />}
                checkedColor="red"
                style={styles.check}
                title={
                  <Text style={styles.deliverText}>
                    {strings('tabCart.newYardAddress')}
                  </Text>
                }
              />
            </View>
          </View>
        )}
        {yard && (
          <View>
            <Text style={[styles.deliveySubTitle, styles.siteAdd]}>
              {strings('tabCart.newYardAddress')}
            </Text>
            <View style={[styles.yardBox, styles.yardAdd]}>
              <TextInput
                style={styles.dateInput}
                placeholder={strings('tabCart.addressInput')}
                placeholderTextColor="#000000"
                onChangeText={value => setState({ ...state, addressInput: value })}
              />
            </View>
            <View style={styles.yardBottom}>
              <View style={[styles.yardCity, styles.yardAdd]}>
                <TextInput
                  style={styles.dateInput}
                  placeholder={strings('tabCart.city')}
                  placeholderTextColor="#000000"
                  onChangeText={value => setState({ ...state, city: value })}
                />
              </View>
              <View style={[styles.yardPin, styles.yardAdd]}>
                <TextInput
                  style={styles.dateInput}
                  placeholder={strings('tabCart.zipCode')}
                  placeholderTextColor="#000000"
                  onChangeText={value => setState({ ...state, zipCode: value })}
                />
              </View>
            </View>
          </View>
        )}
        <View style={styles.addBox}>
          <Text style={styles.addText}>
            {strings('tabCart.additionalComment')}
          </Text>
          <TextInput
            placeholder="Ik zal niet thuis zijn, plaats mijn product… Bel mij een half uur voor levering"
            multiline
            numberOfLines={2}
            style={styles.addInput}
            onChangeText={value => setState({ ...state, comment: value })}
          />
        </View>
        <View style={[styles.bottomAction, styles.bottomConfirm]}>
          <View style={styles.addressBox}>
            <Text style={styles.addressTitle}>
              {strings('tabCart.address')}
            </Text>
            <Text style={styles.address}>{billingAddress.address + " " + billingAddress.number + " " + billingAddress.postcode + " " + billingAddress.township}</Text>
          </View>
          <View style={styles.cartAction}>
            <MSB16Button
              title={strings('buttons.confirm')}
              style={styles.cartContinue}
              titleStyle={styles.continueText}
              onPress={() => handleDeliverySelection()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
