import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { CardList } from './components';
import { styles } from './news.style';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings } from '../../localization';
import { ActionCreators } from '../../redux/action';
import { ActivityIndicator } from 'react-native';
import { CloseButton } from '../../components';
import { NAVIGATION } from '../../constants';

function NewsView(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState([]);
  const newsState = useSelector(state => state.rootReducers?.newsState);

  useEffect(() => {
    props.actions.newsListAction();
  }, []);

  useEffect(() => {
    console.log(newsState.newsList?.data?.payload)
    if (newsState.newsList?.data?.payload) {
      let categoryData = newsState.newsList?.data?.payload;
      let categoryArr = [];
      categoryData.category.map(item => {
        categoryArr.push([item.name]);
      });
      setNewsData(newsState.newsList?.data?.payload);
      setCategory(categoryArr);
    }
  }, [newsState.newsList]);

  useEffect(() => {
    if (newsState.newsDetail?.data?.payload) {
      let data = newsState.newsDetail?.data?.payload;
      props.navigation.navigate(NAVIGATION.newsdetail, { data });
    }
  }, [newsState.newsDetail]);

  const onClickItem = item => {
    props.actions.newsDetailAction(item);
  };
  return (
    <View style={styles.newsContainer}>
      {newsState.newsList?.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <Text style={styles.newsTitle}>{strings('news.newsHeading')}</Text>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ButtonGroup
            buttons={category}
            selectedIndex={selectedIndex}
            onPress={value => {
              setSelectedIndex(value);
            }}
            containerStyle={styles.buttonContainer}
            innerBorderStyle={styles.innerBtn}
            buttonStyle={styles.categoriesBtn}
            buttonContainerStyle={styles.containerButton}
            textStyle={styles.btnText}
            selectedButtonStyle={styles.selectedBtn}
          />
        </ScrollView>
      </View>
      <CardList category={category[selectedIndex]} newsData={newsData} onClick={(item) => onClickItem(item)} />
    </View>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(NewsView);
