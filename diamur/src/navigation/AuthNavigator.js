import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
// import GlobalStyles from '../style/globalstyle';
// import { HeaderLogo, Hamburger, HeaderUser } from '../components';

import {
  IntroView,
  LoginView,
  RegisterView,
} from '../screens';
import { DrawerNavigator } from './DrawerNavigator';
import { ProfileNavigator } from './ProfileNavigator';

const Stack = createNativeStackNavigator();
export function AuthNavigator(props) {
  return (
    <Stack.Navigator initialRouteName={props.initial}>

      <Stack.Screen
        name={NAVIGATION.introduction}
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
        name={NAVIGATION.drawer}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.profileNav}
        component={ProfileNavigator}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
