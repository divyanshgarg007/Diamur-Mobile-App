import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';
import { FaqsView, FeedbackView } from '../screens';
import { HeaderLogo, CloseButton } from '../components';

const Stack = createNativeStackNavigator();

export function FaqNavigator() {
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
        name={NAVIGATION.faqs}
        component={FaqsView}
        options={({ navigation }) => ({
          headerLeft: () => (
            <CloseButton onClick={() => navigation.goBack()} />
          ),
          headerTitle: props => <HeaderLogo {...props} />,
        })}
      />

      <Stack.Screen
        name={NAVIGATION.feedback}
        component={FeedbackView}
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

