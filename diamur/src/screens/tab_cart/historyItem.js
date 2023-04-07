import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './cart.style';
import { strings } from '../../localization';
import moment from 'moment';
import { MSB16Button } from '../../components/elements';

const HistoryItem = props => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.historyBox}>
        {/* <View style={styles.historyBadge}>
          <Text style={styles.bagdeText}>
            {props?.data?.status === 1 ? '' : strings('tabCart.pending')}
          </Text>
        </View> */}
        <Text style={styles.historyTitle}>
          {strings('tabCart.orderNo')} {props.data.id}
        </Text>
        <Text style={styles.historySubTitle}>
          {strings('tabCart.orderedOn')}{' '}
          {props.data.created_at
            ? moment(props.data.created_at).format('YY/MM/DD')
            : ''}
        </Text>
        {/* <View style={styles.historyBill}>
          <Text style={styles.billTitle}>{strings('tabCart.bill')} </Text>
          <Text style={styles.billDownload}>{strings('tabCart.download')}</Text>
        </View> */}
        <View style={styles.historySent}>
          <Text style={styles.sentTitle}>{strings('tabCart.sent')} </Text>
          <Text style={styles.sentDesc}>
            {props?.data?.shipping_time
              ? moment(props?.data?.shipping_time, 'HH:mm:ss').format('HH:mm')
              : ''}{' '}
            -{' '}
            {props.data.created_at
              ? moment(props.data.created_at).format('DD/MM')
              : ''}
          </Text>
        </View>
        <Text style={[styles.sentTitle, styles.prodOrder]}>
          {strings('tabCart.productOrdered')}
        </Text>
        {props.data.order_item.map((item, index) => (
          <View style={styles.historyItemBox} key={index}>
            <Text style={[styles.itemView, styles.historyItemView]}>
              {JSON.parse(item.product_jsondata)?.product_name}
            </Text>
            <Text style={styles.itemView}>
              {item.quantity}/{strings('tabCart.pieces')}
            </Text>
          </View>
        ))}
        <View style={styles.borderLine}></View>
        <View style={styles.historyTotal}>
          <Text style={styles.totalHistory}>{strings('tabCart.total')} </Text>
          <Text style={styles.totalHistory}>{props.data.total_amount}</Text>
        </View>
        <MSB16Button
          style={styles.reorderBtn}
          containerStyle={styles.reorderContainer}
          title={strings('buttons.reOrder')}
          onPress={() => props.handleReorder(props.data.id)}
          titleStyle={styles.reorderText}
        />
      </View>
    </Card>
  );
};

export default HistoryItem;
