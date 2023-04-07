import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import { useSelector } from 'react-redux'
import { NAVIGATION } from '../constants';

export function RootNavigator() {

    const authState = useSelector((state) => state.rootReducers?.authState)
    // if (authState?.signIn?.data) {
    //     return (
    //         <NavigationContainer>
    //             <DrawerNavigator />
    //         </NavigationContainer>
    //     );
    // } else {
    //     return (
    //         <NavigationContainer>
    //             <AuthNavigator />
    //         </NavigationContainer>
    //     );
    // }

    return (
        <NavigationContainer >
            <AuthNavigator initial={authState?.signIn?.data ? NAVIGATION.drawer : NAVIGATION.introduction} />
        </NavigationContainer>
    );
}

