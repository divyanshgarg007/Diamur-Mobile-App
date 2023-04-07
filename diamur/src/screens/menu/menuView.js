import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Button, Alert } from 'react-native';
import { MenuItem, NavigationBar } from './components';
import { styles } from './menu.style';
import { strings } from '../../localization';
import { NAVIGATION } from '../../constants';
import { setToken } from '../../utilities/authUtils';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../redux/action';

const menuData = [
  {
    id: '1',
    name: 'My Orders',
  },
  {
    id: '2',
    name: 'News',
  },
  {
    id: '3',
    name: 'Frequently Asked Questions',
  },
  {
    id: '4',
    name: 'Calculator Tool',
  },
  {
    id: '5',
    name: 'App functionality',
  },
  {
    id: '6',
    name: 'Contact',
  },
  {
    id: '7',
    name: 'Logout',
  },
];
const MenuView = (props) => {
  const onSignOut = () => {
    Alert.alert(
      'Are you sure you want to logout',
      "",
      [
        {
          text: 'no',
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: 'yes', onPress: () => handleLogout() }
      ]
    );
  }
  const handleLogout = () => {
    setToken('token', '');
    props.actions.logoutAction();
    props.navigation.navigate(NAVIGATION.login);
  }
  const handleMenu = title => {
    //navigation.navigate("NewsNavigator")
    //navigation.closeDrawer()
    if (title === 'My Orders') {
      // TODO: Go to separate Order list screen
      props.navigation.navigate(NAVIGATION.myOrder);
    } else if (title === 'News') {
      props.navigation.navigate(NAVIGATION.newsNav);
    } else if (title === 'Frequently Asked Questions') {
      props.navigation.navigate(NAVIGATION.faqsNav);
    } else if (title === 'Calculator Tool') {
      //TODO Open menu here
    } else if (title === 'App functionality') {
      props.navigation.navigate(NAVIGATION.appfunctionality);
    } else if (title === 'Contact') {
      props.navigation.navigate(NAVIGATION.contact);
    } else if (title === 'Logout') {
      //props.navigation.navigate(NAVIGATION.faqsNav);
      onSignOut()
    }
    else {
      props.navigation.navigate('AppNavigator');
    }
  };

  return (
    <SafeAreaView>
      <NavigationBar onClose={() => props.navigation.closeDrawer()} />
      <ScrollView>
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>{strings('menu.menuHeading')}</Text>
          <Text style={styles.subTitle}>Orders</Text>
        </View>
        <View>
          {menuData.map((item, index) => (
            <MenuItem
              key={item.id}
              item={item}
              handleMenu={name => handleMenu(name)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(MenuView);