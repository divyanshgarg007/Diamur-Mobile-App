
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NAVIGATION } from '../constants';
import { AppNavigator } from './AppNavigator';
// import { ProfileNavigator } from './ProfileNavigator';
//import { Hamburger } from '../components';

import { createDrawerNavigator, } from '@react-navigation/drawer';
import { MenuView, ProfileView, NewsView, FaqsView, AppFunctionalityView, ContactView, MyOrderView } from '../screens';
import GlobalStyles from '../style/globalstyle';

import { HeaderLogo, CloseButton, Hamburger, HeaderUser } from '../components';
import { NewsNavigator } from './NewsNaviagtor'
import { FaqNavigator } from './FaqNavigator';

const Drawer = createDrawerNavigator();


export function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            initialRouteName="AppNavigator"
            drawerContent={props => <MenuView {...props} />}
            screenOptions={({ navigation }) => ({
                headerShown: false,
                drawerPosition: "right",
                title: '',
                drawerStyle: { width: GlobalStyles.width },
            })}
        >
            <Drawer.Screen name="AppNavigator"
                component={AppNavigator}
            />

            <Drawer.Screen name={NAVIGATION.myOrder}
                component={MyOrderView}

                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: '',
                    headerStyle: {
                        backgroundColor: GlobalStyles.colorSet.semiblack,
                    },
                    headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
                    headerTitle: props => <HeaderLogo {...props} />
                })}
            />

            <Drawer.Screen name={NAVIGATION.newsNav}
                component={NewsNavigator}
            />

            <Drawer.Screen name={NAVIGATION.faqsNav}
                component={FaqNavigator}
            />
            <Drawer.Screen name={NAVIGATION.appfunctionality}
                component={AppFunctionalityView}

                options={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    headerShown: true,
                    title: '',
                    headerStyle: {
                        backgroundColor: GlobalStyles.colorSet.semiblack,
                    },
                    headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
                    headerTitle: props => <HeaderLogo {...props} />
                })}
            />

            <Drawer.Screen name={NAVIGATION.contact}
                component={ContactView}

                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: '',
                    headerStyle: {
                        backgroundColor: GlobalStyles.colorSet.semiblack,
                    },
                    headerLeft: () => <CloseButton onClick={() => navigation.goBack()} />,
                    headerTitle: props => <HeaderLogo {...props} />
                })}
            />
        </Drawer.Navigator>
    );
}
