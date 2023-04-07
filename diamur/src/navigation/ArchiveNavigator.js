import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants';
import GlobalStyles from '../style/globalstyle';
import { HeaderLogo, Hamburger, HeaderUser } from '../components';
import {
    ArchiveView,
} from '../screens';

const Stack = createNativeStackNavigator();

export function ArchiveNavigator(props) {
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
            <Stack.Screen name={NAVIGATION.archive} component={ArchiveView} />
        </Stack.Navigator>
    );
}
