import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';

import { ProfileView, ProductDetailView, ProfileDetailView } from '../screens';

import { CloseButton, Hamburger, HeaderLogo } from '../components';

const Stack = createNativeStackNavigator();

export function ProfileNavigator() {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: GlobalStyles.colorSet.semiblack,
                },
                headerBackVisible: false
            })}
        >
            <Stack.Screen
                name={NAVIGATION.profile}
                component={ProfileView}
                options={({ navigation }) => ({

                    headerRight: () => null,
                    headerTitle: props => <HeaderLogo {...props} />,
                    headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
                    //headerLeft: null
                })}
            />

            <Stack.Screen
                name={NAVIGATION.profiledetail}
                component={ProfileDetailView}
                options={({ navigation }) => ({

                    headerTitle: props => <HeaderLogo {...props} />,
                    headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
                    //headerLeft: null
                })}
            />

        </Stack.Navigator>
    );
}
