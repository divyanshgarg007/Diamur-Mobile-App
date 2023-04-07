import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, ScrollView } from 'react-native';
import { Header, FilterItem, ProductFilterItem, CategoryFilterItem } from './components';
import { MSB16Button } from '../../components/elements';
import { Icon } from 'react-native-elements';
import { strings } from '../../localization';
import { styles } from './productFilter.style';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';
import { ActivityIndicator } from 'react-native';
import { NavigationBar } from '../menu/components';

function ProductFilterView(props) {
  ////FILTER
  const [search, setSearch] = useState(props.route?.params?.filterObj?.search || '')
  const [applicationArea, setApplicationArea] = useState(props.route?.params?.filterObj?.applicationArea)
  const [category, setCategory] = useState([props.route?.params?.filterObj?.category] || [])
  const [familyGroup, setFamilyGroup] = useState(props.route?.params?.filterObj?.familyGroup || null)
  const [familyChild, setFamilyChild] = useState(props.route?.params?.filterObj?.familyChild || null)
  const [family, setDataFamily] = useState(props.route?.params?.productFamily)
  //////
  const [loading, setLoader] = useState(false)
  const handleFilter = () => {
    props.route?.params?.handleFilter(search, applicationArea, category, familyChild, familyGroup)
    props.navigation.goBack()
  }
  const handleChangeApplication = (id) => {
    setLoader(true)
    props.actions.productApplicationFilter(id, onSuccessApplication, onErrorApplication);
  }
  const onApplicationChange = () => {
    setFamilyChild('')
    setFamilyGroup('')
    setCategory([])
  }
  const onSuccessApplication = (product) => {
    setLoader(false)
    let productData = product
    let productDataFamily = productData
    let dataFamily = []
    for (const key in productDataFamily) {
      let obj = {
        title: key,
        data: Object.keys(productDataFamily[key])
      }
      dataFamily.push(obj)
    }
    setDataFamily(dataFamily)
  }
  const onErrorApplication = (data) => {
    setLoader(false)
    console.log(data)
  }
  return (
    <ScrollView style={styles.filterBox}>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder={strings('productFilter.searchPlaceholder')}
          placeholderTextColor="#FF3A18"
          onChangeText={value => {
            setSearch(value)
          }}
          value={search}
        />
        <Icon
          name="search"
          type="font-awesome"
          color="#FF3A18"
          size={12}
          style={styles.searchIcon}
        />
      </View>
      <Header />
      <FilterItem
        item={props.route?.params?.areas}
        title="Application"
        productData={props.route?.params?.productData}
        setFilterData={props.route?.params?.setFilterData}
        onApplicationChange={onApplicationChange}
        isSelectedChild={applicationArea}
        setSelectionChild={setApplicationArea}
        handleChangeApplication={handleChangeApplication}
      />
      <CategoryFilterItem
        item={props.route?.params?.category}
        title='Category'
        productData={props.route?.params?.productData}
        setFilterData={props.route?.params?.setFilterData}

        isSelectedChild={category}
        setSelectionChild={setCategory}
      />
      <ProductFilterItem
        data={applicationArea !== '' ? family : props.route?.params?.productFamily}
        productData={props.route?.params?.productData}
        setFilterData={props.route?.params?.setFilterData}

        isSelected={familyGroup}
        isSelectedChild={familyChild}
        setSelection={setFamilyGroup}
        setSelectionChild={setFamilyChild}
      />
      <MSB16Button
        style={styles.searchBtn}
        title={strings('buttons.search')}
        titleStyle={styles.searchText}
        onPress={() => handleFilter()}
      />
    </ScrollView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(ProductFilterView);
