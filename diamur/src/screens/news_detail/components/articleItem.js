import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {Colors} from 'react-native-paper';
import {styles} from '../newsDetail.style';
import { NAVIGATION } from '../../../constants';

export default function ArticleItem(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.newsOtherContainer}
        onPress={() => props.onPress(props.item.slug)}>
        <Card containerStyle={styles.cardBox}>
          <View style={styles.articleBox}>
            <View style={styles.imageBox}>
              <Image
                style={styles.articleImage}
                resizeMode="cover"
                source={{
                  uri: props?.dataUrl + '/' + props.item?.image,
                }}
              />
            </View>
            <View style={styles.contentBox}>
              <Text style={styles.articleTitle} numberOfLines={1}>
                {props.item.title}
              </Text>
              <Text style={styles.articledescription} numberOfLines={2}>
                {props.item.short_description}
              </Text>
            </View>
            <View style={styles.iconBox}>
              <Icon
                size={25}
                name={'keyboard-arrow-right'}
                color={Colors.black}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
