import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';
import { NewsDetailView, NewsView } from '../screens';
import { HeaderLogo, CloseButton } from '../components';

const Stack = createNativeStackNavigator();

export function NewsNavigator() {
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
        name={NAVIGATION.news}
        component={NewsView}
        options={({ navigation }) => ({
          headerLeft: () => (
            <CloseButton onClick={() => navigation.goBack()} />
          ),
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />

      <Stack.Screen
        name={NAVIGATION.newsdetail}
        component={NewsDetailView}
        options={({ navigation }) => ({
          headerLeft: () => (
            <CloseButton onClick={() => navigation.goBack()} />
          ),
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />
    </Stack.Navigator>
  );
}

