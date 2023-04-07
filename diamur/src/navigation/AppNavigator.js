import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TabBarIcon } from '../components';
import { TouchableOpacity } from "react-native";
import { NAVIGATION, TAB_ICONS } from '../constants';
import { DashboardNavigator } from './DashboardNavigator';
import { ProductNavigator } from './ProductNavigator';
import { ArchiveNavigator } from './ArchiveNavigator';
import { CartNavigator } from './CartNavigator';
import GlobalStyle from '../style/globalstyle';
import { CalculatorNavigator } from './CalculatorNavigator';
import { getCartCount } from '../utilities/authUtils'
import { connect, useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      activeColor="red"
      inactiveColor="#95a5a6"
      barStyle={{ backgroundColor: '#000' }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GlobalStyle.colorSet.orange,
        tabBarInactiveTintColor: GlobalStyle.colorSet.white,
        tabBarStyle: {
          backgroundColor: GlobalStyle.colorSet.semiblack,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon color={color} routeName={TAB_ICONS.tabDashboard} />
          ),
        }}
        name={NAVIGATION.dashboardNav}
        component={DashboardNavigator}
      />

      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon color={color} routeName={TAB_ICONS.tabProducts} />
          ),
        }}
        name={NAVIGATION.productsNav}
        component={ProductNavigator}
      />

      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon color={color} routeName={TAB_ICONS.tabArchive} />
          ),
        }}
        name={NAVIGATION.archiveNav}
        component={ArchiveNavigator}
      />

      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon color={color} routeName={TAB_ICONS.tabCalculator} />
          ),
        }}
        name={NAVIGATION.calculatorNav}
        component={CalculatorNavigator}
      />

      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon color={color} routeName={TAB_ICONS.tabCart} />
          ),
          //tabBarBadge: getCartCount()

        }}
        name={NAVIGATION.cartNav}
        component={CartNavigator}
      />
    </Tab.Navigator>
  );
}
