import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';
import { HeaderLogo, Hamburger, HeaderUser, CloseButton } from '../components';
import {
  ProductView,
  ProductDetailView,
  ProductFilterView
} from '../screens';

const Stack = createNativeStackNavigator();

export function ProductNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: GlobalStyles.colorSet.semiblack,
        },
      })}
    >
      <Stack.Screen
        name={NAVIGATION.logs}
        component={ProductView}
        options={({ navigation }) => ({
          headerShown: true,

          headerRight: () => {
            return <Hamburger onClick={() => navigation.openDrawer()} />;
          },
          headerLeft: () => (
            <HeaderUser onClick={() => navigation.navigate(NAVIGATION.profileNav)} />
          ),
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />
      <Stack.Screen
        name={NAVIGATION.productDetails}
        component={ProductDetailView}
        options={({ navigation }) => ({
          headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
          headerTitle: props => <HeaderLogo {...props} />
        })}
      />
      <Stack.Screen
        name={NAVIGATION.productfilter}
        component={ProductFilterView}
        options={({ navigation }) => ({
          headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
          headerTitle: props => <HeaderLogo {...props} />
        })}
      />
    </Stack.Navigator>
  );
}
