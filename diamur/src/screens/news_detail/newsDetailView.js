import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, ArticleItem } from './components';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings } from '../../localization';
import { ActionCreators } from '../../redux/action';
import { styles } from '../news_detail/newsDetail.style';
import { NAVIGATION } from '../../constants';
import { CloseButton } from '../../components';

function NewsDetailView(props) {
  const newsState = useSelector(state => state.rootReducers?.newsState);

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
    <FlatList
      ListHeaderComponent={() => (
        <View>
          <Header
            detailData={props.route.params.data.newsDetail}
            dataUrl={props.route.params.data.base_url}
            onClick={() => props.navigation.goBack()}
          />
          <Text style={styles.otherText}>
            {strings('newsDetail.otherArticles')}
          </Text>
        </View>
      )}
      data={props.route.params.data.news}
      renderItem={({ item }) => (
        <ArticleItem item={item} dataUrl={props.route.params.data.base_url}
        onPress={(item) => onClickItem(item)} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(NewsDetailView);