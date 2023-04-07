import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { dashboardIcon, productsIcon, calenderIcon, calculatorIcon, cartIcon } from '../assets';
import { TAB_ICONS } from '../constants';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const tabIcon = {
  [TAB_ICONS.tabDashboard]: dashboardIcon,
  [TAB_ICONS.tabProducts]: productsIcon,
  [TAB_ICONS.tabArchive]: calenderIcon,
  [TAB_ICONS.tabCalculator]: calculatorIcon,
  [TAB_ICONS.tabCart]: cartIcon,
};

const tabIconSize = {
  [TAB_ICONS.tabDashboard]: { width: 22, height: 22 },
  [TAB_ICONS.tabProducts]: { width: 17, height: 25 },
  [TAB_ICONS.tabArchive]: { width: 19, height: 22 },
  [TAB_ICONS.tabCalculator]: { width: 16, height: 20 },
  [TAB_ICONS.tabCart]: { width: 24, height: 22 },
};

export function TabBarIcon({ color, routeName }) {
  if (routeName !== TAB_ICONS.tabArchive) {
    return (
      <Image
        accessibilityIgnoresInvertColors
        source={tabIcon[routeName]}
        style={[{ tintColor: color }, tabIconSize[routeName]]}
      />
    );
  } else {
    return <MaterialCommunityIcon name={'archive-refresh-outline'} size={25} color={color} />
  }

}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
