import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../news.style';

const Item = props => (
  <TouchableOpacity style={styles.cardItem} onPress={props.onClickItem}>
    <Image
      style={styles.cardImage}
      source={{
        uri: props.base_url + '/' + props.image,
      }}></Image>
    <Text style={styles.cardTitle}>{props.title}</Text>
    {props.category[0]?.name && 
    <Text style={styles.cardCategory}>{props.category[0]?.name}</Text>
    }
  </TouchableOpacity>
);

export default function CardList(props) {
  const renderItem = ({item}) => {
    const filterData = props?.newsData?.category.filter(
      category => category.id === parseInt(item.category_id),
    );
    return (
      <Item
        title={item.title}
        image={item.image}
        category={filterData}
        base_url={props?.newsData?.base_url}
        onClickItem={() => props.onClick(item.slug)}
      />
    );
  };
let data=props?.newsData?.news?.filter((data)=>parseInt(data.category_id) === props?.newsData?.category.filter(
  category => category.name === props.category[0],
)[0]?.id)
  return (
    <View style={styles.cardBox}>
      <FlatList
        style={styles.cardsList}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
