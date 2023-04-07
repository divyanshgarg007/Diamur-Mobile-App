import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { MSB16Button } from '../../../components/elements';
import { strings } from '../../../localization';
import { styles } from '../cart.style';

export default function Step3(props) {
  const [billing, setBilling] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const handlePayNow = () => {
    setBilling(!billing)
    setSelection(false)
  }
  const handlePayOnCredit = () => {
    setBilling(false)
    setSelection(!isSelected)
  }
  return (
    <View style={styles.stepperBox3}>
      <View style={styles.backBox}>
        <Icon
          name="keyboard-arrow-left"
          color="#fff"
          size={15}
          onPress={() => props.handleBackDelivery()}
        />
        <Text style={styles.backText}>{strings('tabCart.back')}</Text>
      </View>
      <Icon
        containerStyle={styles.step2Icon}
        name="keyboard-arrow-down"
        color="#fff"
        size={15}
        onPress={() => props.setShowOrderReview(false)}
      />
      <ScrollView>
        <Text style={styles.deliveyTitle}>
          {strings('tabCart.orderOverview')}
        </Text>
        {props?.orderData?.itemData?.map((item, index) => (
          <View style={styles.itemBox} key={index}>
            <View style={styles.itemTitleBox}>
              <Text style={styles.itemView}>{JSON.parse(item.product_jsondata)?.product_name}</Text>
            </View>
            <View style={styles.itemQtyBox}>
              <Text style={styles.itemView}>{item.quantity} piece</Text>
            </View>
            <View style={styles.itemPriceBox}>
              <Text style={[styles.itemPrice, styles.itemView]}>
                € {item?.total_amount}
              </Text>
            </View>
          </View>
        ))}
        <View style={styles.itemBox}>
          <View style={styles.itemTitleBox}>
            <Text style={styles.itemView}>Levering</Text>
          </View>
          <View style={styles.itemQtyBox}>
            <Text style={styles.itemView}></Text>
          </View>
          <View style={styles.itemPriceBox}>
            <Text style={[styles.itemPrice, styles.itemView]}>
              € {props?.orderData?.cart?.total_transpotation_cost}
            </Text>
          </View>
        </View>
        <View style={styles.borderLine}></View>
        <View style={styles.historyTotal}>
          <Text style={styles.totalHistory}>{strings('tabCart.total')} </Text>
          <Text style={styles.totalHistory}>€ {props?.orderData?.cart?.total_amount}</Text>
        </View>
        <Text style={styles.deliveySubTitle}>
          {strings('tabCart.deliveryAddress')}
        </Text>
        <Text style={styles.deliveyContent}>{strings('tabCart.ownDepot')}</Text>
        <Text style={styles.address}>
          {props?.orderData?.cart?.address + " " + props?.orderData?.cart?.number + " " + props?.orderData?.cart?.postcode + " " + props?.orderData?.cart?.township}
        </Text>
        {props?.orderData?.cart?.comments &&
          <>
            <Text style={styles.additionText}>
              {strings('tabCart.additionComment')}
            </Text>
            <Text style={styles.additionBody}>
              {props?.orderData?.cart?.comments}
            </Text>
          </>
        }

        <View style={styles.paymentBox}>
          <Text style={styles.paymentTitle}>{strings('tabCart.payment')}</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={billing}
              onPress={() => handlePayNow()}
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
                  {strings('tabCart.payNow')}
                </Text>
              }
            />
            <CheckBox
              checked={isSelected}
              onPress={() => handlePayOnCredit()}
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
                  {strings('tabCart.payOnCredit')} 300/1500
                </Text>
              }
            />
          </View>
        </View>
        <View style={styles.orderAction}>
          <MSB16Button
            title={strings('buttons.confirmYourOrder')}
            style={styles.confirmBtn}
            titleStyle={styles.continueText}
            disabled={!(billing || isSelected)}
            onPress={() => props.handlePayment()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
