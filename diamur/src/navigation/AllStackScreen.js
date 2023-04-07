import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';
import { HeaderLogo, Hamburger, HeaderUser } from '../components';
import { DrawerNavigator } from './DrawerNavigator';
import { ProfileNavigator } from './ProfileNavigator';

import {
  HomeView,
  ProductDetailView,
  ProductView,
  ArchiveView,
  CalculatorView,
  CartView,
  IntroView,
  LoginView,
  RegisterView,
  MenuView,
  NewsView,
  FeedbackView,
  FaqsView,
  NewsDetailView,
  ProductFilterView,
  AppFunctionalityView,
  ContactView,
  ProfileView,
  ProfileDetailView,
  MyOrderView,
  NotAuthorized,
} from '../screens';

const Stack = createNativeStackNavigator();

export function AllStackScreen(props) {
  const [header, setHeader] = useState(true);
  const onClickProfile = navigation => {
    setHeader(false);
    navigation.navigate('ProfileNavigator');
  };

  return (
    <Stack.Navigator
      initialRouteName={props.initial}
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerShown: header,
        drawerPosition: 'right',
        title: '',
        headerStyle: {
          backgroundColor: GlobalStyles.colorSet.semiblack,
        },
        headerRight: () => {
          return <Hamburger onClick={() => navigation.openDrawer()} />;
        },
        headerLeft: () => (
          <HeaderUser onClick={() => onClickProfile(navigation)} />
        ),
        headerTitle: props => <HeaderLogo {...props} />,
      })}>
      <Stack.Screen name={NAVIGATION.dashboard} component={HomeView} />
      <Stack.Screen name={NAVIGATION.logs} component={ProductView} />
      <Stack.Screen
        name={NAVIGATION.productDetails}
        component={ProductDetailView}
      />

      <Stack.Screen name={NAVIGATION.archive} component={ArchiveView} />
      <Stack.Screen name={NAVIGATION.calculator} component={CalculatorView} />

      <Stack.Screen name={NAVIGATION.cart} component={CartView} />

      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />

      <Stack.Screen
        name={NAVIGATION.drawer}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.home}
        component={IntroView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.login}
        component={LoginView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.register}
        component={RegisterView}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.news}
        component={NewsView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.feedback}
        component={FeedbackView}
      // options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATION.faqs}
        component={FaqsView}
      //options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.newsdetail}
        component={NewsDetailView}
      // options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.productfilter}
        component={ProductFilterView}
      />
      <Stack.Screen
        name={NAVIGATION.appfunctionality}
        component={AppFunctionalityView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.contact}
        component={ContactView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.profile}
        component={ProfileView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.profiledetail}
        component={ProfileDetailView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.myOrder}
        component={MyOrderView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.notAuthorized}
        component={NotAuthorized}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
