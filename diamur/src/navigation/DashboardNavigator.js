import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';
import { HeaderLogo, Hamburger, HeaderUser, CloseButton } from '../components';
import {
  HomeView,
  ProductDetailView,
} from '../screens';

const Stack = createNativeStackNavigator();

export function DashboardNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: GlobalStyles.colorSet.semiblack,
        },
        headerRight: () => {
          return <Hamburger onClick={() => navigation.openDrawer()} />;
        },
        headerLeft: () => (
          <HeaderUser onClick={() => navigation.navigate(NAVIGATION.profileNav)} />
        ),
        headerTitle: props => <HeaderLogo {...props} />,
      })}
    >
      <Stack.Screen name={NAVIGATION.dashboard} component={HomeView} />
      {/* <Stack.Screen
        name={NAVIGATION.productDetails}
        component={ProductDetailView}
      /> */}

      <Stack.Screen
        name={NAVIGATION.productDetails}
        component={ProductDetailView}
        options={({ navigation }) => ({
          headerRight: () => null,
          headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
          headerTitle: props => <HeaderLogo {...props} />
        })}
      />
    </Stack.Navigator>
  );
}
