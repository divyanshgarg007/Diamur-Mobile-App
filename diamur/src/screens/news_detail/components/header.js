import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from 'react-native-paper';
import {strings} from '../../../localization';
import {styles} from '../newsDetail.style';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

export default function Header(props) {
  const {width} = useWindowDimensions();
  const source = {
    html: props.detailData.description,
  };

  return (
    <View style={styles.newsDetailContainer}>
      <Image
        style={styles.detailMainImage}
        source={{
          uri: props?.dataUrl + '/' + props.detailData?.image,
        }}></Image>
      <View style={styles.innerDetailContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.detailsTitle}>{props.detailData.title}</Text>
          {/* <Icon
            size={20}
            name={'share'}
            color={Colors.white}
            style={styles.shareIcon}
          /> */}
        </View>
        <RenderHtml
          style={styles.detailsdescription}
          contentWidth={width}
          source={source}
        />
        {/* <Image
          style={styles.detailInnerImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1651592753269-7d661e4a9899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }}></Image> */}
        <TouchableOpacity style={styles.backAction} onPress={props.onClick}>
          <Icon
            size={20}
            name={'keyboard-arrow-left'}
            color={Colors.white}
            style={styles.backIcon}
          />
          <Text style={styles.backText}>
            {strings('newsDetail.backOverview')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
